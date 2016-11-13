// Configure Session
import express from "express";
import session from "express-session";
import mongoDBSession from "connect-mongodb-session";
import {json} from "body-parser";
import config from "./config/config";
import path from "path";
import fs from "fs";


const app = express();
var server = require('http').createServer(app)

var io = require('socket.io')(server);

const port = process.env.PORT || 5001;

app.use(json());
// app.use(session(config.session));
const MongoDBStore = mongoDBSession( session );
const store = new MongoDBStore( {
      collection: "expressSessions"
    , uri: config.database.mongoURI
} );
app.use( session( Object.assign( {}, config.session, { store } ) ) );

// Configure Mongoose
import mongoose from "mongoose";
mongoose.connect(config.database.mongoURI);
mongoose.connection.once("open", () => console.log('WINE database now connected!'));

// Configure Routes
import masterRoutes from "./server/features/masterRoutes";
masterRoutes(app);

import subdomains from "./server/subdomains.js"
subdomains(app)

io.on('connection', function (socket) {
  socket.on('driverPosition', position => {
    console.log("Server console log: ", position);
    socket.broadcast.emit('driverPosition', position)
  });

  socket.on('disconnect', function (data) {
    console.log(data);
  });
});

// Listen on Port
subdomains(app)
server.listen(port, ()=>console.log(`listening on port ${port}`));

import express from "express"
import {json} from "body-parser"

const app = express()
const port = 5001
app.use(express.static(`${__dirname}/dist`))

app.listen(port, ()=>{console.log(`listening on port ${port}`);})

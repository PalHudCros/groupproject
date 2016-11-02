const express = require('express');
const subdomain = require('express-subdomain')
const adminRouter = express.Router();
const driverRouter = express.Router();

module.exports = app => {

app.use(subdomain('driver', driverRouter))
app.use(subdomain('admin', adminRouter))

adminRouter.get('/init.js',
    (req, res)=>{ res.sendFile('init.js', {root:`${__dirname}/../dist/chunks`}) }
  )
  .get('/init.js.map',
    (req, res)=>{ res.sendFile('init.js.map', {root:`${__dirname}/../dist/chunks`}) }
  )
  .get('/admin.js',
    (req, res)=>{ res.sendFile('admin.js', {root:`${__dirname}/../dist/chunks`}) }
  )
  .get('/admin.js.map',
    (req, res)=>{ res.sendFile('admin.js.map', {root:`${__dirname}/../dist/chunks`}) }
  )
  .get('*',
  (req, res)=>{ res.sendFile('index.html', {root:`${__dirname}/../dist/admin`}) }
);

driverRouter.get('/init.js',
    (req, res)=>{ res.sendFile('init.js', {root:`${__dirname}/../dist/chunks`}) }
  )
  .get('/init.js.map',
    (req, res)=>{ res.sendFile('init.js.map', {root:`${__dirname}/../dist/chunks`}) }
  )
  .get('/driver.js',
    (req, res)=>{ res.sendFile('driver.js', {root:`${__dirname}/../dist/chunks`}) }
  )
  .get('/driver.js.map',
    (req, res)=>{ res.sendFile('driver.js.map', {root:`${__dirname}/../dist/chunks`}) }
  )
  .get('*',
    (req, res)=>{ res.sendFile('index.html', {root:`${__dirname}/../dist/shop`}) }
  );

app.get('/init.js',
    (req, res)=>{ res.sendFile('init.js', {root:`${__dirname}/../dist/chunks`}) }
  )
  .get('/init.js.map',
    (req, res)=>{ res.sendFile('init.js.map', {root:`${__dirname}/../dist/chunks`}) }
  )
  .get('/shop.js',
    (req, res)=>{ res.sendFile('shop.js', {root:`${__dirname}/../dist/chunks`}) }
  )
  .get('/shop.js.map',
    (req, res)=>{ res.sendFile('shop.js.map', {root:`${__dirname}/../dist/chunks`}) }
  )
  .get('*',
    (req, res)=>{ res.sendFile('index.html', {root:`${__dirname}/../dist/shop`}) }
  );
}

const express = require('express');
const subdomain = require('express-subdomain')
const adminRouter = express.Router();
const driverRouter = express.Router();


module.exports = app => {

app.use(subdomain('driver', driverRouter))
app.use(subdomain('admin', adminRouter))

//api specific routes
adminRouter.get('/',
  (req, res)=>{ res.sendFile('index.html', {root:`${__dirname}/../dist/admin`}) }
);
adminRouter.get('/init.js',
  (req, res)=>{ res.sendFile('init.js', {root:`${__dirname}/../dist/chunks`}) }
);
adminRouter.get('/init.js.map',
  (req, res)=>{ res.sendFile('init.js.map', {root:`${__dirname}/../dist/chunks`}) }
);
adminRouter.get('/admin.js',
  (req, res)=>{ res.sendFile('admin.js', {root:`${__dirname}/../dist/chunks`}) }
);
adminRouter.get('/admin.js.map',
  (req, res)=>{ res.sendFile('admin.js.map', {root:`${__dirname}/../dist/chunks`}) }
);
adminRouter.get('*',
  (req, res)=>{ res.sendFile('index.html', {root:`${__dirname}/../dist/admin`}) }
);

driverRouter.get('/',
  (req, res)=>{ res.sendFile('index.html', {root:`${__dirname}/../dist/driver`}) }
);
driverRouter.get('/init.js',
  (req, res)=>{ res.sendFile('init.js', {root:`${__dirname}/../dist/chunks`}) }
);
driverRouter.get('/init.js.map',
  (req, res)=>{ res.sendFile('init.js.map', {root:`${__dirname}/../dist/chunks`}) }
);
driverRouter.get('/driver.js',
  (req, res)=>{ res.sendFile('driver.js', {root:`${__dirname}/../dist/chunks`}) }
);
driverRouter.get('/driver.js.map',
  (req, res)=>{ res.sendFile('driver.js.map', {root:`${__dirname}/../dist/chunks`}) }
);
driverRouter.get('*',
  (req, res)=>{ res.sendFile('index.html', {root:`${__dirname}/../dist/shop`}) }
);

app.get('/',
  (req, res)=>{ res.sendFile('index.html', {root:`${__dirname}/../dist/shop`}) }
);
app.get('/init.js',
  (req, res)=>{ res.sendFile('init.js', {root:`${__dirname}/../dist/chunks`}) }
);
app.get('/init.js.map',
  (req, res)=>{ res.sendFile('init.js.map', {root:`${__dirname}/../dist/chunks`}) }
);
app.get('/shop.js',
  (req, res)=>{ res.sendFile('shop.js', {root:`${__dirname}/../dist/chunks`}) }
);
app.get('/shop.js.map',
  (req, res)=>{ res.sendFile('shop.js.map', {root:`${__dirname}/../dist/chunks`}) }
);
app.get('*',
  (req, res)=>{ res.sendFile('index.html', {root:`${__dirname}/../dist/shop`}) }
);

}

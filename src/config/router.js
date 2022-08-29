const mapRoutes = require('express-routes-mapper');

const allRoutes = require('./routes/allRoutes');

const routes = mapRoutes(allRoutes,'src/app/controllers/');

module.exports ={
    routes
};
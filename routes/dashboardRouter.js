const express = require('express');
const bodyParser = require('body-parser')

const dashboardRouter = express.Router();


dashboardRouter.use(bodyParser.json());

dashboardRouter.route('/')

  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); 
  }) 
  
  .get((req, res) => {
    res.end('Will send all dashboard info to you')
  })

  .post((req, res) => {
    res.end(`Will create new employee/review`)
  })

  .put((req, res) => {
    res.statusCode = 403;
    res.end('Completing review...');
  })

  .delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /dashboard')
  });


  module.exports = dashboardRouter;
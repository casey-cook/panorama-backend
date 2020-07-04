const express = require('express');
const bodyParser = require('body-parser')

const employeesRouter = express.Router();

employeesRouter.use(bodyParser.json());

//EMPLOYEES
employeesRouter.route('/')

  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); 
  }) 
  
  .get((req, res) => {
    res.end('Will send all employee info to you')
  })

  .post((req, res) => {
    res.end(`POST operation not supported on /employees`)
  })

  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /employees');
  })

  .delete((req, res) => {
    res.statusCode = 403;
    res.end('Deleting employee...')
  });

//EMPLOYEE w/ ID
employeesRouter.route('/:employeeId')

.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next(); 
}) 

.get((req, res) => {
  res.end(`Will send all info for employee ${req.body} to you`)
})

.post((req, res) => {
  res.end(`POST operation not supported on employees/employeeId`)
})

.put((req, res) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on employees/employeeId');
})

.delete((req, res) => {
  res.statusCode = 403;
  res.end('DELETE operation not supported on /employees/employeeId')
});


module.exports = employeesRouter;
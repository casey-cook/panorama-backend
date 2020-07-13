const express = require('express');
const bodyParser = require('body-parser');
const Employee = require('../models/employee');

const employeesRouter = express.Router();

employeesRouter.use(bodyParser.json());

//EMPLOYEES
employeesRouter
	.route('/')

	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})

	.get((req, res) => {
		res.end('Will send entire EMPLOYEES array to you');
	})

	.post((req, res) => {
		res.end(`Adding employee ${req.body.name} to EMPLOYEES array`);
	})

	.put((req, res) => {
		res.statusCode = 403;
		res.end('PUT operation not supported on /employees');
	})

	.delete((req, res) => {
		res.statusCode = 403;
		res.end('DELETE operation not supported on /employees');
	});

//EMPLOYEE w/ ID
employeesRouter
	.route('/:employeeId')

	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})

	.get((req, res) => {
		res.end(`Will send all info for employee ${req.body.employeeId} to you`);
	})

	.post((req, res) => {
		res.statusCode = 403;
		res.end(`POST operation not supported on employees/employeeId`);
	})

	.put((req, res) => {
		res.statusCode = 403;
		res.end('PUT operation not supported on employees/employeeId');
	})

	.delete((req, res) => {
		res.end(`Deleting employee with id: ${req.body.employeeId} now...`);
	});

//EMPLOYEE w/ ID REVIEWS
employeesRouter
	.route('/:employeeId/reviews')

	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})

	.get((req, res) => {
		res.end(`Will send all reviews for employee ${req.body.employeeId} to you`);
	})

	.post((req, res) => {
		res.end(`Adding a review to employee reviews array`);
	})

	.put((req, res) => {
		res.statusCode = 403;
		res.end('PUT operation not supported on employees/employeeId/reviews');
	})

	.delete((req, res) => {
		res.statusCode = 403;
		res.end('DELETE operation not supported on employees/employeeId/reviews');
	});

//EMPLOYEE w/ ID /REVIEWS /:ReviewId
employeesRouter
	.route('/:employeeId/reviews/:reviewId')

	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})

	.get((req, res) => {
		res.end(
			`Will send review details for review id: ${req.body.reviewId} to you`
		);
	})

	.post((req, res) => {
		res.end(
			`POST operation not supported on employees/employeeId/reviews/:reviewId`
		);
	})

	.put((req, res) => {
		res.statusCode = 403;
		res.end(`Updating review with id: ${req.params.reviewId} now`);
	})

	.delete((req, res) => {
		res.statusCode = 403;
		res.end(`Deleting review with id: ${req.body.reviewId} now`);
	});

module.exports = employeesRouter;

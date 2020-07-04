const express = require('express');
const bodyParser = require('body-parser')

const reviewsRouter = express.Router();

reviewsRouter.use(bodyParser.json());

//REVIEWS
reviewsRouter.route('/')

  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); 
  }) 
  
  .get((req, res) => {
    res.end('Will send all reviews info to you')
  })

  .post((req, res) => {
    res.end(`POST operation not supported on /reviews`)
  })

  .put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /reviews');
  })

  .delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /reviews')
  });

//REVIEW w/ ID
reviewsRouter.route('/:reviewId')

.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next(); 
}) 

.get((req, res) => {
  res.end(`Will send all info for specific review ${req.body} to you`)
})

.post((req, res) => {
  res.end(`POST operation not supported on reviews/reviewId`)
})

.put((req, res) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on reviews/reviewId');
})

.delete((req, res) => {
  res.statusCode = 403;
  res.end('Deleting review...')
});


module.exports = reviewsRouter;
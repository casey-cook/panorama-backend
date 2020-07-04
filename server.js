const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const dashboardRouter = require ('./routes/dashboardRouter')
const employeesRouter = require ('./routes/employeesRouter')
const reviewsRouter = require ('./routes/reviewsRouter')


const hostname = 'localhost';
const port = 4000;

const app = express(); //returns express server application

app.use(morgan('dev')); //configures morgan to log using the dev version, prints addtl info

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); //now when server receives requests with json in body, body-parser middleware will parse it into properties of the request object, so we can access it more easily

app.use('/', dashboardRouter);
app.use('/employees', employeesRouter);
app.use('/reviews', reviewsRouter);


app.use((req, res) => {
  // console.log(req.headers); removed, because logging is handled by morgan
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server for Panorama</h1></body></html>')
})

//creates instance of http server class, and starts listening to it
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
});
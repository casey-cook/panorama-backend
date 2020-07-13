const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const perfAreaSchema = new Schema({
  area1 : {
    type: String,
    required: true,
    unique: true
  },
  area2 : {
    type: String,
    required: true,
    unique: true
  },
  area3 : {
    type: String,
    required: true,
    unique: true
  }
},
{
  timestamps: true
})

const scoreSchema = new Schema({
  score1: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  score2: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  score3: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  }
})

const dateSchema = new Schema({
  year: {
    type: String,
    required: true
  },
  month: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  }
})

const reviewsSchema = new Schema({
  employeeId: {
    type: Number,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  reviewPage: {
    type: Number,
    required: true,
    min: 0
  },
  name: {
    type: String,
    required: true
  },
  date: [dateSchema],
  areas: [perfAreaSchema],
  scores: [scoreSchema],
  note: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }

})

const employeeSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  photo: {
    type: String,
    required: true
  },
  performanceAreas: [perfAreaSchema],
  reviews: [reviewsSchema]
},
{
  timestamps: true
})


const Employees = mongoose.model('Employees', employeeSchema);

module.exports = Employees;
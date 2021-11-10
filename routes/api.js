const express = require('express')
const app = express()
//const castles = require('../data/castles')
const router = express.Router();
//connect to database
const db = require('../model/db')
const mongoose = require('mongoose');
const { response } = require('express');
const dotenv = require('dotenv').config()

const dogImages = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  imgURL: String,
  width: Number,
  height: Number,
});
const DogImage = mongoose.model('DogImage', dogImagesSchema)

router.get('/dogImage', async (req, res) => {  
  try{
    const dogImage = await DogImage.find()  
    res.send(dogImage)
  } catch (error) {
    res.send({error: 'Dog Image Not Found'})
  }
})

router.get('/dogImage/:id', async (req, res) => { 
  try{
    const dogImage = await DogImage.findOne({ id: req.params.id })
    if(!dogImage) {
      throw new Error()
    }
    res.send(dogImage)
  } catch (error) {
    res.status(404)    
    res.send({error: 'Dog Image Not Found'})
  } 
})

module.exports = router
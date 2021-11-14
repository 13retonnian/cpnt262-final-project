// Coded by Christopher Barber, Jesse Thadi, Icah Vega, Alex Uk with attributions to SAIT Webdev including Tony Grimes and Ashlyn Knox code and classes
const express = require('express')
const app = express()
const router = express.Router();
const Subscriber = require('../models/subscriber')
//connect to database
const mongoose = require('mongoose');

const dogImagesSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  imgURL: String,
  width: Number,
  height: Number,
});
const DogImage = mongoose.model('Dog-Image', dogImagesSchema)

router.get('/dog-images', async (req, res) => {  
  //checking for query parameters first if there are arguments after dog-images in address bar this will get them and return a single thing    
  if(req.query.id !== undefined) {    
    try{
      const dogImage = await DogImage.findOne({ id: req.query.id })
      if(!dogImage) {
        throw new Error()
      }
      res.send(dogImage)
    } catch (error) {
      res.status(404)    
      res.send({error: 'Dog Image Not Found'})
    }
  }
  //if there's no id arguments then send the whole list
  try{
    const dogImage = await DogImage.find()  
    res.send(dogImage)
  } catch (error) {
    res.send({error: 'Dog Image Not Found'})
  }
})

router.get('/dog-images/:id', async (req, res) => { 
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

// Team Members

const teamSchema = new mongoose.Schema({
  name: String,
  profilePic: String,
  title: String,
  bio: String,
  github: String,
})

const teamList = mongoose.model('Team', teamSchema)

console.log(teamList)

router.get('/team', async (req, res) => {
  try {
    const members = await teamList.find()
    res.send(members)
  } catch (error) {
    res.send({error: 'Members Not Found'})
  }
})

router.get('/team/:name', async(req, res) => {
  try{
    const members = await teamList.findOne({ name: req.params.name })
    if(!members) {
      throw new Error()
    }
    res.send(members)
  } catch (error) {
    res.status(400)
    res.send({ error: 'Member Not Found'})
  }
})

//subscribers
router.post('/subscribers', async (req, res) => {  
  try {
    const subscriber = new Subscriber(req.body)
  
    await subscriber.save()
  
    console.log(subscriber)
    res.redirect('/success.html')

  } catch(err) {
    console.log(err)
    res.redirect('/fail.html')    
  }
})

router.get('/subscriber-list' , async (req, res) => {  
  try{
    const subscribers = await Subscriber.find()  
    res.send(subscribers)
  } catch (error) {
    res.send({error: 'Subscribers Not Found'})
  }
})

module.exports = router
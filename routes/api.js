// Coded by Christopher Barber, Jesse Thadi, Icah Vega, Alex Uk with attributions to SAIT Webdev including Tony Grimes and Ashlyn Knox code and classes
const express = require('express')
const app = express()
const router = express.Router();
const subscribers = require('../models/subscriber')
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
    res.send(teamList)
  } catch (error) {
    res.send({error: 'Members Not Found'})
  }
})

  router.get('/team/:name', async (req, res) => { 
    try{
      const members = await teamList.findOne({ id: req.params.id })
      if(!teamList) {
        throw new Error()
      }
      res.send(teamList)
    } catch (error) {
      res.status(404)    
      res.send({error: 'Member Not Found'})
    } 
  })

//subscribers
router.post('/api/subscribers', async (req, res) => {

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

module.exports = router
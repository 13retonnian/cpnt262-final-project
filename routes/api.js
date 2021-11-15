// Coded by Christopher Barber, Jesse Thadi, Icah Vega, Alex Uk with attributions to SAIT Webdev including Tony Grimes and Ashlyn Knox code and classes

//
// Import modules
//
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()


//
// Load models
//
const Item = require('../models/item')
const Member = require('../models/member')
const Subscriber = require('../models/subscriber')


/****************/
// Define routes
/****************/

//
// [API Path: /api/items] Retrieve all items from the database
//
router.get('/items', async (req, res) => {  

  console.log('[Called]  /api/items - start');
  try{

    const item = await Item.find()  
    if(!item) {
      throw new Error()
    }

    res.send(item)

  } catch (error) {
    console.log(error)
    res.send({error: 'No Data Found'})
  }
  console.log('[Called]  /api/items - end');
})

//
// [API Path: /api/items/:id] Retrieve a specific item by id from the database
//
router.get('/items/:id', async (req, res) => { 

  console.log(`[Called]  /api/items/${req.params.id} - start`);
  try{

    const item = await Item.findOne({ id: req.params.id })
    if(!item) {
      throw new Error()
    }
    
    res.send(item)

  } catch (error) {
    console.log(error)
    res.send({error: 'No Data Found'})
  } 
  console.log(`[Called]  /api/items/${req.params.id} - end`);
})


//
// [API Path: /api/members] Retrieve all team members from the database
//
router.get('/members', async (req, res) => {

  console.log('[Called]  /api/members - start');
  try {
    
    const members = await Member.find()
    if(!members){
      throw new Error();
    }

    res.send(members)

  } catch (error) {
    console.log(error)
    res.send({error: 'No Data Found'})
  }
  console.log('[Called]  /api/members - end');
})


//
// [API Path: /api/subscribe] Add a subscriber to the database
//
router.post('/subscribe/:name/:email', async (req, res) => {  
  
  console.log('[Posted]  /api/subscribe - start');
  try {

    console.log(req.params.email);

    // Check for duplication
    let subscriber = await Subscriber.findOne({email: req.params.email})

    // If the subscriber exists
    if(subscriber){

      res.send({status: 'FAIL', error: 'DUPLICATE_EMAIL'})
    }
    // If not exist
    else{

      subscriber = new Subscriber(req.params)
      await subscriber.save()
  
      // Send the request to the success page
      //res.redirect('/success.html')
      res.send({status: 'SUCCESS'})
    }
    
  } catch(error) {
    console.log(error)

    // Send the request to the failure page
    res.redirect('/fail.html')    
  }
  console.log('[Posted]  /api/subscribe - end');
})

//
// [API Path: /api/subscribers] Retrieve all team members from the database
//
router.get('/subscribers' , async (req, res) => {  

  console.log('[Called]  /api/subscribers - start');
  
  try{
    const subscribers = await Subscriber.find()
    if(!subscribers){
      throw new Error();
    }

    res.send(subscribers)
  
  } catch (error) {
    console.log(error)
    res.send({error: 'No Data Found'})
  }
  console.log('[Called]  /api/subscribers - end');
})


module.exports = router
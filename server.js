// Coded by Christopher Barber, Jesse Thadi, Icah Vega, Alex Uk with attributions to SAIT Webdev including Tony Grimes and Ashlyn Knox code and classes
// Install modules
const express = require('express')
const app = express()
//const dogImages = require('./data/dog-images')
//const dogImages = require('./models/dog-images')
//const groupMembers = require('./models/members')
//const subscribers = require('./models/subscribers')
const dotenv = require('dotenv').config()


//initialize API public folder
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

/****************/
//Handle Routes
/****************/

const api = require('./routes/api.js')
app.use('/api', api)

/****************/
// Handle 404
/****************/
app.use(function(req, res) {

  // If path starts with `/api`, send JSON 404
  if (req.url.startsWith('/api')) {
    res.status(404)
    res.send({error: 'File Not Found'})
  } else {  
    // else send HTML 404
    res.status(404)
    res.redirect("./404.html")    
    res.send('<h1>404: File Not Found</h1>')
  }
});

/****************/
// Start server
/****************/
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});


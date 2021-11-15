// Coded by Christopher Barber, Jesse Thadi, Icah Vega, Alex Uk with attributions to SAIT Webdev including Tony Grimes and Ashlyn Knox code and classes

//
// Import modules
//
const config = require('dotenv').config()
const connectDB = require('./db/connectDB')
const express = require('express')
const app = express()

//
// Set the root directory for static contents
//
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
app.use((req, res) => {

  // Set 404 error code to the response
  res.status(404)

  if (req.url.startsWith('/api')) {

    // Send the JSON error response
    res.send({Error: 'ERROR: 404 Not Found'})
  } else {

    // Redirect to the 404 error page
    res.redirect('404.html');
  }
});


/****************/
// Start server
/****************/
try {
  
  // Make Connection to MongoDB 
  connectDB().then(() => {

    console.log(`Starting the server...`);

    // Run Application Server
    const port = process.env.PORT || 3000;
    
    app.listen(port, function(){
      console.log(`Listening on port ${port}`);
    });
  });

}catch(error){
  Console.log(error.stack);
}
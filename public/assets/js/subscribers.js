'use strict';
const v = "Hi! I'm a strict mode script!";
let output ='';


fetch('https://fantastic-four-dogs.herokuapp.com/api/subscribers')
  .then(function(response){
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
      return response.json()
  }) 
  .then(function(data){    
    
    for(let i = 0; i < data.length; i++) {
    output += `
      <h3>Member # ${i}:</h3>
        <p>Name: ${data[i].name}</p>
        <p>E-mail: ${data[i].email}</p>`
    }  
    document.querySelector('section').innerHTML = output;
  })
  .catch(function(err){
    //console.log(err);
  })
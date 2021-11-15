'use strict';
const v = "Hi! I'm a strict mode script!";

let output ='';

fetch('/api/dog-images')
  .then(function(response){
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
      return response.json()
    }) 
    .then(function(data){
        console.log(data)
    
    for(let i = 0; i < Number(data.length); i++){
      output += `
      <a href="${data[i].idURL}" target="_blank"><figure>
        <img src="assets/images/${data[i].imageID}" alt="${data[i].description}">
        <figcaption>${data[i].name}</figcaption>
      </figure></a>`
    }
      document.querySelector('section').innerHTML = output;
    })
      .catch(function(err){
        //console.log(err);
    })
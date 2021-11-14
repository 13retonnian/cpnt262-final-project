'use strict';
const v = "Hi! I'm a strict mode script!";
let output ='';

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get('id') !== null) {

  const id = urlParams.get('id')
  
  fetch(`https://fantastic-four-dogs.herokuapp.com/api/dog-images?id=${id}`)
    .then(function(response){
      if (!response.ok) {
        throw new Error('Not 200 OK');
      }
        return response.json()
    }) 
    .then(function(data){
      console.log(data)
      output = `
        <a href="${data.imgURL}" target="_blank"><figure>
          <img src="assets/images/${data.imageID}" alt="${data.description}">
          <figcaption>${data.name}</figcaption>
        </figure>
        </a>`
      
      document.querySelector('section').innerHTML = output;
    })
    .catch(function(err){
      //console.log(err);
    })
  }
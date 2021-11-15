'use strict';
const v = "Hi! I'm a strict mode script!";
let output ='';

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get('id') !== null) {

  const id = urlParams.get('id')

  fetch(`/api/items/${id}`)
    .then(function(response){
      if (!response.ok) {
        throw new Error('Not 200 OK');
      }
        return response.json()
    }) 
    .then(function(data){
      console.log(data)
      output = `
        <a href="${data.imgURL}" target="_blank">
        <figure>
          <img src="assets/images/${data.imageID}" alt="${data.description}">
          <figcaption>${data.name}</figcaption>
        </figure>
          <p>" ${data.description} "</p>
          <ul>
            <li><strong>Min Price:</strong> $${data.minPrice}</li>
            <li><strong>Max Price:</strong> $${data.maxPrice}</li>
          </ul>
        </a>`
      
      document.querySelector('section').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    })
  }
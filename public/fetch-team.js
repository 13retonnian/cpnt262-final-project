'use strict';
const v = "Hi! I'm a strict mode script!";

let output ='';

fetch('https://fantastic-four-dogs.herokuapp.com/api/team')
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
      <div class="card">
        <figure>
          <img src="assets/images/team-pics/${data[i].profilePic}">
          <figcaption>${data[i].fullName}</figcaption>
        </figure>
      <ul>
        <li>${data[i].bio}</li>
        <li><a href="${data[i].github}" target="_blank">Follow Me on Github!</a></li>
      </ul></div>`
    }
    console.log(output)
      document.querySelector('section').innerHTML = output;
    })
      .catch(function(err){
        //console.log(err);
    })
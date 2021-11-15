'use strict';

async function initHomePage(){
  console.log("Called initHomePage()...");
}

async function initGalleryPage(){
  console.log("Called initGalleryPage()...");
}

async function initItemPage(){
  console.log("Called initItemPage()...");
}

async function initSubscribePage(){
  console.log("Called initSubscribePage()...");

  const postHandler = async function(event){
    
    event.preventDefault();
    
    const userName = document.querySelector('#userName').value;
    const userEmail = document.querySelector('#userEmail').value;

    //${userName}/${userEmail}
    await fetch(`/api/subscribe/${userName}/${userEmail}`, {method: 'POST'})
    .then(function(response) {
    
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      return response.json()
    }) 
    .then(function(data){
      
      if(data.status === 'SUCCESS'){
        document.location.href = 'success.html';
      }else{
        alert("Your email address already exists in the record of our subscribers");
      }
    })
    .catch(function(err){
      console.log(err);
    })
  }

  const subscribeForm = document.querySelector('#subscribeForm');
  subscribeForm.addEventListener('submit', postHandler);
 
}

async function initTeamPage(){
  console.log("Called initTeamPage()...");
}

async function initAdminPage(){
  console.log("Called initAdminPage()...");

  // Retrieve the subscriber data from the server
  await fetch(`/api/subscribers`).then(function(response){
    
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json()
  }) 
  .then(function(data){
    
    let output ='';
    for(let i = 0; i < data.length; i++) {
      output += `<h3>Member # ${i}:</h3>
                  <p>Name: ${data[i].name}</p>
                  <p>E-mail: ${data[i].email}</p>`
    }

    document.querySelector('section').innerHTML = output;
  })
  .catch(function(err){
    console.log(err);
  })
}


// To prepare web pages
(() => {

  const url = document.URL;
  
  if(url.indexOf('admin/index.html') != -1)
    initAdminPage();
  else if(url.indexOf('index.html') != -1)
    initHomePage();
  else if(url.indexOf('subscribe.html') != -1)
    initSubscribePage();
  else if(url.indexOf('gallery.html') != -1)
    initGalleryPage();
  else if(url.indexOf('item.html') != -1)
    initItemPage();
  else if(url.indexOf('team.html') != -1)
    initTeamPage();

})();


 
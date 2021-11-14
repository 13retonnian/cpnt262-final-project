let output ='';


fetch(`https://fantastic-four-dogs.herokuapp.com/api/subscriber-list`)
  .then(function(response){
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
      return response.json()
  }) 
  .then(function(data){
    console.log(data)
    console.log(data.length)
    
    for(let i = 0; i < data.length; i++) {
    output = `
      <p>${data[i].name}</p>
      <p>${data[i].email}</p>`
    }  
    document.querySelector('section').innerHTML = output;
  })
  .catch(function(err){
    //console.log(err);
  })
  
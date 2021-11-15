// Coded by Christopher Barber, Jesse Thadi, Icah Vega, Alex Uk with attributions to SAIT Webdev including Tony Grimes and Ashlyn Knox code and classes
/*******************************************/
// Welcome to the Random Dog Toy Recommender.
/*******************************************/
// This application takes 3 choices from 4 sections from the user.
// These include size, age, dog chewing habits and price.
// Each of these sections has 3 choices.
// For size there is small, medium, large.
// For age the user picks an age and it divides into young, middle and old age.
// For dog chewing habits there is rare, regular and avid chewer.
// For price there is cheap, medium and expensive
// The user's choices will decide which dog toys will go into a choice list.
// The application will then make a random recommendation from the choice list.
// Duplicates are allowed so if one toy meets all of the choices then there is a high chance of it being recommended.
// See dog-toy-list.js for the complete list of dog toys.

//initialize variables
let choiceList = []
let resultSection = document.querySelector(".result-section")
let size = "medium"
let age = "middle"
let chewiness = "regular"
let price = "medium"

const form = document.querySelector('form');

const setCustomerChoices = function() {
  size = form.dogSize.value
  age = form.dogAge.value
  if(age < 3) {
    age = "young"
  }
  else if(age < 8) {
    age = "middle"
  }
  else {
    age = "old"
  }
  chewiness= form.dogChewer.value
  price = form.priceRange.value
}
//find functions
const sizeFindFunction = function(item) {
  return item.size === size
}
const ageFindFunction = function(item) {
  return item.age === age
}
const chewinessFindFunction = function(item) {
  return item.chewiness === chewiness
}
const priceFindFunction = function(item) {
  return item.price === price
}

const addToysToChoiceList = function() {  
  choiceList.push(dogToys.find(sizeFindFunction))
  choiceList.push(dogToys.find(ageFindFunction))
  choiceList.push(dogToys.find(chewinessFindFunction))
  choiceList.push(dogToys.find(priceFindFunction))
  // each of these puts more toys into the choice list based on what matches. Duplicates are allowed.
  // dogToys. filter gets an array of dog toy matches then the for loop puts them into the choice list with push.
  const specificSizeToys = dogToys.filter(sizeFindFunction)
  for(let i = 0; i < specificSizeToys.length; i++) {
    choiceList.push(specificSizeToys[i])
  }
  const specificAgeToys = dogToys.filter(ageFindFunction)
  for(let i = 0; i < specificAgeToys.length; i++) {
    choiceList.push(specificAgeToys[i])
  }
  const specificChewinessToys = dogToys.filter(chewinessFindFunction)
  for(let i = 0; i < specificChewinessToys.length; i++) {
    choiceList.push(specificChewinessToys[i])
  }
  const specificPriceToys = dogToys.filter(priceFindFunction)
  for(let i = 0; i < specificPriceToys.length; i++) {
    choiceList.push(specificPriceToys[i])
  }  
}
const handleSubmit = function(event) {
  event.preventDefault() 
  choiceList = []
  //get the form inputs loaded into variables
  setCustomerChoices() 
  //find the toys that match each choice and add them to choice list 
  addToysToChoiceList()
  //randomize which toy is selected from the choice list and output to page  
  const randomNumber = Math.floor((Math.random() * choiceList.length)) 
  resultSection.innerHTML = `${choiceList[randomNumber].name}`
}

form.addEventListener("submit", handleSubmit);



// Coded by Christopher Barber, Jesse Thadi, Icah Vega, Alex Uk with attributions to SAIT Webdev including Tony Grimes and Ashlyn Knox code and classes

//initialize variables

//const dogToys = require("./dog-toy-list")
//const express = require(express)

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
  if(age < 4) {
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
  //get the form inputs
  setCustomerChoices() 
  //find the toys that match and add them to choice list 
  addToysToChoiceList()
  //randomize which toy is selected from the choice list and output to page
  console.log(choiceList)
  const randomNumber = Math.floor((Math.random() * choiceList.length)) 
  resultSection.innerHTML = `${choiceList[randomNumber].name}`
}

form.addEventListener("submit", handleSubmit);



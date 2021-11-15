// Coded by Christopher Barber, Jesse Thadi, Icah Vega, Alex Uk with attributions to SAIT Webdev including Tony Grimes and Ashlyn Knox code and classes
const dogToys = [
  {
    name: "stuffed animal",
    price: "medium",
    size: "medium",
    chewiness: "rare",
    age: "young"
  },
  {
    name: "hard rubber chewer",
    price: "cheap",
    size: "large",
    chewiness: "avid",
    age: "young" 
  },
  { 
    name:"rubber chicken",
    price:"cheap",
    size:"small",
    chewiness: "avid",
    age: "young"
  },
  "squeaky toy",
  "tennis ball",
  "rubber ball",
  "rope toy",
  "big ball toy",
  "treat dispensing toy",
  "pig ear",
  "dog bone",
  "plastic bone",
  "tennis ball rope toy",
  "tennis ball launcher",
  "tooth cleaning toy",
  "tooth brush toy",
  "bullystick",
  "benebone",
  "plastic toy",
  {
    name: "blanket",
    price: "medium",
    size: "medium",
    chewiness: "rare",
    age: "old",
  },

  {
    name: "dog chew socks",
    price: "cheap",
    size: "small",
    chewiness: "regular",
    age: "medium",
  },

  {
    name: "sock with tennis ball inside",
    price: "cheap",
    size: "small",
    chewiness: "avid",
    age: "young",
  },

  {
    name: "squeaky rubber toy",
    price: "cheap",
    size: "small",
    chewiness: "regular",
    age: "medium",
  },

  {
    name: "stuffed animal with squeaky ball inside",
    price: "medium",
    size: "medium",
    chewiness: "avid",
    age: "young",
  },

  {
    name: "bouncy ball",
    price: "cheap",
    size: "medium",
    chewiness: "regular",
    age: "medium",
  },

  {
    name: "frisbee",
    price: "cheap",
    size: "medium",
    chewiness: "regular",
    age: "medium",
  },

  {
    name: "ball throwing stick",
    price: "cheap",
    size: "medium",
    chewiness: "regular",
    age: "medium",
  },

  {
    name: "toy mouse",
    price: "medium",
    size: "small",
    chewiness: "regular",
    age: "medium",
  },

  {
    name: "toy car",
    price: "medium",
    size: "medium",
    chewiness: "rare",
    age: "old",
  },

  {
    name: "doll toy",
    price: "medium",
    size: "medium",
    chewiness: "regular",
    age: "old",
  },

  {
    name: "dog house",
    price: "expensive",
    size: "large",
    chewiness: "rare",
    age: "old",
  },

  {
    name: "dog waterfall",
    price: "expensive",
    size: "large",
    chewiness: "rare",
    age: "old",
  },
  
  {
    name: "dog fish pond",
    price: "expensive",
    size: "large",
    chewiness: "rare",
    age: "old",
  },

  {
    name: "dog skateboard",
    price: "expensive",
    size: "large",
    chewiness: "rare",
    age: "old",
  }]
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
  choiceList.push(dogToys.find(sizeFindFunction))
  choiceList.push(dogToys.find(ageFindFunction))
  choiceList.push(dogToys.find(chewinessFindFunction))
  choiceList.push(dogToys.find(priceFindFunction)) 
}
const handleSubmit = function(event) {
  event.preventDefault() 
  //get the form inputs
  setCustomerChoices() 
  //find the toys that match and add them to choice list 
  addToysToChoiceList()
  //randomize which toy is selected from the choice list and output to page
  const randomNumber = Math.floor((Math.random() * choiceList.length)) 
  resultSection.innerHTML = `${choiceList[randomNumber].name}`
}

form.addEventListener("submit", handleSubmit);



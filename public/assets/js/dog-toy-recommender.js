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
  
  {
    name: "squeaky toy",
    price: "cheap",
    size: "medium",
    chewiness: "avid",
    age: "young"
  },
  {
    name: "tennis ball",
    price: "cheap",
    size: "small",
    chewiness: "regular",
    age: "middle"
  },
  {
    name: "rubber ball",
    price: "medium",
    size: "small",
    chewiness: "regular",
    age: "middle"
  },
  {
    name: "rope toy",
    price: "medium",
    size: "large",
    chewiness: "avid",
    age: "old"
  },
  {
    name: "big ball toy",
    price: "medium",
    size: "large",
    chewiness: "avid",
    age: "old"
  },
  {
    name: "treat dispensing toy",
    price: "expensive",
    size: "large",
    chewiness: "rare",
    age: "old"
  },
  {
    name: "pig ear",
    price: "cheap",
    size: "medium",
    chewiness: "avid",
    age: "middle"
  },
  {
    name: "dog bone",
    price: "medium",
    size: "medium",
    chewiness: "regular",
    age: "middle"
  },
  {
    name: "plastic bone",
    price: "cheap",
    size: "medium",
    chewiness: "avid",
    age: "middle"
  },
  {
    name: "tennis ball rope toy",
    price: "middle",
    size: "large",
    chewiness: "avid",
    age: "middle"
  },
  {
    name: "tennis ball launcher",
    price: "expensive",
    size: "large",
    chewiness: "avid",
    age: "middle"
  },
  {
    name: "tooth cleaning toy",
    price: "expensive",
    size: "medium",
    chewiness: "avid",
    age: "old"
  },
  {
    name: "tooth brush toy",
    price: "expensive",
    size: "medium",
    chewiness: "avid",
    age: "old"
  },
  {
    name: "bullystick",
    price: "expensive",
    size: "large",
    chewiness: "avid",
    age: "old"
  },
  { 
    name: "benebone",
    price: "expensive",
    size: "large",
    chewiness: "avid",
    age: "old"
  },
  {
    name: "plastic toy",
    price: "cheap",
    size: "medium",
    chewiness: "avid",
    age: "middle"
  },
  "blanket",
  "dog chew socks",
  "sock with tennis ball inside",
  "squeaky rubber toy",
  "stuffed animal with squeaky ball inside",
  "bouncy ball",
  "frisbee",
  "ball throwing stick",
  "toy mouse",
  "toy car",
  "doll toy",
  "dog house",
  "dog waterfall",
  "dog fish pond",
  "dog skateboard"]
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



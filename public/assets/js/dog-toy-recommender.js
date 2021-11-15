
const dogToys = [
  {
    name: "stuffed animal",
    price: "medium",
    size: "regular",
    chewiness: "delicate",
    age: "young"
  },
  {
    name: "hard rubber chewer",
    price: "medium",
    size: "large",
    chewiness: "sturdy",
    age: "young" 
  },
  "rubber chicken",
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

let choiceList = ``
let price = "medium"
let size = "regular"
let chewiness = "medium"
let age = "middle"
const submitButton = document.querySelector(".submit-button")
const resultSection = document.querySelector(".result-section")
const form = document.querySelector('form');

const setCustomerChoices = function(){
  size = form.dogSize.value
  age = form.dogAge.value
  chewiness= form.dogChewer.value
  price = form.priceRange.value
}

const handleSubmit = function(event) {
  event.preventDefault() 

  setCustomerChoices()  
  const randomNumber = Math.floor((Math.random() * dogToys.length))  
  resultSection.innerHTML = `${dogToys[randomNumber]}`
}

form.addEventListener("submit", handleSubmit);



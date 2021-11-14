'use strict';

const dogToys = ["stuffed animal",
  "hard rubber chewer",
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
  "dog fish pond"]

const submitButton = document.querySelector(".submit-button")
const resultSection = document.querySelector(".result-section")

const submitButtonClick = function() {
  const randomNumber = Math.floor((Math.random() * dogToys.length) + 1)
  console.log(randomNumber)
  resultSection.innerHTML = `${dogToys[randomNumber]}`
}

submitButton.addEventListener("click", submitButtonClick);

console.log(dogToys.length)

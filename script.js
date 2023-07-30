"use strict";

//creating DOM elements
const msgUser = document.createElement("p");
// connecting exisint DOM element
const pixelPackage = document.getElementById("grid-container");
const inputPackage = document.getElementById("input-container");
const msgPackage = document.getElementById("msg-container");
const refreshBtn = document.getElementById("refresh-btn");
const submitBtn = document.getElementById("submit-btn");
const numInput = document.getElementById("num-input").value;

// button eventlisteners to call functions in sequence
refreshBtn.addEventListener("click", function () {});
submitBtn.addEventListener("click", function () {});

function clearPackage(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//builds pixel panel based on numberInput
function formPackage() {
  for (let x = 1; x < numInput; x++) {
    for (let y = 1; y < numInput; y++) {
      const divPixel = document.createElement("div");
      pixelPackage.style.gridTemplateColumns = `repeat(${numInput}, auto)`;
      pixelPackage.style.gridTemplateRows = `repeat(${numInput}, auto)`;
      pixelPackage.appendChild(divPixel);
    }
  }
  console.log("formPackage working");
}

//
function checkInput() {
  if (numInput > 0 && numInput < 50) {
    msgUser.innerText = `${numInput} is a invalid entry. Try again`;
    msgPackage.appendChild(msgUser);
  }
}

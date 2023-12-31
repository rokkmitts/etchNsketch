"use strict";

let realNum;
//message DOM elements
const msgUser = document.createElement("p");
// connecting existing elements
// const divPixel = document.createElement("div");
const pixelPackage = document.getElementById("grid-container");
const inputPackage = document.getElementById("input-container");
const msgPackage = document.getElementById("msg-container");
const refreshBtn = document.getElementById("refresh-btn");
const submitBtn = document.getElementById("submit-btn");
//
//builds pixel panel based on numberInput and gives mouse movement properties
function formPackage() {
  const numInput = document.getElementById("num-input").value;
  if (numInput > 0 && numInput < 40) {
    for (let x = 0; x < numInput; x++) {
      for (let y = 0; y < numInput; y++) {
        const divPixel = document.createElement("div");
        divPixel.classList.add("divPixel");
        pixelPackage.style.gridTemplateColumns = `repeat(${numInput}, auto)`;
        pixelPackage.style.gridTemplateRows = `repeat(${numInput}, auto)`;
        pixelPackage.appendChild(divPixel);

        divPixel.addEventListener("mouseenter", function () {
          divPixel.style = "background-color: rgb(0,0,0)";
        });

        divPixel.addEventListener("mouseleave", function () {
          divPixel.style = "background-color: rgb(0,0,0)";
        });
      }
    }
  } else {
    msgUser.textContent = `${numInput} is not valid try again`;
    msgPackage.append(msgUser);
  }
}
//
//
//removes all content in parent containers
function clearPackage(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  console.log("contents removed");
}

// buttons
refreshBtn.addEventListener("click", function () {
  clearPackage(pixelPackage);
  clearPackage(msgPackage);
});
submitBtn.addEventListener("click", function () {
  clearPackage(pixelPackage);
  clearPackage(msgPackage);
  formPackage();
});

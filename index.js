"use strict";
// const decBtn = document.querySelector(".decrement");
// const incBtn = document.querySelector(".increment");
// const num1 = +prompt("ko`payuvchini kiriting");
// const display = document.querySelector(".value");
// incBtn.addEventListener("click", (e) => {
//   display.textContent = +display.textContent * num1;
// });
// decBtn.addEventListener("click", (e) => {
//   display.textContent = +display.textContent / 2;
// });
const buttons = document.querySelectorAll(".button");

const inputDisplay = document.querySelector(".display");

let str = "";

buttons?.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.textContent === "=") {
      str = eval(str);
      inputDisplay.value = str;
    } else if (e.target.textContent === "C") {
      str = "";
      inputDisplay.value = str;
    } else if (e.target.textContent === "DE") {
      str = str.slice(0, str.length - 1);
      inputDisplay.value = str;
    } else {
      str += e.target.textContent;
      inputDisplay.value = str;
    }
  });
});

console.log(eval);

"use strict";

var carts = document.querySelectorAll("add-cart");

for (i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", function () {
    console.log("added to cart");
    cartNumbers();
  });
}

function cartNumbers() {
  var productNumbers = localStorage.getItem("cartNumbers");
  console.log(productNumbers);
  localStorage.setItem("cartNumbers", 1);
}
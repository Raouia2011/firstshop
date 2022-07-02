"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var carts = document.querySelectorAll(".add-cart");
var cart = document.getElementById("cart");
var products = [{
  marke: "Apple",
  Betriebssystem: "iOS",
  DisplayGröße: "4,7 Zoll Display",
  farbe: "Rot",
  price: 888.00,
  inCart: 0
}, {
  marke: "Apple",
  Betriebssystem: "iOS",
  DisplayGröße: "4,8 Zoll Display",
  farbe: "Blau",
  price: 610.00,
  inCart: 0
}, {
  marke: "Apple",
  Betriebssystem: "iOS",
  DisplayGröße: "4,9 Zoll Display",
  farbe: "Grey",
  price: 711.00,
  inCart: 0
}, {
  marke: "Apple",
  Betriebssystem: "iOS",
  DisplayGröße: "4,6 Zoll Display",
  farbe: "Gold",
  price: 550.00,
  inCart: 0
}, {
  marke: "Apple",
  Betriebssystem: "iOS",
  DisplayGröße: "4,7 Zoll Display",
  farbe: "white",
  price: 760.00,
  inCart: 0
}];

var _loop = function _loop(i) {
  carts[i].addEventListener("click", function () {
    console.log("added to cart");
    cartNumbers();
    console.log(i);
    totalCost(products[i]);
  });
};

for (var i = 0; i < carts.length; i++) {
  _loop(i);
}

function onloadCartNumbers() {
  var productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers() {
  var productNumbers = localStorage.getItem("cartNumbers");
  console.log(productNumbers);
  console.log(_typeof(productNumbers));
  productNumbers = parseInt(productNumbers);
  console.log(_typeof(productNumbers));

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = 1 + productNumbers;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
}

function totalCost(product) {
  console.log("product");
  localStorage.setItem("totalCost", product.price);
  var cartCost = parseInt(localStorage.getItem("totalCost"));

  if (cartCost != null) {
    cartCost = parseInt("cartCost");
    localStorage.setItem("totalCost", cartCost + product.price);
    console.log(totalCost);
  } else {
    localStorage.setItem("totalCost", product.price);
    console.log("my cart cost ist,".concat(cartCost));
  }

  console.log(_typeof(cartCost));
  console.log(product.price);
}

onloadCartNumbers();
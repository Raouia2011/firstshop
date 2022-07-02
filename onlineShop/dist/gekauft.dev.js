"use strict";

var quantityInputs = document.getElementsByClassName('cart-quantity-input');
var addToCartButtons = document.getElementsByClassName('shop-item-button'); //

quantityInputs = document.getElementsByClassName('cart-quantity-input');

for (var i = 0; i < quantityInputs.length; i++) {
  var input = quantityInputs[i];
  input.addEventListener('change', quantityChanged);
}

addToCartButtons = document.getElementsByClassName('shop-item-button');

for (var _i = 0; _i < addToCartButtons.length; _i++) {
  var button = addToCartButtons[_i];
  button.addEventListener('click', addToCartClicked);
}

document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);

function purchaseClicked() {
  alert('Thank you for your purchase');
  var cartItems = document.getElementsByClassName('cart-items')[0];

  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }

  updateCartTotal();
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;

  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }

  updateCartTotal();
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
  var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement('div');
  cartRow.classList.add('cart-row');
  var cartItems = document.getElementsByClassName('cart-items')[0];
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title');

  for (var _i2 = 0; _i2 < cartItemNames.length; _i2++) {
    if (cartItemNames[_i2].innerText == title) {
      alert('This item is already added to the cart');
      return;
    }
  }

  var cartRowContents = "\n        <div class=\"cart-item cart-column\">\n            <img class=\"cart-item-image\" src=\"./imgages/3.png\" width=\"30px\" height=\"30px\">\n            <span class=\"cart-item-title\">Cart</span>\n        </div>\n        <span class=\"cart-price cart-column\">".concat(price, "</span>\n        <div class=\"cart-quantity cart-column\">\n            <input class=\"cart-quantity-input\" type=\"number\" value=\"1\">\n            <button class=\"btn btn-danger\" type=\"button\">REMOVE</button>\n        </div>");
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}

function updateCartTotal() {
  alert(hallo);
  var cartItemContainer = document.getElementsByClassName('cart-items')[0];
  var cartRows = cartItemContainer.getElementsByClassName('cart-row');
  var total = 0;

  for (var _i3 = 0; _i3 < cartRows.length; _i3++) {
    var cartRow = cartRows[_i3];
    var priceElement = cartRow.getElementsByClassName('cart-price')[0];
    var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
    var price = parseFloat(priceElement.innerText.replace('$', ''));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }

  total = Math.round(total * 100) / 100;
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}
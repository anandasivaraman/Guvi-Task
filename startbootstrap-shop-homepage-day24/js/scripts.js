/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.addEventListener("DOMContentLoaded", function () {
    function addToCart() {
        const cartButton = document.querySelector(".btn-outline-dark");
        const cartCount = parseInt(cartButton.querySelector(".badge").innerText);
        cartButton.querySelector(".badge").innerText = cartCount + 1;

        const addButton = this;
        addButton.innerText = "Added to Cart";
        addButton.disabled = true;

        addButton.addEventListener("click", removeFromCart);
    }


    function removeFromCart() {
        const cartButton = document.querySelector(".btn-outline-dark");
        const cartCount = parseInt(cartButton.querySelector(".badge").innerText);
        cartButton.querySelector(".badge").innerText = cartCount - 1;

        const addButton = this;
        addButton.innerText = "Add to Cart";
        addButton.disabled = false;

        addButton.removeEventListener("click", removeFromCart);
    }

    const addToCartButtons = document.querySelectorAll(".btn-outline-dark");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", addToCart);
    });
});

"use strict";

const basket = document.querySelector(".cart__products");
const products = document.querySelector(".products");

products.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.classList.contains("product__quantity-control")) {
    let quantity = event.target
      .closest(".product__quantity-controls")
      .querySelector(".product__quantity-value");
    if (event.target.classList.contains("product__quantity-control_inc")) {
      quantity.textContent++;
    } else if (
      event.target.classList.contains("product__quantity-control_dec")
    ) {
      quantity.textContent--;
      if (quantity.textContent < 1) {
        quantity.textContent = 1;
      }
    }
  }

  if (event.target.classList.contains("product__add")) {
    let id = event.target.closest(".product").dataset.id;
    let product = event.target
      .closest(".product")
      .querySelector(".product__quantity-value").textContent;
    let image = event.target
      .closest(".product")
      .querySelector(".product__image")
      .getAttribute("src");

    if (
      basket.children.length !== 0 &&
      basket.querySelector(`[data-id="${id}"]`)
    ) {
      basket
        .querySelector(`[data-id="${id}"]`)
        .querySelector(".cart__product-count").textContent =
        Number(
          basket
            .querySelector(`[data-id="${id}"]`)
            .querySelector(".cart__product-count").textContent
        ) + Number(product);
    } else {
      basket.innerHTML += `<div class="cart__product" data-id="${id}">
       <img class="cart__product-image" src="${image}">
       <div class="cart__product-count">${product}</div>
       </div>`;
    }
  }
});
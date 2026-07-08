const increaseQty = document.querySelectorAll(".add-item");
const decreaseQty = document.querySelectorAll(".remove-item");
const displayQty = document.querySelectorAll(".item-qty");
const menuCard = document.querySelectorAll(".menu-card");
const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const orderMenu = [];

  menuCard.forEach((card) => {
    let name = card.dataset.name;
    let price = card.dataset.price;
    let qty = card.querySelector(".item-qty").innerText;
    if (parseInt(qty) > 0) {
      orderMenu.push({ name, price, qty });
    }
  });
  console.log(orderMenu);
});

increaseQty.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    displayQty[index].innerText = parseInt(displayQty[index].innerText) + 1;
  });
});

decreaseQty.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    if (parseInt(displayQty[index].innerText) !== 0) {
      displayQty[index].innerText = parseInt(displayQty[index].innerText) - 1;
    }
  });
});

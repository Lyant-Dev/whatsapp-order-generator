const increaseQty = document.querySelectorAll(".add-item");
const decreaseQty = document.querySelectorAll(".remove-item");
const itemQty = document.querySelectorAll(".item-qty");
const menuCard = document.querySelectorAll(".menu-card");
const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const number = document.querySelector("#number").value;
  const address = document.querySelector("#address").value;
  const date = document.querySelector("#date").value;
  const note = document.querySelector("#note").value;
  const orderMenu = [];

  menuCard.forEach((card) => {
    let menuName = card.dataset.name;
    let menuPrice = card.dataset.price;
    let menuQty = card.querySelector(".item-qty").innerText;
    if (parseInt(qty) > 0) {
      orderMenu.push({ menuName, menuPrice, menuQty });
    }
  });
});

increaseQty.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    itemQty[index].innerText = parseInt(itemQty[index].innerText) + 1;
  });
});

decreaseQty.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    if (parseInt(itemQty[index].innerText) !== 0) {
      itemQty[index].innerText = parseInt(itemQty[index].innerText) - 1;
    }
  });
});

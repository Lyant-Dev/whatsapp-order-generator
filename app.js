const increaseQty = document.querySelectorAll(".add-item");
const decreaseQty = document.querySelectorAll(".remove-item");
const itemQty = document.querySelectorAll(".item-qty");
const menuCard = document.querySelectorAll(".menu-card");
const submitBtn = document.querySelector("#submit-btn");
const orderList = document.querySelector(".order-list");
const totalPrice = document.querySelector("#total-price");

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
    if (parseInt(menuQty) > 0) {
      orderMenu.push({ menuName, menuPrice, menuQty });
    }
  });
});

increaseQty.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    itemQty[index].innerText = parseInt(itemQty[index].innerText) + 1;
    renderSummary();
  });
});

decreaseQty.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    if (parseInt(itemQty[index].innerText) !== 0) {
      itemQty[index].innerText = parseInt(itemQty[index].innerText) - 1;
    }
    renderSummary();
  });
});

function renderSummary() {
  const summary = [];
  menuCard.forEach((card) => {
    let menuName = card.dataset.name;
    let menuPrice = parseInt(card.dataset.price);
    let menuQty = card.querySelector(".item-qty").innerText;
    if (parseInt(menuQty) > 0) {
      summary.push({ menuName, menuPrice, menuQty });
    }
  });
  let accPrice = summary.reduce((acc, current) => {
    return acc + current.menuPrice * parseInt(current.menuQty);
  }, 0);
  orderList.innerHTML = summary
    .map((item) => {
      return `<li>${item.menuName} x${item.menuQty} Rp${item.menuPrice.toLocaleString("id-ID")}</li> `;
    })
    .join("");
    totalPrice.innerHTML = `Total = Rp${accPrice.toLocaleString("id-ID")}`
}

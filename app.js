const increaseQty = document.querySelectorAll(".add-item");
const decreaseQty = document.querySelectorAll(".remove-item");
const displayQty = document.querySelectorAll(".item-qty");

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

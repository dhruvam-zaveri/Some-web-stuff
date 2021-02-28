cards = document.querySelectorAll(".panel");
window.setInterval(() => {
  changeActive(cards);
}, 2000);

function changeActive(cards) {
  for (i = 0; i < cards.length; i++) {
    if (cards[i].classList.contains("active")) {
      cards[i].classList.remove("active");
      cards[(i + 1) % 5].classList.add("active");
      break;
    }
  }
}

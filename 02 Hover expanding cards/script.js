var cards = document.querySelectorAll(".panel");
for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseover", mouseOver);
  cards[i].addEventListener("mouseout", mouseOut);
}

function mouseOver() {
  cards[0].classList.remove("active");
  this.classList.add("active");
}
function mouseOut() {
  this.classList.remove("active");
  cards[0].classList.add("active");
}

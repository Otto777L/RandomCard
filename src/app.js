/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let buttonH = document.getElementById("height");
let buttonW = document.getElementById("width");
const cardContainer = document.querySelector(".card");
buttonH.addEventListener("change", function changeHeight(event) {
  cardContainer.style.height = event.target.value + "px";
});
buttonW.addEventListener("change", function changeWidth(event) {
  cardContainer.style.width = event.target.value + "px";
});

window.onload = function() {
  let iconRdm = Math.floor(Math.random() * 4) + 1;
  let txtRdm = Math.floor(Math.random() * 12);
  switch (iconRdm) {
    case 1:
      document.getElementById("up").innerHTML = "♦";
      document.getElementById("bot").innerHTML = "♦";
      cardContainer.style.color = "red";
      break;
    case 2:
      document.getElementById("up").innerHTML = "♥";
      document.getElementById("bot").innerHTML = "♥";
      cardContainer.style.color = "red";
      break;
    case 3:
      document.getElementById("up").innerHTML = "♠";
      document.getElementById("bot").innerHTML = "♠";
      cardContainer.style.color = "black";
      break;
    case 4:
      document.getElementById("up").innerHTML = "♣";
      document.getElementById("bot").innerHTML = "♣";
      cardContainer.style.color = "black";
      break;
    default:
      break;
  }
  if (0 < txtRdm && txtRdm < 9) {
    document.getElementById("number").innerHTML = txtRdm + 1;
  } else if (txtRdm == 0) {
    document.getElementById("number").innerHTML = "A";
  } else if (txtRdm == 9) {
    document.getElementById("number").innerHTML = "J";
  } else if (txtRdm == 10) {
    document.getElementById("number").innerHTML = "Q";
  } else if (txtRdm == 11) {
    document.getElementById("number").innerHTML = "K";
  }
};

window.newButton = function newCard() {
  let iconRdm = Math.floor(Math.random() * 4) + 1;
  let txtRdm = Math.floor(Math.random() * 12);
  switch (iconRdm) {
    case 1:
      document.getElementById("up").innerHTML = "♦";
      document.getElementById("bot").innerHTML = "♦";
      cardContainer.style.color = "red";
      break;
    case 2:
      document.getElementById("up").innerHTML = "♥";
      document.getElementById("bot").innerHTML = "♥";
      cardContainer.style.color = "red";
      break;
    case 3:
      document.getElementById("up").innerHTML = "♠";
      document.getElementById("bot").innerHTML = "♠";
      cardContainer.style.color = "black";
      break;
    case 4:
      document.getElementById("up").innerHTML = "♣";
      document.getElementById("bot").innerHTML = "♣";
      cardContainer.style.color = "black";
      break;
    default:
      break;
  }
  if (0 < txtRdm && txtRdm < 9) {
    document.getElementById("number").innerHTML = txtRdm + 1;
  } else if (txtRdm == 0) {
    document.getElementById("number").innerHTML = "A";
  } else if (txtRdm == 9) {
    document.getElementById("number").innerHTML = "J";
  } else if (txtRdm == 10) {
    document.getElementById("number").innerHTML = "Q";
  } else if (txtRdm == 11) {
    document.getElementById("number").innerHTML = "K";
  }
};

window.setInterval(function newCard() {
  let iconRdm = Math.floor(Math.random() * 4) + 1;
  let txtRdm = Math.floor(Math.random() * 12);
  switch (iconRdm) {
    case 1:
      document.getElementById("up").innerHTML = "♦";
      document.getElementById("bot").innerHTML = "♦";
      cardContainer.style.color = "red";
      break;
    case 2:
      document.getElementById("up").innerHTML = "♥";
      document.getElementById("bot").innerHTML = "♥";
      cardContainer.style.color = "red";
      break;
    case 3:
      document.getElementById("up").innerHTML = "♠";
      document.getElementById("bot").innerHTML = "♠";
      cardContainer.style.color = "black";
      break;
    case 4:
      document.getElementById("up").innerHTML = "♣";
      document.getElementById("bot").innerHTML = "♣";
      cardContainer.style.color = "black";
      break;
    default:
      break;
  }
  if (0 < txtRdm && txtRdm < 9) {
    document.getElementById("number").innerHTML = txtRdm + 1;
  } else if (txtRdm == 0) {
    document.getElementById("number").innerHTML = "A";
  } else if (txtRdm == 9) {
    document.getElementById("number").innerHTML = "J";
  } else if (txtRdm == 10) {
    document.getElementById("number").innerHTML = "Q";
  } else if (txtRdm == 11) {
    document.getElementById("number").innerHTML = "K";
  }
}, 10000);

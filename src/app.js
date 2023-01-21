/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let iconRdm = Math.floor(Math.random() * 4) + 1;
  let txtRdm = Math.floor(Math.random() * 12); //document.getElementById("number").innerHTML;
  switch (iconRdm) {
    case 1:
      document.getElementById("up").innerHTML = "♦";
      document.getElementById("bot").innerHTML = "♦";
      break;
    case 2:
      document.getElementById("up").innerHTML = "♥";
      document.getElementById("bot").innerHTML = "♥";
      break;
    case 3:
      document.getElementById("up").innerHTML = "♠";
      document.getElementById("bot").innerHTML = "♠";
      break;
    case 4:
      document.getElementById("up").innerHTML = "♣";
      document.getElementById("bot").innerHTML = "♣";
      break;
    default:
      break;
  }
  if (0 < txtRdm && txtRdm < 10) {
    document.getElementById("number").innerHTML = txtRdm;
  } else if (txtRdm == 0) {
    document.getElementById("number").innerHTML = "A";
  } else if (txtRdm == 10) {
    document.getElementById("number").innerHTML = "J";
  } else if (txtRdm == 11) {
    document.getElementById("number").innerHTML = "Q";
  } else if (txtRdm == 12) {
    document.getElementById("number").innerHTML = "A";
  }
};

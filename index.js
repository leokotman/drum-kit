"use strict";
let drumBtns = document.querySelectorAll(".drum");

drumBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.textContent) {
      case "w":
        let drumSoundW = new Audio("sounds/tom-1.mp3");
        drumSoundW.play();
        break;
      case "a":
        let drumSoundA = new Audio("sounds/snare.mp3");
        drumSoundA.play();
        break;
      case "s":
        let drumSoundS = new Audio("sounds/tom-3.mp3");
        drumSoundS.play();
        break;
      case "d":
        let drumSoundD = new Audio("sounds/kick-bass.mp3");
        drumSoundD.play();
        break;
      case "j":
        let drumSoundJ = new Audio("sounds/tom-4.mp3");
        drumSoundJ.play();
        break;
      case "k":
        let drumSoundK = new Audio("sounds/tom-2.mp3");
        drumSoundK.play();
        break;
      case "l":
        let drumSoundL = new Audio("sounds/crash.mp3");
        drumSoundL.play();
        break;
      default:
        console.log("error button");
    }
  });
});

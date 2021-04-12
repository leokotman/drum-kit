"use strict";
for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
    let drumBtn = document.querySelectorAll('.drum')[i];
    drumBtn.addEventListener('click', musicDrum(drumBtn));
}

function musicDrum(drum) {
    switch (drum.innerText) {
        case "w":
            let drumSoundW = new Audio('sounds/tom-1.mp3');
            drumSoundW.play();
        case "a":
            let drumSoundA = new Audio('sounds/snare.mp3');
            drumSoundA.play();
        case "s":
            let drumSoundS = new Audio('sounds/tom-3.mp3');
            drumSoundS.play();
        case "d":
            let drumSoundD = new Audio('sounds/kick-bass.mp3');
            drumSoundD.play();
        case "j":
            let drumSoundJ = new Audio('sounds/tom-4.mp3');
            drumSoundJ.play();
        case "k":
            let drumSoundK = new Audio('sounds/tom-2.mp3');
            drumSoundK.play();
        case "l":
            let drumSoundL = new Audio('sounds/crash.mp3');
            drumSoundL.play();
    }
}
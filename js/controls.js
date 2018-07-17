// https://gamedevelopment.tutsplus.com/tutorials/game-input-simplified--cms-19759
// handles user input cross-platform


const KEYBOARD = 1;
const POINTER  = 2;
const GAMEPAD  = 3;
const DEVICE   = 16;
const CODE     = 8;

var __pointer = {
    currentX    : 0,
    currentY    : 0,
    previousX   : 0,
    previousY   : 0,
    distanceX   : 0,
    distanceY   : 0,
    identifier  : 0,
    moved       : false,
    pressed     : false
}

// (function() {

// })();
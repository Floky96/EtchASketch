'use strict'
let counter = 0;
let pickedColor = "black";

function startReset() {
    let test = document.getElementById("sketchpadFrame");

    if (counter > 0) {
        test.removeChild(sketchpad);
        const test1 = document.createElement('div');
        test1.classList.add('sketchpad');
        test1.id = 'sketchpad';
        test.appendChild(test1);
        gridGenerate();
    }
    else {
        gridGenerate();
    }
    counter++;
}

function gridGenerate() {
    let userInputSize = document.getElementById("userInputSize").value;
    if (userInputSize > 150) {
        alert("Max. 150");
        userInputSize = 0;
    }
    let sketchpad = document.getElementById("sketchpad");

    const counter = userInputSize * userInputSize;
    for (let i = 0; i < counter; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        sketchpad.appendChild(div);
    }
    sketchpad.style.gridTemplateColumns = 'repeat(' + userInputSize + ', 1fr)';
    sketchpad.style.gridTemplateRows = 'repeat(' + userInputSize + ', 1fr)';

    const boxes = document.querySelectorAll('.box');

    boxes.forEach(function (box) {
        box.addEventListener('mouseover', function () {
            box.style.backgroundColor = "black";
        })
    })
}

function colorChoiceWB() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(function (box) {
        box.addEventListener('mouseover', function () {
            box.style.backgroundColor = "lightcyan";
        })
    })
}
function colorChoiceBW() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(function (box) {
        box.addEventListener('mouseover', function () {
            box.style.backgroundColor = "black";
        })
    })

}
function colorChoiceWR() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(function (box) {
        box.addEventListener('mouseover', function () {
            box.style.backgroundColor = "red";
        })
    })

}
function colorChoiceRN() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(function (box) {
        box.addEventListener('mouseover', function () {
            box.style.backgroundColor = "rgb(" + parseInt(Math.random() * 255) + ', ' + parseInt(Math.random() * 255) + ', ' + parseInt(Math.random() * 255) + ')';
        })

    })

}




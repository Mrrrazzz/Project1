var wrong = new Audio('wrong.mp3');
var correct = new Audio('correct.mp3');

window.addEventListener("keydown", event => {
    if (event.key == "1") {
        document.getElementById('bt1').style.visibility = 'hidden';
        document.getElementById('r1').style.visibility = 'visible';
        correct.play();
    }
    if (event.key == "2") {
        document.getElementById('bt2').style.visibility = 'hidden';
        document.getElementById('r2').style.visibility = 'visible';
        correct.play();
    }
    if (event.key == "3") {
        document.getElementById('bt3').style.visibility = 'hidden';
        document.getElementById('r3').style.visibility = 'visible';
        correct.play();
    }
    if (event.key == "4") {
        document.getElementById('bt4').style.visibility = 'hidden';
        document.getElementById('r4').style.visibility = 'visible';
        correct.play();
    }
    if (event.key == "5") {
        document.getElementById('bt5').style.visibility = 'hidden';
        document.getElementById('r5').style.visibility = 'visible';
        correct.play();
    }
    if (event.key == "6") {
        document.getElementById('bt6').style.visibility = 'hidden';
        document.getElementById('r6').style.visibility = 'visible';
        correct.play();
    }
    if (event.key == "w") {
        wrong.play();
    }	
});
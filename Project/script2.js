// Для первого модального окна
var modal1 = document.getElementById("myModal1");
var button1 = document.getElementById("myButton1");
var closeButton1 = document.getElementsByClassName("close")[0];

button1.onclick = function() {
    modal1.style.display = "block";
}

closeButton1.onclick = function() {
    modal1.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
}

// Для второго модального окна
var modal2 = document.getElementById("myModal2");
var button2 = document.getElementById("myButton2");
var closeButton2 = document.getElementsByClassName("close")[1];

button2.onclick = function() {
    modal2.style.display = "block";
}

closeButton2.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
}

// Для третьего модального окна
var modal3 = document.getElementById("myModal3");
var button3 = document.getElementById("myButton3");
var closeButton3 = document.getElementsByClassName("close")[2];

button3.onclick = function() {
    modal3.style.display = "block";
}

closeButton3.onclick = function() {
    modal3.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal3) {
        modal3.style.display = "none";
    }
}
//step 4
var x, y, z;
x = 5;
y = 7;
z = x + y;
console.log(z);

//step 4
var A, B, C;
A = "Hello ";
B = "world!";
C =  A + B;
console.log(C);

//step 5
function SumNPrint(x1, x2){
    var x3 = x1 + x2;
    console.log(x3);
}
SumNPrint(x, y);
SumNPrint(A, B);

//step 6
if (C.length > z) {
    console.log(C);
}else if (C.length < z){
    console.log(z)
}else{
    console.log("good job!")
}

// //step 7
// var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// var L2 = ["Apple", "Banana", "Kiwi", "Orange"];
// function findTheBanana1(l){
//     for (let i = 0; i < l.length; i++) {
//         if(l[i] == "Banana"){
//             window.alert("Found the Banana at " + i);
//         }
//     }
// }
// findTheBanana1(L1);
// findTheBanana1(L2);

// //step 8
// function findTheBanana2(s) {
//     if(s == "Banana"){
//         window.alert("Found the Banana!");
//     }
// }
// L1.forEach(findTheBanana2);
// L2.forEach(findTheBanana2);

//step 9
var d = new Date(); 

//adds greeting on main page
function greetingFunc() {
    var h = d.getHours();
    var greeting = "";

    if (5 < h && h < 12) {
        greeting = "Good morning!";
    } else if (12 < h && h < 18) {
        greeting = "Good afternoon!";
    } else if (18 < h && h < 20) {
        greeting = "Good evening!";
    } else {
        greeting = "Good night!";
    }
    console.log(greeting); 

    var greetingElement = document.getElementById("greeting");
    if (greetingElement != null) {
        greetingElement.innerHTML = greeting + " I am Emma Kim!";
    }
}
greetingFunc();

//adds year to the footer
function addYear(){
    var year = d.getFullYear();
    var footerElem = document.getElementById("copyYear");
    footerElem.innerHTML += " " + year;
}
addYear();

function showList() {
    var list = document.getElementById("funList");
    var button = document.getElementById("showButton");

    list.style.display = "block"; 
    button.style.display = "none";
}

//read more and read less
$("#readMore").click(function() {
    $("#intro2").show();  
    $("#readMore").hide(); 
    $("#readLess").show(); 
});
$("#readLess").click(function() {
    $("#intro2").hide(); 
    $("#readMore").show();  
    $("#readLess").hide();  
});


//checks form validity
function validateForm(event) {
    let valid = true;

    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (!nameInput.checkValidity()) {
        nameError.innerHTML = nameInput.validationMessage;
        valid = false;
    } else {
        nameError.innerHTML = "";
    }

    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (!emailInput.checkValidity()) {
        emailError.innerHTML = emailInput.validationMessage;
        valid = false;
    } else {
        emailError.innerHTML = "";
    }

    const commentInput = document.getElementById("comment");
    const commentError = document.getElementById("commentError");
    if (!commentInput.checkValidity()) {
        commentError.innerHTML = commentInput.validationMessage;
        valid = false;
    } else {
        commentError.innerHTML = "";
    }

    if (!valid) {
        event.preventDefault();
    }
}

document.getElementById("contactForm").onsubmit = validateForm;

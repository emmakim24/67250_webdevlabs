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

const form = document.getElementById("contactForm");
if (form) {
    form.onsubmit = validateForm;
}

function getAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
      const advice = data.slip.advice;
      document.getElementById("adviceText").innerText = advice;
    })
    .catch(error => {
        console.error("Error fetching advice:", error);
        document.getElementById("adviceText").innerText = "Oops! Couldn't fetch advice. Try again later.";
    });
}

//read more read less buttons
$("#readMore").click(function () {
    $("#moreBio").show();
    $("#readMore").hide();
    $("#readLess").show();
});
$("#readLess").click(function () {
    $("#moreBio").hide();
    $("#readMore").show();
    $("#readLess").hide();
});

//toggle menu
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (toggle && navLinks) {
        toggle.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });
    }
});


//highlights what page is active
console.log(window.location.pathname);
const links = document.querySelectorAll('nav a');
links.forEach(
    element => {
        if (element.href.includes(window.location.pathname)){
            element.classList.add('active');
        }
    }
)


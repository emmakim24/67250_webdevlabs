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

//step 7
var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];
function findTheBanana1(l){
    for (let i = 0; i < l.length; i++) {
        if(l[i] == "Banana"){
            window.alert("Found the Banana at " + i);
        }
    }
}
findTheBanana1(L1);
findTheBanana1(L2);

//step 8
function findTheBanana2(s) {
    if(s == "Banana"){
        window.alert("Found the Banana!");
    }
}
L1.forEach(findTheBanana2);
L2.forEach(findTheBanana2);

//step 9
function greetingFunc() {
    var d = new Date(); 
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
        greetingElement.innerHTML = greeting + " I am Emma Kim";
    }
}
greetingFunc();


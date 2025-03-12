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
var count = 0;
function findTheBanana2(s){
    if (s == "Banana"){
        window.alert("We found a banana in array: " + count)
    }
}




var student = {name:"Emma", age: 19};
console.log(student.name);
document.getElementById("id").innerHTML = "hi" + student.name + "!";
//hi3

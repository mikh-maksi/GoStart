var a = document.getElementById("a");
var b = document.getElementById("b");
var res = document.getElementById("res");
var img1 = document.getElementById("img1");


var btn = document.getElementById("btn");
var rd = document.getElementById("red");
var bl = document.getElementById("blue");

btn.addEventListener("click", plus); 
rd.addEventListener("click", rd_func); 
bl.addEventListener("click", bl_func); 

img1.addEventListener("mouseover", over_func); 
img1.addEventListener("mouseout", out_func); 
console.log(res);

function plus(){
    var c = Number(a.value)+Number(b.value);
    res.innerHTML = ""+String(c);
}

function rd_func(){
    res.setAttribute("class", "red") ;
    console.log("red");
}
function bl_func(){
    res.setAttribute("class", "blue") ;
    console.log("blue");
}

function over_func(){
    img1.src = "img/geography.png";
    console.log("over");
}
function out_func(){
    img1.src = "img/history.png";
    console.log("out");
}
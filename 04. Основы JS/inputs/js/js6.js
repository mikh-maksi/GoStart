var a = document.getElementById("a");
var b = document.getElementById("b");
var res = document.getElementById("res");

var btn = document.getElementById("btn");
var rd = document.getElementById("red");
var bl = document.getElementById("blue");

btn.addEventListener("click", plus); 
rd.addEventListener("click", rd_func); 
bl.addEventListener("click", bl_func); 
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

var btn = document.getElementById("btn");

btn.addEventListener("click", plus); 


console.log(res);

function plus(){
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var res = document.getElementById("res");
    var c = Number(a.value)+Number(b.value);
    res.innerHTML = ""+String(c);
}

/*elem.setAttribute(name, value) */
var res = document.getElementById("res");
var a = document.getElementById("a");
var b = document.getElementById("b");


console.log(res);

var c = Number(a.value)+Number(b.value);
console.log(a.value);
res.innerHTML = String(c);

/*elem.setAttribute(name, value) */
//functional part
var text = document.getElementById("llama").innerHTML.split("return ::")[1].split("::")[0];
var format = text.replace(/"/g, "").replace(/;/g, "<br>");
document.body.innerHTML = format;

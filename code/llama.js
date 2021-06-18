//style
document.body.style.background = "black";
document.body.style.fontFamily = "courier new";
document.body.style.color = "white";
document.body.style.fontWeight = "bold";

var text = document.getElementById("llama").innerHTML.split("return ::")[1].split("::")[0];
var format = text.replace(/"/g, "").replace(/;/g, "<br>");

var rawVar = document.getElementById("llama").innerHTML.split("var ::")[1].split("::")[0];
var preVar = rawVar.replace(/>>/g, "var ");
var compiledVariables = "Variables not supported yet...";

// if variables are used
if (document.getElementById("llama").innerHTML.split("return ::")[1].split("::")[0].split(";")[0].split(" ")[1] == "v") {
var format = "<p id='html'>variables used...</p>";

}
document.body.innerHTML = format;

document.getElementById("html").innerHTML = compiledVariables;

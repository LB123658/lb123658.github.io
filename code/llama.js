var code = document.getElementById("llama").innerHTML;
var filename = llama.split("<")[1].split(">")[0];

//create title based on LLAMA file name
var title = document.createElement("title");
title.innerHTML = filename;
document.head.appendChild(title);

var formatted = code.replace(/$/g, "var = ").replace(/"/g, "");
var text = code.split("text ::").[1].split("::")[0];

var p = createElement("P");
p.innerHTML = text;
document.body.appendChild(p);


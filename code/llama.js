var code = document.getElementById("llama").innerHTML;
var filename = llama.split("<")[1].split(">")[0];
var output = document.body;

//create title based on LLAMA file name
var title = document.createElement("title");
title.innerHTML = filename;
document.head.appendChild(title);

var format = filename.replace(/f::/gi, "function ").replace(/:BUTTON/gi, "<button").replace(/#/gi, "id='").replace(/\/gi, "'");
output.innerHTML = format;

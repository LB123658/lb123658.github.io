var txt = document.getElementById("txt");
txt.focus();
function runCode() {
  if (document.getElementById("txt").value.split("cmd")[1] == " --run") {
    compileCode();
  }
  if (document.getElementById("txt").value.split("cmd")[1] == " --download") {
    alert("LLAMA cannot download yet");
  }
  if (document.getElementById("txt").value.split("about")[1] == " --version") {
    alert("LLAMA\nVersion 1.0");
  }
  if (document.getElementById("txt").value.slice(0, 8) == "<file:: ") {
    document.getElementById("t").innerHTML = document.getElementById("txt").value.split("<file:: ")[1].split(">")[0];
  }
}
function compileCode() {
  document.getElementById("frame").innerHTML = "";
 if (document.getElementById("txt").value.split("\n").[1].split("::")[0] == "<create[text]") {
    createText();
 } else if (document.getElementById("txt").value.split("#application:: ")[1].split("#")[0] == "<app:: webwindow::>") {
    createEmbed();
  } 
}
function createEmbed() {
  var url = document.createElement("EMBED");
  url.src = document.getElementById("txt").value.split("<create[webwindow]:: ")[1].split("::>")[0];
  url.style.position = "absolute";
  url.style.top = "0px";
  url.style.left = "0px";
  url.style.width = "100%";
  url.style.height = "50%";
  document.getElementById("frame").appendChild(url);
}
function createText() {
  var textLlama = document.createElement("P");
  textLlama.innerHTML = document.getElementById("txt").value.split("<create[text]:: ")[1].split("::>")[0];
  document.getElementById("frame").appendChild(textLlama);
}

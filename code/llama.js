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
    var textLlama = document.createElement("P");
    textLlama.innerHTML = document.getElementById("txt").value.split("<create[text]:: ")[1].split("::>")[0];
    document.getElementById("frame").appendChild(textLlama);

if (document.getElementById("txt").value.slice(0, 19) == "#import>> webwindow") {
    var urlLlama = document.createElement("EMBED");
    urlLlama.src = document.getElementById("txt").value.split("<create[webwindow]:: ")[1].split("::>")[0];
    urlLlama.style.position = "absolute";
    urlLlama.style.top = "0px";
    urlLlama.style.left = "0px";
    urlLlama.style.width = "100%";
    urlLlama.style.height = "50%";
    document.getElementById("frame").appendChild(urlLlama);
  }
}

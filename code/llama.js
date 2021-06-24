var txt = document.getElementById("txt");
txt.focus();

function runCode() {
  if (document.getElementById("txt").value.split("cmd")[1] == " --run") {
    compileCode();
  }
  if (document.getElementById("txt").value.split("cmd")[1] == " --download") {
    alert("LLAMA cannot download yet");
  }
  if (document.getElementById("txt").value.split("cmd")[1] == " --upload") {
    alert("LLAMA cannot upload files yet");
  }
  if (document.getElementById("txt").value.split("cmd")[1] == " --print") {
    window.print();
  }
  if (document.getElementById("txt").value.split("cmd")[1] == " --clear") {
    document.getElementById("txt").value = "";
  }
  if (document.getElementById("txt").value.split("cmd")[1] == " --save") {
    localStorage.setItem("llamacode", document.getElementById("txt").value.split("cmd")[0]);
  }
  if (document.getElementById("txt").value.split("cmd")[1] == " --import") {
    document.getElementById("txt").value = localStorage.getItem("llamacode") + "\ncmd --run";
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
  if (document.getElementById("txt").value.split("create(")[1].split(")")[0] == "text") {
    var textLlama = document.createElement("P");
    textLlama.innerHTML = document.getElementById("txt").value.split("create(text) \"")[1].split("\";")[0];
    document.getElementById("frame").appendChild(textLlama);
  } else if (document.getElementById("txt").value.split("create(")[1].split(")")[0] == "webwindow") {
    var url = document.createElement("EMBED");
    url.src = document.getElementById("txt").value.split("create(webwindow) \"")[1].split("\"")[0];
    url.style.width = "99%";
    url.style.height = "49%";
    document.getElementById("frame").appendChild(url);
  } else if (document.getElementById("txt").value.split("create(")[1].split(")")[0] == "html") {
    var textLlama = document.createElement("P");
    textLlama.innerHTML = document.getElementById("txt").value.split("create(html) \"")[1].split("\";")[0];
    document.getElementById("frame").appendChild(textLlama);
  }
  if (document.getElementById("txt").value.split("create(")[2].split(")")[0] == "text") {
    var textLlama = document.createElement("P");
    textLlama.innerHTML = document.getElementById("txt").value.split("create(text) \"")[1].split("\";")[0];
    document.getElementById("frame").appendChild(textLlama);
  } else if (document.getElementById("txt").value.split("create(")[2].split(")")[0] == "webwindow") {
    var url = document.createElement("EMBED");
    url.src = document.getElementById("txt").value.split("create(webwindow) \"")[2].split("\"")[0];
    url.style.width = "99%";
    url.style.height = "49%";
    document.getElementById("frame").appendChild(url);
  } else if (document.getElementById("txt").value.split("create(")[2].split(")")[0] == "html") {
    var textLlama = document.createElement("P");
    textLlama.innerHTML = document.getElementById("txt").value.split("create(html) \"")[2].split("\";")[0];
    document.getElementById("frame").appendChild(textLlama);
  }
}

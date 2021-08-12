// autofill.js for main page search suggestions
var input = document.getElementById("input");
var div = document.getElementById("div");

div.style.visibility = "hidden";
input.addEventListener("keyup", autofill);
function autofill() {
var query = input.value.replace(/ /g, "+");
var firstLetter = input.value.slice(0, 1).toLowerCase();
var firstWord = input.value.split(" ")[0].toLowerCase();
  if (firstLetter == "a") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a><br><a href='https://lb123658.github.io/galaxy/search?q=amazon'><button>Amazon</button></a><br><a href='https://lb123658.github.io/galaxy/search?q=adobe.com'><button>Adobe</button></a><a href='https://lb123658.github.io/galaxy/search?q=apple.com'><button>Apple</button></a>";
  } else if (firstLetter == "b") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a><a href='https://lb123658.github.io/galaxy/search?q=bitcoin.org'><button>Bitcoin</button></a><a href='https://lb123658.github.io/galaxy/search?q=search.brave.com'><button>Brave Search</button></a>";
  } else if (firstLetter == "c") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a>";
  } else if (firstLetter == "d") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a><br><a href='https://lb123658.github.io/galaxy/search?q=discord'><button>Discord</button></a>";
  } else if (firstLetter == "e") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a><br><a href='https://lb123658.github.io/galaxy/search?q=ebay'><button>Ebay</button></a><a href='https://lb123658.github.io/galaxy/search?q=ecosia.org'><button>Ecosia</button></a>";
  } else if (firstLetter == "f") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a><br><a href='https://lb123658.github.io/galaxy/search?q=facebook'><button>Facebook</button></a>";
  } else if (firstLetter == "g") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a><a href='https://lb123658.github.io/galaxy/search?q=Google'><button>Google</button></a><a href='https://lb123658.github.io/galaxy/search?q=Gmail'><button>Gmail</button></a><a href='https://lb123658.github.io/galaxy/search?q=Google+maps'><button>Google maps</button></a><a href='https://lb123658.github.io/galaxy/search?q=Google+docs'><button>Google docs</button></a><a href='https://lb123658.github.io/galaxy/search?q=Google+translate'><button>Google translate</button></a>";
  } else if (firstLetter == "h") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a>";
  } else if (firstLetter == "i") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a><a href='https://lb123658.github.io/galaxy/search?q=instagram.com'><button>Instagram</button></a>";
  } else if (firstLetter == "j") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a>";
  } else if (firstLetter == "k") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a>";
  } else if (firstLetter == "l") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a>";
  } else if (firstLetter == "m") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a>";
  } else if (firstLetter == "n") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a><a href='https://lb123658.github.io/galaxy/search?q=Netflix'><button>Netflix</button></a>";
  } else if (firstLetter == "o") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a><a href='https://lb123658.github.io/galaxy/search?q=2020+Tokyo+Olympics'><button>2020 Tokyo Olympics</button></a><a href='https://lb123658.github.io/galaxy/search?q=olympics'><button>Olympics</button></a><a href='https://lb123658.github.io/galaxy/search?q=olympics.com'><button>Olympics.com</button></a><a href='https://lb123658.github.io/galaxy/search?q=nbcolympics.com'><button>Olympics on NBC</button></a>";
  } else if (firstLetter == "p") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a><a href='https://lb123658.github.io/galaxy/search?q=pinterest.com'><button>Pinterest</button></a>";
  } else if (firstLetter == "q") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a>";
  } else if (firstLetter == "r") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a><a href='https://lb123658.github.io/galaxy/search?q=Russia'><button>Russia</button></a>";
  } else if (firstLetter == "s") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a><a href='https://lb123658.github.io/galaxy/search?q=Sweden'><button>Sweden</button></a><a href='https://lb123658.github.io/galaxy/search?q=Switzerland'><button>Switzerland</button></a><a href='https://lb123658.github.io/galaxy/search?q=Somalia'><button>Somalia</button></a><a href='https://lb123658.github.io/galaxy/search?q=South+Korea'><button>South Korea</button></a>";
  } else if (firstLetter == "t") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a><a href='https://lb123658.github.io/galaxy/search?q=twitter.com'><button>Twitter</button></a><a href='https://lb123658.github.io/galaxy/search?q=target.com'><button>Target</button></a><a href='https://lb123658.github.io/galaxy/search?q=Tunisia'><button>Tunisia</button></a><a href='https://lb123658.github.io/galaxy/search?q=Turkmenistan'><button>Turkmenistan</button></a>";
  } else if (firstLetter == "u") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a><a href='https://lb123658.github.io/galaxy/search?q=usps.com'><button>United States Postal Service</button></a><a href='https://lb123658.github.io/galaxy/search?q=ups.com'><button>UPS</button></a><a href='https://lb123658.github.io/galaxy/search?q=Ukraine'><button>Ukraine</button></a><a href='https://lb123658.github.io/galaxy/search?q=Uganda'><button>Uganda</button></a>";
  } else if (firstLetter == "v") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a>";
  } else if (firstLetter == "w") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a>";
  } else if (firstLetter == "x") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a>";
  } else if (firstLetter == "y") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a><a href='https://lb123658.github.io/galaxy/search?q=YouTube'><button>YouTube</button></a><a href='https://lb123658.github.io/galaxy/search?q=Yemen'><button>Yemen</button></a><a href='https://lb123658.github.io/galaxy/search?q=yandex.ru'><button>Yandex.ru</button></a>";
  } else if (firstLetter == "z") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a>";
  } else if (firstLetter == "я") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a><a href='https://lb123658.github.io/galaxy/search?q=yandex.ru'><button>Яандекс</button></a><a href='https://lb123658.github.io/galaxy/search?q=yandex+translate'><button>Яандекс переводчик</button></a><a href='https://lb123658.github.io/galaxy/search?q=yandex+disk'><button>Яандекс диск</button></a><a href='https://lb123658.github.io/galaxy/search?q=yandex+mail'><button>Яандекс почта</button></a>";
  } else if (firstLetter == "2") {
    div.style.visibility = "visible";
    div.innerHTML = "<a href='https://lb123658.github.io/galaxy/search?q=" + query + "'><button>" + input.value + "</button></a><a href='https://lb123658.github.io/galaxy/search?q=2020+Tokyo+Olympics'><button>2020 Tokyo Olympics</button></a><a href='https://lb123658.github.io/galaxy/search?q=2020+olympics'><button>2020 Olympics</button></a>";
  } else {
    div.style.visibility = "hidden";
  }
}

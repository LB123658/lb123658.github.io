function photonMail(label,words) {
var emailContent = "<button onclick=\"content.style.visibility = 'visible'; content.innerHTML = '<h2>' + this.innerHTML + '</h2><br><p>' + this.name + '</p>';\" ondblclick=\"this.remove(); updateStorage()\" name=\"" + words + "\">" + label + "</button>";
var previousMail = localStorage.getItem("mail");
localStorage.setItem("mail",emailContent + previousMail);
}

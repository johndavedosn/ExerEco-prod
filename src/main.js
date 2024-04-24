function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
var strtbtn = document.getElementById("strt")
if (strtbtn != null){
strtbtn.addEventListener("click", () => {
  window.location.href = "./exercises.html"
})

}


var css_link = document.createElement("link")

css_link.rel = "stylesheet"
css_link.href = "../css/style.css"

document.querySelector("head").appendChild(css_link)

css_link.onload = () => {
console.log("loaded")
}
css_link.onerror = () => {
css_link.href = "https://exerecoimpala.sirv.com/Images/style.css"
} 
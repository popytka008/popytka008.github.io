var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello World';

var image = document.querySelector("img");
var src ;
image.onclick = function() {
  src = image.getAttribute("src");  
  if(src === "images/image3.jpg") {  
    image.setAttribute ('src',"images/image1.jpg");
  } else {
    image.setAttribute ('src',"images/image3.jpg");
  }
};

var btn = document.querySelector("button");
var head = document.querySelector("h1");

function setUserName() {
  var name = prompt("Как тебя зовут?");
  if(name ==="") { name = "Аноним"; }
  localStorage.setItem("name", name);
  head.innerHTML = "Привет, " + name;
}

if(!localStorage.getItem("name") || localStorage.getItem("name") === "null") {  
  setUserName();
} else {
  var name = localStorage.getItem("name");
  head.innerHTML = "Привет, " + name;
}

btn.onclick = setUserName;
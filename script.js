var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.querySelector("body");
var save = document.querySelector(".save");
var ui = document.querySelector("ul");

save.addEventListener("click", function () {
  var li = document.createElement("li");
  var dele = document.createElement("button");
  li.appendChild(document.createTextNode(body.style.background + ";  "));

  // deleting button
  dele.appendChild(document.createTextNode("del"));
  dele.onclick = deletee;
  li.appendChild(dele);

  ui.appendChild(li);
});

// function for delete
function deletee(obj) {
  obj.target.parentNode.remove();
}

function gradient_changer() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  h3.textContent = body.style.background + ";";
}

color1.addEventListener("input", gradient_changer);
color2.addEventListener("input", gradient_changer);

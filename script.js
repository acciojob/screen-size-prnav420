//your JS code here. If required.
const div = document.createElement("div");
div.id = "sizeInfo";

const h1element = document.createElement("h1");
h1element.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;

document.body.append(div);
div.appendChild(h1element);

window.onresize = function () {
  h1element.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
};

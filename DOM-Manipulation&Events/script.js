const container = document.querySelector("#container");

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";

const text = document.createElement("h3");
text.style.color = "blue";
text.textContent = "I'm a blue h3!";

const content = document.createElement("div");
content.style.borderColor = "black";
content.style.background = "pink";

const textInContent = document.createElement("h3");
textInContent.textContent = "I'm in a div";

const paragraphContent = document.createElement("p");
paragraphContent.textContent = "ME TOO!";


container.appendChild(paragraph);
container.appendChild(text);
content.appendChild(textInContent);
content.appendChild(paragraphContent);
container.appendChild(content);

const btn = document.querySelector("#btn");
btn.style.background = "red";
btn.style.color = "white";
btn.addEventListener("click", () => {
  alert("Hello World");
});
btn.addEventListener("click", function (e) {
    console.log(e.target);
  });

btn.addEventListener("click", function (e) {
e.target.style.background = "blue";
});
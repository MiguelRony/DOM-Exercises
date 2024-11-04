const list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");


function getInfo() {
    const value = input.value
    input.value = ""
    const newItem = document.createElement("li")
    const spn = document.createElement("span")
    const buttn = document.createElement("button")
    newItem.appendChild(spn)
    newItem.appendChild(buttn)
    spn.innerHTML = value
    buttn.textContent = "Delete"
    list.appendChild(newItem)
    buttn.onclick = () => list.removeChild(newItem)
    newItem.focus()
}

btn.addEventListener("click", getInfo)
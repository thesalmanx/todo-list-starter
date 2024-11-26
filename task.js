document.getElementById("add-btn").addEventListener("click", () => {
  let inputtext = document.getElementById("inputtext").value;
  if (inputtext !== "") {
    const newItem = document.createElement("li");
    const checkbox = document.createElement("label");
    const checkboxinside = document.createElement("input");
    const checkmark = document.createElement("span");
    newItem.textContent = inputtext;
    const list = document.getElementById("notes");
    list.appendChild(newItem);

    newItem.appendChild(checkbox);
    checkbox.appendChild(checkboxinside);
    checkbox.appendChild(checkmark);
    checkboxinside.type = "checkbox";
    newItem.classList.add("myitems");
    checkbox.classList.add("container");
    checkboxinside.classList.add("checkbox");
    checkmark.classList.add("checkmark");

    checkboxinside.addEventListener("change", () => {
      if (checkboxinside.checked) {
        newItem.style.textDecoration = "line-through";
      } else {
        newItem.style.textDecoration = "none";
      }
    });

    document.getElementById("inputtext").value = "";
  }
});

document.getElementById("remove-btn").addEventListener("click", () => {
  const list = document.getElementById("notes");
  const listItems = list.getElementsByTagName("li");
  if (listItems.length > 0) {
    listItems[0].remove(); // Remove the first <li> element
  }
});

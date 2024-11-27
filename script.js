/*Question 6
Create a grocery list application where users can add and remove items from a list. 
The list should be displayed as a bulleted unordered list*/

let groceryList = [];

//List on the page
function renderList() {
    const listElement = document.getElementById("grocery-list");
    listElement.innerHTML = ""; // Clear the current list
    groceryList.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listElement.appendChild(listItem);
    });
}

// Add an item
function addItem() {
    const input = document.getElementById("item-input");
    const item = input.value.trim();

    if (item) {
        groceryList.push(item); 
        input.value = "";
        renderList(); 
    } else {
        alert("Please enter an item.");
    }
}

// Remove the last item 
function removeItem() {
    if (groceryList.length > 0) {
        groceryList.pop(); 
        renderList(); 
    } else {
        alert("The list is already empty.");
    }
}
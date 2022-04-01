const draggableList = document.querySelector("#draggable-list");
const check = document.querySelector("#check");

const richestPeople = ["amirali", "arad", "mohammadhossien", "maryam", "bahar", "benyamin", "sirvan", "vajiheh", "amir", "mehdi"];

// Store listitems
const listItems = [];

let dragStartIndex;

creatList();

// insert list items into DOM
function creatList() {
    [...richestPeople]
        .map((a) => ({ value: a, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
        .forEach((person, index) => {
            const listItem = document.createElement("li");

            listItem.setAttribute("data-index", index);

            listItem.innerHTML = `
                <span class="number">${index + 1}</span>
                <div class="draggable" draggable="true">
                    <p class="person-name">${person}</p>
                    <i class="fas fa-grip-lines"></i>
                </div>
            `;

            listItems.push(listItem);
            draggableList.appendChild(listItem);
        });
}

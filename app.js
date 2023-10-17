const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",                                                    //allow to get  the charater 
    function(event) {
        if (event.key == "Enter") {
            addToDo(this.value)
            this.value = ""
        }
    }
)

const addToDo = (item) => {
    const listItem = document.createElement("li");                  // using to creat li 
    listItem.innerHTML = `
         ${item}
        <i class="fas fa-times"></i>
    `;

    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");            // toggle is  -- toggles between hide and show  for selected items
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove()
        }
    )
    toDoBox.appendChild(listItem)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxesAmount = document.querySelector("input[type='number']");
const createBox = document.querySelector("button[data-create]");
const destroyBox = document.querySelector("button[data-destroy]");
const boxesRender = document.querySelector("#boxes");

function createBoxes(amount) {
    if ( amount >= 1 && amount <=100 ) {
        let side = 30;
        const arrayOfElements = [];
        for (let i = 1; i <= amount; i++) {
            const color = getRandomHexColor();
            arrayOfElements.push(`<div style="background-color: ${color}; width: ${side}px; height: ${side}px"></div>`);
            side += 10;
        }
        boxesRender.insertAdjacentHTML("afterbegin", arrayOfElements.join(""));
    }
};

function destroyBoxes() {
    boxesRender.innerHTML = "";
}

destroyBox.addEventListener("click", destroyBoxes);
createBox.addEventListener("click", () => {
    destroyBoxes();
    const inputValue = document.querySelector("input[type='number']").value;
    createBoxes(inputValue);
    boxesAmount.value = "";
})
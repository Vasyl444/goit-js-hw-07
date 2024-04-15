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
    if (100 >= amount >= 1) {
        let side = 30;
        for (let i = 1; i <= amount; i++) {
            const color = getRandomHexColor();
            boxesRender.insertAdjacentHTML("beforeend", `<div style="background-color: ${color}; width: ${side}px; height: ${side}px"></div>`);
            side += 10;
        }
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
function  getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");
const body = document.querySelector(".task-body");
const color = document.querySelector(".color");
btn.addEventListener("click", () =>
{
    body.setAttribute("style", `background-color: ${getRandomHexColor()}`);
    color.textContent = `${getRandomHexColor()}`;
});
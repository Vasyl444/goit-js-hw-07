const inputText = document.querySelector("#name-input");
console.log("🚀 ~ form:", inputText);
let outputText = document.querySelector("#name-output");
console.log(outputText);
inputText.addEventListener("input", () => {
    const validation = inputText.value.trim();
    if (validation === "" || validation === " ") {
       outputText.textContent = "Anonymous";
    } else {
        outputText.textContent = validation; 
    }
});

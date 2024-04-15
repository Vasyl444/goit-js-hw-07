const formRegister = document.querySelector(".login-form");
formRegister.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === "" || password === "") {
        return alert('All form fields must be filled in')
    } else {
        const obj = {
            email: `${email.trim()}`,
            password: `${password.trim()}`
        };
        console.log(obj);
    }
    form.reset();
}
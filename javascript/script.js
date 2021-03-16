function validateEmail() {

    let formInput = document.querySelector(".form__input");
    let email = formInput.value;
    let errorEmpty = document.querySelector(".--empty");
    let errorWrong = document.querySelector(".--wrong");

    // Check for empty fields
    if(email != "") {
        errorEmpty.classList.add("--hidden");
        formInput.classList.remove("--error");

        // Validate email format
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+) *$/.test(formInput.value)) {
            errorWrong.classList.add("--hidden");
            formInput.classList.remove("--error");
        } else {
            errorWrong.classList.remove("--hidden");
            formInput.classList.add("--error");
        }
        
    } else {
        errorEmpty.classList.remove("--hidden");
        errorWrong.classList.add("--hidden");
        formInput.classList.add("--error");
    }
}

let button = document.querySelector(".form__button");
button.addEventListener("click", validateEmail);

let input = document.querySelector(".form__input");
// Validate email when "Enter" key is pressed
input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        // Cancel the default action
        event.preventDefault();
        // Validate email
        validateEmail();
    }
});
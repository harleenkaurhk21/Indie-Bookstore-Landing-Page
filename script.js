
const form = document.getElementById("contactForm");
const loading = document.getElementById("loading");
const browseBtn = document.getElementById("browseBtn");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const bookList = document.getElementById("bookList");
const emptyMessage = document.getElementById("emptyMessage");

function checkBooks() {
    if (bookList.children.length === 0) {
        emptyMessage.classList.remove("hidden");
    } else {
        emptyMessage.classList.add("hidden");
    }
}

checkBooks();

function sanitizeInput(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML.trim();
}
function showError(input, errorElement, message) {
    input.classList.add("error-input");
    errorElement.textContent = message;
}

function clearError(input, errorElement) {
    input.classList.remove("error-input");
    errorElement.textContent = "";
}

function validateForm() {

    let valid = true;

    clearError(nameInput, nameError);
    clearError(emailInput, emailError);
    clearError(messageInput, messageError);

    if (nameInput.value.trim() === "") {
        showError(nameInput, nameError, "Name is required");
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        showError(emailInput, emailError, "Email is required");
        valid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        showError(emailInput, emailError, "Enter a valid email");
        valid = false;
    }

    if (messageInput.value.trim() === "") {
        showError(messageInput, messageError, "Message is required");
        valid = false;
    }

    return valid;
}

form.addEventListener("submit", function (e) {

    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    loading.classList.remove("hidden");

    setTimeout(() => {

        const userData = {
            name: sanitizeInput(nameInput.value),
            email: sanitizeInput(emailInput.value),
            message: sanitizeInput(messageInput.value)
        };

        console.log(userData);

        console.log("[Analytics] User interacted with Static Landing Page");

        loading.classList.add("hidden");

        alert("Message submitted successfully!");

        form.reset();

    }, 2000);

});

browseBtn.addEventListener("click", function () {

    console.log("[Analytics] User interacted with Static Landing Page");

    document.getElementById("books").scrollIntoView({
        behavior: "smooth"
    });

});
nameInput.addEventListener("input", () => {
    clearError(nameInput, nameError);
});

emailInput.addEventListener("input", () => {
    clearError(emailInput, emailError);
});

messageInput.addEventListener("input", () => {
    clearError(messageInput, messageError);
});

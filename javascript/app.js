const button = document.querySelector(".button");

const IsValidEmail = (email) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;

  if (email.match(emailRegex)) {
    return true;
  } else {
    return false;
  }
};

button.addEventListener("click", () => {
  const email = document.querySelector(".textbox");
  const errorMessage = document.querySelector(".error-message");
  if (IsValidEmail(email.value)) {
    email.value = "";
    email.classList.remove("error");
    errorMessage.classList.remove("visible");
  } else {
    email.classList.add("error");
    errorMessage.textContent = "Please provide a valid email address";
    errorMessage.classList.add("visible");
  }
});

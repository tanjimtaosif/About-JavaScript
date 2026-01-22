let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  // The simple regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  let emailAns = emailRegex.test(email.value);
  let passwordAns = passwordRegex.test(password.value);

  if (!emailAns) {
    document.querySelector("#emailError").textContent = "Email is incorrect";
    document.querySelector("#emailError").style.display = "initial";
  } else {
    document.querySelector("#emailError").style.display = "none";
  }

  if (!passwordAns) {
    document.querySelector("#passError").textContent = "Password is incorrect";
    document.querySelector("#passError").style.display = "initial";
  } else {
    document.querySelector("#passError").style.display = "none";
  }

  if (emailAns && passwordAns) {
    document.querySelector("#mainMessage").textContent = "Success!";
    document.querySelector("#mainMessage").style.color = "limegreen";
  }
});

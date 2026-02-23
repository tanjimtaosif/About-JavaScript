let form = document.querySelector("form");
let name = document.querySelector("userName");
let email = document.querySelector("userEmail");
let pass = document.querySelector("userPassword");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  fetch("url", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      pass,
    }),
  });
});

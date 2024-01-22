
let form = document.getElementById("form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let profilen = document.getElementById("profilename");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let userdetail = {
    name: name.value,
    email: email.value,
    password: password.value,
  };
  localStorage.setItem("userdetail", JSON.stringify(userdetail));
  // let prname = JSON.parse(localStorage.getItem("userdetail"));
  // profilen.innerText = email;
  window.location.href = "login.html";
});
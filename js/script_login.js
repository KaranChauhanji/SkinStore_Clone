
let form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let userdetail = {
    email: email.value,
    password: password.value,
  };
  let savedetail = JSON.parse(localStorage.getItem("userdetail")) || {};
  if (
    savedetail.email == userdetail.email &&
    savedetail.password == userdetail.password
  ) {
    alert("Login Success");
    window.location.href = "myccount.html";
  } else {
    alert("Wrong Crendetial");
  }
});

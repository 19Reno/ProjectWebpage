// ! Login code

let login = document.getElementById("logging");

login.addEventListener("click", letmein);

function letmein(event) {
  event.preventDefault();
  const mail = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const log = { Emai: mail, password: pass };
  console.log("🚀 ~ file: login.js:13 ~ letmein ~ log:", log);
  alert("Login Success");
}

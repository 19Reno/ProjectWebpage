// ! signup code

const button = document.getElementById("acc");

button.addEventListener("click", account);

function account(event) {
  event.preventDefault();
  const a = document.getElementById("fname").value;
  const b = document.getElementById("lname").value;
  const c = document.getElementById("mail").value;
  const d = document.getElementById("ps").value;

  if (
    a.trim() === "" ||
    b.trim() === "" ||
    c.trim() === "" ||
    d.trim() === ""
  ) {
    alert("Please Enter a valid Details");
  } else if (!isPasswordValid(d)) {
    alert(
      "Must contain 8 characters with atleast one capital letter and one number"
    );
  } else {
    const detail = {
      Firstname: a,
      Lastname: b,
      Email: c,
      Password: d,
    };
    console.log(detail);
    alert("Account has been created successfully");
    window.location.href = "Login.html";
  }
}
function isPasswordValid(password) {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}

var username = prompt("Enter username: ");

if (username === "Admin") {
  var password = prompt("Enter password: ");
  if (password === "TheMaster") {
    alert("Welcome");
  } else if (password === "" || password === null) {
    alert("Cancelled");
  } else {
    alert("Incorrect password");
  }
} else if (username === "" || username === null) {
  alert("Cancelled");
} else {
  alert("I dont know you");
}

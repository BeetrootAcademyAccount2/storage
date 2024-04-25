const form = document.getElementById("loginForm");
// console.log(window);

if (localStorage.getItem("username")) {
  window.location.href = "main.html";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    console.log(username, password);

    const userData = {
      name: username,
      pass: password,
    };

    const convertedData = JSON.stringify(userData);
    5;

    document.cookie = `username=${username};expires=Sun, 15 Jul 2032 00:00:01 GMT`;
    7;

    document.cookie = `password=${password};expires=Sun, 15 Jul 2032 00:00:01 GMT`;

    // sessionStorage.setItem("username", username);
    // sessionStorage.setItem("password", password);
    // localStorage.setItem("username", username);
    // localStorage.setItem("password", password);
    localStorage.setItem("userData", convertedData);
    window.location.href = "main.html";
  }
});

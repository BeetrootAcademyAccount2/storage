const username = localStorage.getItem("username");
const userData = localStorage.getItem("userData");
console.log(document.cookie);

const cookieArray = document.cookie.split(";");

const objData = {};

cookieArray.forEach((item) => {
  const keyValueArr = item.split("=");
  objData[keyValueArr[0].trim()] = keyValueArr[1].trim();
});

console.log(objData);

// const convertedData = JSON.parse(userData);

// console.log("Username: ", convertedData.name);
// console.log("Password: ", convertedData.pass);

const title = document.querySelector("h1");
const btnRemove = document.getElementById("remove");
const btnClear = document.getElementById("clear");

title.textContent = `Hello, ${username}`;

btnRemove.addEventListener("click", () => {
  localStorage.removeItem("username");
});

btnClear.addEventListener("click", () => {
  localStorage.clear();
});

console.log("Client side javascript file is loaded! ");

const weatherForm = document.querySelector("form");
const searchInput = document.querySelector("#searchInput");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  messageOne.classList.remove("error");
  messageOne.textContent = "Loading...";
  getWeather(searchInput.value);
});

const getWeather = (location) => {
  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
        messageOne.classList.add("error");
        messageTwo.textContent = "";
      } else {
        messageOne.classList.remove("error");
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
};

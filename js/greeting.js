const LoginForm = document.querySelector("#login-form");
const LoginInput = document.querySelector("#login-form input");
const Greeting = document.querySelector(".greeting");

const Clear = document.querySelector(".clear");

const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

function onLoginsubmit(event) {
  event.preventDefault();
  LoginForm.classList.add(HIDDEN_CLASS);
  const username = LoginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  Greeting.innerText = `hello ${username}`;
  Greeting.classList.remove(HIDDEN_CLASS);
}

const SavedUsername = localStorage.getItem(USERNAME_KEY);

if (SavedUsername === null) {
  //show the form
  LoginForm.classList.remove(HIDDEN_CLASS);
  LoginForm.addEventListener("submit", onLoginsubmit);
} else {
  //show the greetings
  paintGreeting(SavedUsername);
}

Clear.addEventListener("click", clearstart);

function clearstart() {
  localStorage.removeItem(USERNAME_KEY);
}

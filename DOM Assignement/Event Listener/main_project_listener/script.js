const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const response = document.querySelector("p");

// ONCLICK EVENT

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

//--MOUSE EVENT--//

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", (e) => {
  mousemove.style.transform = "scale(2)translate(-25% ,-25%)";
});
window.addEventListener("mouseup", (e) => {
  mousemove.style.transform = "scale(1)  translate(-50% ,-50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", (e) => {
  questionContainer.style.background = "green";
});
questionContainer.addEventListener("mouseout", (e) => {
  questionContainer.style.background = "black";
});

//--KEYPRESS--

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  if (e.key === "j") {
    keypressContainer.style.background = "red";
  }
});

//--SCROLL EVENT --//

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//LOAD_EVENT

window.addEventListener("load", () => {
  console.log("Bienvenue");
});

//FOR_EACH

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    console.log("Clique");
  });
});

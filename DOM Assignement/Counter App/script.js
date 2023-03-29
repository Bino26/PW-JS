let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let display = document.querySelector("#result");
let reset = document.querySelector("#reset");

//Decrement Button
minus.addEventListener("click", () => {
  const value = parseInt(display.innerHTML);
  display.innerHTML = value - 1;
});
//Increment Buttom
plus.addEventListener("click", () => {
  const value = parseInt(display.innerHTML);
  display.innerHTML = value + 1;
});

//Rese Button
reset.addEventListener("click", () => {
  result.textContent = 0;
});

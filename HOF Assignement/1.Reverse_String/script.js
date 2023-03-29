//Reverse The String
let str = prompt("Enter a string:");
function reverseString() {
  return str.split("").reverse().join("");
}
string.textContent += str;

//Add with delay

setTimeout(() => {
  string.textContent = reverseString();
  rest.textContent = `Reverse String :${string.textContent}`;
}, 2000);

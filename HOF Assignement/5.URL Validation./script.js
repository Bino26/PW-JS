// //Case1

// let url = prompt("Entrez une url:");
// let Regex =
//   /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/g;

// if (!url.match(Regex)) {
//   alert("Entrez une Url valide");
// } else {
//   alert("L'url est valide");
// }

//Case2
let Regex =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/g;
let url = prompt("Enter a URL :");
if (Regex.test(url) == true) {
  alert("It's an Valid URL");
} else if (url == "") {
  alert("Tap Something");
} else {
  alert("It's not a valid URL");
}

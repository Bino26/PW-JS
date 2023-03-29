// //Case1

const regx = /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/gm;
let url = prompt("Enter a LinkedIn Profile URL :");
if (regx.test(url) == true) {
  alert("It's an Valid LinkedIn Profile URL");
} else if (url == "") {
  alert("Tap Something");
} else {
  alert("It's not a valid LinkedIn Profile URL");
}

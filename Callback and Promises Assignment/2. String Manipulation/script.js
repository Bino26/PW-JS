function logString() {
  return "The manipulate string is :";
}
function manipulateString(string, logString) {
  let upperCase = string.toUpperCase();

  console.log(logString(), upperCase);
}

manipulateString("Hello , World !", logString);

//The manipulate string is : HELLO , WORLD !

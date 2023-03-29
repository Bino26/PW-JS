const GenerateNumber = () => {
  return Math.floor(Math.random() * 1000);
};
//Update Message
const Cmessage = () => {
  setTimeout(() => {
    Message.textContent = "The number will be updated in 1 seconds";
  }, 2000);

  setTimeout(() => {
    Message.textContent = "The number will be updated in 2 seconds";
  }, 1000);
};
//Random Number and message
setInterval(() => {
  Message.style.color = "red";
  Message.textContent = Cmessage();
  random.textContent = GenerateNumber();
}, 3000);

function returnName(name) {
  return new Promise(function exec(resolve, reject) {
    setTimeout(() => {
      if (name) {
        resolve(`Hello ${name}`);
      } else {
        reject("Provide a name please !");
      }
    });
  });
}

returnName("Yann")
  .then((message) => console.log(message))
  .catch((err) => console.log(err));
// Hello Yann

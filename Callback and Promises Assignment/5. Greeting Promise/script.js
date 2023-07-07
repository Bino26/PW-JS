function returnName(name) {
  return new Promise(function exec(resolve, reject) {
    console.log(`Hello,${name}`);
    if ((name = "")) {
      reject("No name");
    } else {
      resolve("Done");
    }
  });
}
let p = returnName();

//statut of the promise
p.then(function exec(val) {
  console.log("Promise resolve with a value", val);
});

returnName("Yann");

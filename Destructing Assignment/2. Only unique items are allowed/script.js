function arraySet(...args) {
  let newarray = new Set(args);
  console.log(newarray);
}

arraySet(3, 4, 5, 4, 4, 4, 4, 4);

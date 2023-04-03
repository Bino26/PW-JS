function minMax(...args) {
  let arrays = [...args];
  let maxNum = Math.max(...arrays);
  let minNum = Math.min(...arrays);

  let minObject = {
    max: maxNum,
    min: minNum,
  };

  console.log(minObject);
}

minMax(78, 88, 90, 19);

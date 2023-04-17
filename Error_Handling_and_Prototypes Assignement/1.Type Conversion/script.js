const convertToNumber = (string) => {
  try {
    let convert = Number(string);

    if (Number.isNaN(convert)) {
      throw new Error("Invalid number");
    } else {
      console.log(convert);
    }
  } catch (error) {
    console.log(error.message);
  }
};

convertToNumber("123"); //Output:123
convertToNumber("abc"); // Output : Invalid Number

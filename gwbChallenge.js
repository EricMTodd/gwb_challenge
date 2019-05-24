modifyString = str => {
  // Remove vowels
  // Reverse string
  console.log(str);
  testCase = "aeiouAEIOU";
  let newString = "";

  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    for (let k = 0; k < testCase.length; k++) {
      if (str[i] === testCase[k]) {
        console.log("Match");
      }
    }
  }
};

modifyString("Hello World");
modifyString("foobar123");

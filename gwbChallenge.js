modifyString = str => {
  let newString = "";

  // Remove vowels
  newString = str.replace(/[aeiou]/gi, "");
  // Reverse string
  newString = newString
    .split("")
    .reverse()
    .join("");
  console.log(newString);
  return;
};

modifyString("Hello World");
modifyString("foobar123");

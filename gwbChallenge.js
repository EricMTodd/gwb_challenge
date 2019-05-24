modifyString = str => {
  // Remove vowels
  // Reverse string
  let newString = "";

  newString = str.replace(/[aeiou]/gi, "");
  newString = newString
    .split("")
    .reverse()
    .join("");
  console.log(newString);
  return;
};

modifyString("Hello World");
modifyString("foobar123");

function encoderFunc(inputString) {
  const arrayOne = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let letterIndex = 0;
  let newWord = "";
  for (let letter of inputString) {
    if (arrayOne.includes(letter)) {
      letterIndex = arrayOne.indexOf(letter);
      newWord += arrayOne[arrayOne.length - (letterIndex + 1)];
    } else {
      newWord += letter;
    }
  }
  return newWord;
}

function decoderFunc(encodedString) {
  const arrayOne = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let letterIndex = 0;
  let originalWord = "";
  for (let letter of encodedString) {
    if (arrayOne.includes(letter)) {
      letterIndex = arrayOne.indexOf(letter);
      originalWord += arrayOne[arrayOne.length - (letterIndex + 1)];
    } else {
      originalWord += letter;
    }
  }
  return originalWord;
}

const encodedString = encoderFunc("hello world");
console.log(encodedString);
console.log(decoderFunc(encodedString));

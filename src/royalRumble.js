const fs = require("fs");
const path = require("path");

// Function to get all input text files
export const getAllInputFiles = () => {
  return fs.readdirSync(__dirname).filter(fn => fn.match(/input[0-9]+\.txt/));
};

// Function to parse names from input file
export const getInputContents = fileName => {
  const fileContent = fs.readFileSync(path.join(__dirname, fileName), "utf8");
  // Using only \n works on my mac, but results in [firtName] [Ordinal]\r on my windows
  const names = fileContent.split("\r\n");
  // Filter any empty string in case the input files' last line is empty string (VSCode generated txt in this case)
  return names.filter(royalName => royalName != "");
};

// Function to write sort result to file
export const writeFileContents = (fileName, content) => {
  try {
    const data = fs.writeFileSync(path.join(__dirname, fileName), content);
  } catch (err) {
    console.error(err);
  }
};

// Function to parse roman ordinal to numeric value
const parseRomanValue = romanNumber => {
  if (romanNumber == "") {
    return 0;
  }
  // Set the map for roman ordinal to numeric value
  const romanLetter = new Map();
  romanLetter.set("I", 1);
  romanLetter.set("V", 5);
  romanLetter.set("X", 10);
  romanLetter.set("L", 50);

  // Split the string to each letters
  const letters = romanNumber.split("");
  let lastLetter = null;
  let totalValue = 0;
  let prevValue = 0;

  letters.forEach(letter => {
    let currentValue = romanLetter.get(letter);
    if (prevValue < currentValue && prevValue !== 0) {
      // Since we always add each letter's value, we need to revert the previous addition
      // if the previous value is lesser, except for the first run
      totalValue -= prevValue * 2;
    }
    totalValue += currentValue;
    lastLetter = letter;
    prevValue = currentValue;
  });
  // Return the string with padded zero for easier comparation
  return String(totalValue).padStart(2, "0");
};

// Main Function
export const getSortedList = romans => {
  const romanClass = romans.map(roman => {
    const originName = roman.split(" ");
    const romanValue = parseRomanValue(originName[1]);
    return {
      name: roman,
      value: `${originName[0]} ${romanValue}`
    };
  });
  return romanClass
    .sort((romanA, romanB) => {
      // Compare the roman by the firstName and numeric value of the ordinal
      if (romanA.value.toUpperCase() < romanB.value.toUpperCase()) {
        return -1;
      }
      if (romanA.value.toUpperCase() > romanB.value.toUpperCase()) {
        return 1;
      }
      return 0;
    })
    .map(roman => roman.name);
};

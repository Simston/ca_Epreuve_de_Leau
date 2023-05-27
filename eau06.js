const MyTools = require('./MyTools');
const mytools = new MyTools();

const capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Recover process.argv array
const argumentsArray = process.argv;
const dataUser = process.argv[2];
const dataUserLength = dataUser.length;

function capitalizeString(string){
    let capitalizedString = [];
  // Transform and save my string into an array in UPPERCASE
  for (let i = 0; i < dataUserLength; i++) {
    for (let y = 0; y < 26; y++) {
      if (string[i] == lowercaseLetters[y]) {
        capitalizedString[i] = capitalLetters[y];
      } else if (string[i] == capitalLetters[y]) {
        capitalizedString[i] = capitalLetters[y];
      }
    }
  }
  return capitalizedString;
}

function lowercaseEverySecondChar(string){
// Process to put a lowercase on every second letter
for (let i = 1; i < dataUserLength; i += 2) {
    for (let y = 0; y < 26; y++) {
      if (string[i] == capitalLetters[y]) {
        string[i] = lowercaseLetters[y];
      }
    }
  }
  return string;
}

// Part 1: Error Handling
const ArgsOk = mytools.checkArgumentCount(1, argumentsArray);
const StringOk = mytools.isStringValid(dataUser);
if(!StringOk || !ArgsOk){
    console.log("Veuillez entrer 1 chaîne de caractères, sans caractères spéciaux ni nombres.");
}

// Part 3: Resolution
let modifiedString = lowercaseEverySecondChar(capitalizeString(dataUser));

// Part 4: Display
if(StringOk && ArgsOk) console.log(modifiedString.join(''));


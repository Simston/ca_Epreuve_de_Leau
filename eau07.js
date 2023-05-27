const MyTools = require('./MyTools');
const mytools = new MyTools();

const capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Recover process.argv array
const argumentsArray = process.argv;
const dataUser = process.argv[2];

function lowerString(string){
    let lowerizedString = [];
  // Transform and save my string into an array in UPPERCASE
  for (let i = 0; i < dataUserLength; i++) {
    for (let y = 0; y < 26; y++) {
      if (string[i] == lowercaseLetters[y]) {
        lowerizedString[i] = lowercaseLetters[y];
      } else if (string[i] == capitalLetters[y]) {
        lowerizedString[i] = lowercaseLetters[y];
      }
    }
  }
  return lowerizedString;
}

// Part 1: Error Handling
const ArgsOk = mytools.checkArgumentCount(1, argumentsArray);
let StringOk;
let dataUserLength;
if(dataUser !== undefined){
 
  StringOk = mytools.isStringValid(dataUser);
  dataUserLength = dataUser.length;
} 
if(!ArgsOk){
  console.log("Veuillez entrer 1 chaîne de caractères.");
}else if(!StringOk){
    console.log("Pas de caractères spéciaux ni de nombres ici.");
}

// Part 3: Resolution
let modifiedString = lowerString(dataUser);
console.log(modifiedString)

// Part 4: Display
if(StringOk && ArgsOk) console.log(modifiedString.join(''));

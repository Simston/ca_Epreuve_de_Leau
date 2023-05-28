const MyTools = require('./MyTools');
const mytools = new MyTools();

const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";

// Recover process.argv array
const argumentsArray = process.argv;
const dataUser = process.argv[2];

function convertToLowercase(string) {
  let convertedString = "";

  for (let i = 0; i < string.length; i++) {
    let lowercaseFound = false;

    for (let y = 0; y < lowercaseLetters.length; y++) {
      if (string[i] === lowercaseLetters[y] || string[i] === capitalLetters[y]) {
        convertedString += lowercaseLetters[y];
        lowercaseFound = true;
        break;
      }
    }

    if (!lowercaseFound) {  
      convertedString += string[i];
    }
  }
  return convertedString;
}

function capitalizeFirstLetterOfWords(string){
    let wordIndices = [];
    // initialize the array with first place of a String
    wordIndices[0] = -1;
    // search spaces / lines return /
    for (let i=0; i < string.length; i++){
        if(string[i] === " "){
            wordIndices.push(i);
        }
    }
    
    for (let y=0; y < wordIndices.length; y++){
      let index = wordIndices[y];
      
      for(let l=0; l < lowercaseLetters.length; l++){
        if(string[index+1] === lowercaseLetters[l] ){     
        let modifiedValue = capitalLetters[l];   
        string = string.substring(0, index + 1) + modifiedValue + string.substring(index + 2);    
        }
      }
    }
    return string;
}

// Part 1: Error Handling
const ArgsOk = mytools.checkArgumentCount(1, argumentsArray);
let StringOk;
let dataUserLength;
if(dataUser !== undefined){
  StringOk = mytools.stringWithoutNumber(dataUser);
  dataUserLength = dataUser.length;
} 
if(!ArgsOk){
  console.log("Veuillez entrer 1 chaîne de caractères.");
}else if(!StringOk){
    console.log("Pas de nombres ici.");
}

// Part 2: Parsing
let lowString = convertToLowercase(dataUser);

// Part 3: Resolution
let finalResult = capitalizeFirstLetterOfWords(lowString);

// Part 4: Display
if(StringOk && ArgsOk) console.log(finalResult);

const MyTools = require('./MyTools');
const mytools = new MyTools();

// Recover process.argv array
const argumentsArray = process.argv;
const firstString = process.argv[2];
const secondString = process.argv[3];
let result = false;

function findStringInString(string1, string2){
    const lenghtOfFirstString = mytools.lengthOf(string1);
    const lenghtOfSecondString = mytools.lengthOf(string2);
    let sameString = [];
  
    for (let i=0; i <= lenghtOfFirstString - lenghtOfSecondString; i++) { 
      let found = true;

        for(let y=0; y < lenghtOfSecondString; y++){
            sameString[y] = string2[y]; 
            if (string1[i + y] !== string2[y]) {
                found = false;
                break;
            }
        }

        if (found) {
            result = true;
            break;
        }
    }
}

// Part 1: Error Handling
const argsOk =mytools.checkArgumentCount(2, argumentsArray);
if(!argsOk)  console.log("Veuillez entrer 2 chaînes de caractères.");

// Part 2: Parsing

// Part 3: Resolution
findStringInString(firstString, secondString);

// Part 4: Display
if(!result) console.log("False");
if(result) console.log("True");
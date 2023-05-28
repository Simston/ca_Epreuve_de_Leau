const MyTools = require('./MyTools');
const mytools = new MyTools();

// Recover process.argv array
const argumentsArray = process.argv;
let result = false;

function indexWanted(array){
    const referenceWanted = array[array.length-1];
    let newArray = [];
    let iWanted;

    for(let i=2; i < array.length-1; i++){
        newArray.push(array[i]);
        findStringInString(array[i], referenceWanted);
        if(result === true){
            iWanted = i - 2;
            return iWanted;

        }
    }
}

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

// Part : Error Handling
const argsOk = mytools.checkMinArgumentCount(2, argumentsArray);
if(!argsOk)  console.log("Veuillez entrer au minimum 2 chaînes de caractères.");

// Part : Resolution
let iWanted = indexWanted(argumentsArray);

// Part : Display
if(argsOk){
    if(!result) console.log("-1");
    if(result) console.log(iWanted);
}

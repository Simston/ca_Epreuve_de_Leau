const MyTools = require('./MyTools');
const mytools = new MyTools();

// Recover process.argv array
const argumentsArray = process.argv;
let verifyArguments = true;

//initialize an Array with all Ascii char
const asciiOrder = [];
for (let i = 0; i <= 127; i++) {
  asciiOrder.push(String.fromCharCode(i));
}

function byAsciiOrder(array){
    let indexesArray = [];
    let index = 0;

    //Search indexes from asciiOrder Array
    for(let i=0; i < array.length; i++){
        for(let c=0; c < asciiOrder.length; c++){
            let string = array[i];
            // Treatment on first char only
            if(string.length > 0 && string[0] === asciiOrder[c]){
                indexesArray[index] = c;
                index++;
            }
        }
    }

    // Bubble sort on array with indexeses of ASCII table
    for(let i=0; i < indexesArray.length; i++){
        for(let y=i+1; y < indexesArray.length; y++){
            if(indexesArray[i] > indexesArray[y]){
                let temp = indexesArray[i];
                indexesArray[i] = indexesArray[y];
                indexesArray[y] = temp;

                let tempString = array[i];
                array[i] = array[y];
                array[y] = tempString;
            }
        }   
    }

    let finalString = "";
    for (let i = 0; i < indexesArray.length;i++){
        finalString = finalString + " " + array[i];
    }
    
    return finalString;
}

function stockAndVerifyArguments(array){
    let arrayOfReferences = [];
    //Recover all references
    for(let i=2; i < array.length; i++){

        
        arrayOfReferences.push(array[i]);           
    }
    return arrayOfReferences;
}

// Part : Error Handling
const argsOk = mytools.checkMinArgumentCount(2, argumentsArray);
if(!argsOk)  console.log("Veuillez entrer au minimum 2 caractères.");

// Part : Resolution
let arrayOfIndexes = byAsciiOrder(stockAndVerifyArguments(argumentsArray));

// Part : Display
if(argsOk){
    if(!verifyArguments) console.log("Il semblerait qu'il y ait une erreur dans vos arguments.");
    if(verifyArguments) console.log(arrayOfIndexes);
}
const MyTools = require('./MyTools');
const mytools = new MyTools();

// Recover process.argv array
const argumentsArray = process.argv;
let verifyArguments = true;

function stockAndVerifyArguments(array){
    let arrayOfReferences = [];
    //Recover all references
    for(let i=2; i < array.length; i++){
        if(mytools.isStringCountainOnlyNumbers(array[i])){
            arrayOfReferences.push(array[i]);         
        }else{
            verifyArguments = false;
            break;
        }
    }
    return arrayOfReferences;
}

function myBubbleSort(array){
    for(let i=0; i < array.length; i++){
        for(let y= i+1; y < array.length; y++){
            if(array[i] > array[y]){
                let temp = array[i];
                array[i] = array[y]
                array[y] = temp;
            }
        }
    }
    return array;
}

// Part : Error Handling
const argsOk = mytools.checkMinArgumentCount(2, argumentsArray);

if(!argsOk)  console.log("Veuillez entrer au minimum 2 nombres.");

// Part : Resolution
let initialArray = stockAndVerifyArguments(argumentsArray);
let bubleArray = myBubbleSort(initialArray);

// Part : Display
if(argsOk){
    if(!verifyArguments) console.log("Il semblerait qu'il y ait une erreur dans vos arguments.");
    if(verifyArguments) console.log(bubleArray);
}
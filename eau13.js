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

function mySelectSort(array){
    let min;
    for(let i=0; i < array.length; i++){
        min=i;
        for(let y= i+1; y < array.length; y++){
            
            if(Math.abs(array[y]) < Math.abs(array[min])){
                min = y;      
            }  
        }    
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

// Part : Error Handling
const argsOk = mytools.checkMinArgumentCount(2, argumentsArray);

if(!argsOk)  console.log("Veuillez entrer au minimum 2 nombres.");

// Part : Resolution
let initialArray = stockAndVerifyArguments(argumentsArray);
let selSortArr = mySelectSort(initialArray);

// Part : Display
if(argsOk){
    if(!verifyArguments) console.log("Il semblerait qu'il y ait une erreur dans vos arguments.");
    if(verifyArguments) console.log(selSortArr);
}
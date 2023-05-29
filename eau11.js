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

function diffMinMaxAbsolute(array){
    let compare;
    let minAbsolute;
    //Initialize minAbsolute
    minAbsolute = array[0] - array[1];
    minAbsolute = Math.abs(minAbsolute);
    let ignore;

    for(let y=0; y < array.length-1; y++){ 
        for(let x= y+1; x < array.length; x++ ){
            compare = array[y] - array[x];
            compare = Math.abs(compare);
            if(compare < minAbsolute){
                minAbsolute = compare;
            }
        }    
    }
    return minAbsolute;
}

// Part : Error Handling
const argsOk = mytools.checkMinArgumentCount(2, argumentsArray);

if(!argsOk)  console.log("Veuillez entrer au minimum 2 nombres.");

// Part : Resolution
let finalArray = stockAndVerifyArguments(argumentsArray);
let finalResult = diffMinMaxAbsolute(finalArray);

// Part : Display
if(argsOk){
    if(!verifyArguments) console.log("Il semblerait qu'il y ait une erreur dans vos arguments");
    if(verifyArguments) console.log(finalResult);
}
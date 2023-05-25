const MyTools = require('./MyTools');
const mytools = new MyTools();

// Recover process.argv array
const argsArray = process.argv;

let dataUser = process.argv[2];
let resultPreviousIndex;
let result;
let error;

function inFibonacci(){

    let startOfFibonacci = [0,1];
    let index = 2;
    let count = 0;
    let end = false;
  
    while(! end ){

        startOfFibonacci[index] = startOfFibonacci[count] + startOfFibonacci[count+1];

        if(startOfFibonacci[index] > dataUser){
            result = "notInFibonacci";
            end = true;
        }else if(startOfFibonacci[index] == dataUser){ 
            resultPreviousIndex = startOfFibonacci[index -1];
            result = "inFibonacci";
            end = true;
        }  
        count += 1;
        index += 1;
    }
}

// Part 1: Error Handling
const argsOk = mytools.checkArgumentCount(1,argsArray);
if(!argsOk)  console.log("Veuillez entrer un seul argument.");


// Part 2: Parsing

// Part 3: Resolution
if(argsOk) inFibonacci();

// Part 4: Display
if(result === "inFibonacci") console.log(resultPreviousIndex);
if(result === "notInFibonacci") console.log(dataUser + " ne fait pas parti de la suite de Fibonacci");
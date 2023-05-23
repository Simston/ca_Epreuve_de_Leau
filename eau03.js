const MyTools = require('./MyTools');
const mytools = new MyTools();

// Recover process.argv array
var argumentsArray = process.argv;
var booleanVerif = mytools.checkArgumentCount(1,argumentsArray);

var resultPreviousIndex;
var result;
var error;

// if i have one Argument Only
if (booleanVerif) {

    var startOfFibonacci = [0,1];
    var index = 2;
    var count = 0;
    var dataUser = process.argv[2];
    var end = false;
  
    while(! end ){

        startOfFibonacci[index] = startOfFibonacci[count] + startOfFibonacci[count+1];

        if(startOfFibonacci[index] > dataUser){
            error = "notInFibonacci";
            end = true;
        }else if(startOfFibonacci[index] == dataUser){ 
            resultPreviousIndex = startOfFibonacci[index -1];
            result = "inFibonacci";
            end = true;
        }
       
        count += 1;
        index += 1;

    }

}else{
    error = "numbOfArguments";
}

// Part 1: Error Handling
if(error == "notInFibonacci") console.log(dataUser + " ne fait pas parti de la suite de Fibonacci");
if(error == "numbOfArguments")  console.log("Veuillez entrer 1 et un seul argument");

// Part 2: Parsing

// Part 3: Resolution

// Part 4: Display
if(result == "inFibonacci") console.log(resultPreviousIndex);
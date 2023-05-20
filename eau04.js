const MyTools = require('./MyTools');
const mytools = new MyTools();
// Prochain nombre premier

// Variables
// Recover process.argv array
var argumentsArray = process.argv;
var booleanVerif = mytools.verifyIfOneArgumentOnly(argumentsArray);
var error;
var finalResult;
var count = 0;
var modulo;
// Storage
var arrayPrimeNumber = [];
var index = 0;

// Functions

function isPrimeNumber(number){
    // We treat here the case of 0 and 1 which are not prime numbers
    if(number == 1 || number == 0) {

        error = "case1and0";
        
    }else{

     for(var i = 2; (number - 1) > i; i++) {
         
         modulo = number % i;

         // if there is a remainder between 2 and n -1 then the number is a composite number
         if(modulo == 0){
             finalResult = false;
             break;
         }else{
             finalResult = true;
         }          
     }
     
     if(finalResult === true) {

         arrayPrimeNumber[index] = number;
         index ++;
         count += 1;
         nextPrimeNumber(number);

     }
 }
}

function nextPrimeNumber(number){

 number = Number(number);
 number += 1;

 // for recover next Prime Number; variable count stop the loop
 while(count < 2){
     isPrimeNumber(number);
     number += 1;
 }
}

if(booleanVerif) {

    var number = process.argv[2];
    isPrimeNumber(number);
    
}else{
    error = "numbOfArguments";
}

// Part 1: Error Handling
if(error == "numbOfArguments")  console.log("Veuillez entrer 1 et un seul argument");
if(error == "case1and0")  console.log("Non, " + number + " n'est pas un nombre premier.");

// Part 2: Parsing

// Part 3: Resolution

// Part 4: Display
if(finalResult == true){
    console.log(arrayPrimeNumber[1]);
}else if(finalResult == false){
    nextPrimeNumber(number);
    console.log(number + " n'est pas un nombre premier le prochain nombre premier est " + arrayPrimeNumber[0]);
}




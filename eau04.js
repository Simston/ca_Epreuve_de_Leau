const MyTools = require('./MyTools');
const mytools = new MyTools();
// Prochain nombre premier

// Variables
// Recover process.argv array
let argumentsArray = process.argv;
const argsOk = mytools.checkArgumentCount(1, argumentsArray);
let number = process.argv[2];
let error;
let isPrime;
let primeCount = 0;

// Storage
let arrayPrimeNumber = [];
let index = 0;

// Functions

function checkPrimeNumber(number){
    let modulo;

    // We treat here the case of 0 and 1 which are not prime numbers
    if(number == 1 || number == 0) {
        error = "case1and0";
    }else{

     for(var i = 2; (number - 1) > i; i++) {
         modulo = number % i;

         // if there is a remainder between 2 and n -1 then the number is a composite number
         if(modulo == 0){
             isPrime = false;
             break;
         }else{
             isPrime = true;
         }          
     }
     
     if(isPrime === true) {
         arrayPrimeNumber[index] = number;
         index ++;
         primeCount += 1;
         nextPrimeNumber(number);
     }
 }
}

function nextPrimeNumber(number){

 number += 1;

 // for recover next Prime Number; variable count stop the loop
 while(primeCount < 2){
     checkPrimeNumber(number);
     number += 1;
 }
}

// Part 1: Error Handling
if(error == "case1and0")  console.log("Non, " + number + " n'est pas un nombre premier.");

// Part 2: Parsing
number = Number(number);

// Part 3: Resolution
argsOk ? checkPrimeNumber(number) : console.log("Veuillez entrer 1 et un seul argument");

// Part 4: Display
if(isPrime == true){
    console.log(arrayPrimeNumber[1]);
}else if(isPrime == false){
    nextPrimeNumber(number);
    console.log(number + " n'est pas un nombre premier le prochain nombre premier est " + arrayPrimeNumber[0]);
}




const MyTools = require('./MyTools');
const mytools = new MyTools();

// Recover process.argv array
const argumentsArray = process.argv;
const num01 = process.argv[2];
const num02 = process.argv[3];

function displayMinMax(num1, num2){
    let result = "";

    if(num2 < num1){
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    for(let i=num1; i < num2; i++){
        result = result + " " + num1 + " ";
        num1 ++;
    }
    return result;
}

// Part 1: Error Handling
const ArgsOk = mytools.checkArgumentCount(2, argumentsArray);
let StringOk;
let String2Ok;

if(num01 !== undefined && num02 !== undefined){
  StringOk = mytools.isStringCountainOnlyNumbers(num01);
  String2Ok =  mytools.isStringCountainOnlyNumbers(num02);
} 
if(!ArgsOk){
  console.log("Veuillez entrer 2 nombres");
}else if(!StringOk){
    console.log(false);
}else if(!String2Ok){
    console.log(false);
}

// Part : Resolution
let suiteDisplay = displayMinMax(num01,num02);

// Part: Display
if(StringOk && ArgsOk) console.log(suiteDisplay);
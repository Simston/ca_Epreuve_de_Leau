const MyTools = require('./MyTools');
const mytools = new MyTools();

// Recover process.argv array
const argumentsArray = process.argv;
const dataUser = process.argv[2];

// Part 1: Error Handling
const ArgsOk = mytools.checkArgumentCount(1, argumentsArray);
let StringOk;
let dataUserLength;
if(dataUser !== undefined){
  StringOk = mytools.isStringValid(dataUser);
  dataUserLength = dataUser.length;
} 
if(!ArgsOk){
  console.log("Veuillez entrer 1 chaîne de caractères.");
}else if(!StringOk){
    console.log(false);
}

// Part 2: Parsing

// Part 3: Resolution

// Part 4: Display
if(StringOk && ArgsOk) console.log(true);
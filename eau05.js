const MyTools = require('./MyTools');
const mytools = new MyTools();

// Variables
// Recover process.argv array
var argumentsArray = process.argv;
var booleanVerif = mytools.checkArgumentCount(2, argumentsArray);
var error = "";
var result = false;

if(booleanVerif){

    var arg1 = process.argv[2];
    var arg2 = process.argv[3];
    var lenghtArg1 = mytools.lengthOf(arg1);
    var lenghtArg2 = mytools.lengthOf(arg2);
    var sameString = [];
  
    for (var i = 0; i <= lenghtArg1 - lenghtArg2; i++) {
       
      var found = true;

        for(var y = 0; y < lenghtArg2; y++){
         
            sameString[y] = arg2[y];

            if (arg1[i + y] !== arg2[y]) {
                
                found = false;
                break;
            }
        }
        
        if (found) {
            result = true;
            break;
        }
    }

}else{
    error = "numbOfArguments";
}

// Part 1: Error Handling
if(error == "numbOfArguments")  console.log("Veuillez entrer 2 chaînes de caractères.");

// Part 2: Parsing

// Part 3: Resolution

// Part 4: Display
if(!result) console.log("False");
if(result) console.log("True");



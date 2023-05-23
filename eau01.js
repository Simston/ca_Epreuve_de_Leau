const MyTools = require('./MyTools');
const mytools = new MyTools();

// Recover process.argv array
const arg = process.argv;
let arrayOfresults = [];

// Combinaisons de 2 nombres
function generateFourDigitCombinations(){

    let index = 0;
    //first Loop
    for (var i=0; i < 10;i++){
        for (var y=0; y < 10; y++){
            //second Loop
            for(var x=0; x < 10; x++){
                for(var z=0; z < 10; z++){
                    arrayOfresults[index] = i + "" + y + " " + x + "" + z;
                    index++;
                }
            }
        }
    }
}


// Part 1: Error Handling 
const argsOk = mytools.checkArgumentCount(0, arg);
if (argsOk === false) console.log("Nous n'attendons pas d'arguments ici.");

// Part 2: Parsing

// Part 3: Resolution 
if (argsOk) generateFourDigitCombinations();

// Part 4: Display 
console.log(arrayOfresults.toString());

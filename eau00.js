const MyTools = require('./MyTools');
const mytools = new MyTools();

// Recover process.argv array
const arg = process.argv;
let arrayOfCombinaison = [];

// Combinaisons de 3 chiffres
    function threeDigitCombos(){

        let index = 0;

        for(var i=0; i < 10; i++){
            //j=i+1 for to avoid repetition
            for(var j=i+1; j < 10 ; j++){
                // same for x
                for(var x=j+1; x < 10; x++) {
                    // 3 digit comparaison
                    if(i !== j && i !== x && j !== x){
                        arrayOfCombinaison[index] = i + "" + j + "" + x;
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

// Part 3: Resolution # Appel de la ou des fonctions principales qui résolvent mon souci
if (argsOk) threeDigitCombos();

// Part 4: Display 
console.log(arrayOfCombinaison.toString());
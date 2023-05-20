const MyTools = require('./MyTools');
const mytools = new MyTools();

// Recover process.argv array
var argumentsArray = process.argv;

// if Argument one exist
if ( argumentsArray[2] != undefined) {

    //Count the number of Args passed in the command user's, and then iterate over the process array
    var countArgs = mytools.lengthOf(argumentsArray);
    //The 2 first lines are ignored because it's path it's not about arguments
    var initPosition = 2;

    var stockOfArgs = [];
    var index = 0;

    for (var i = countArgs; i > 2; i--) {

        stockOfArgs[index] = argumentsArray[initPosition];
        index++;
        //console.log(argumentsArray[initPosition]);
        initPosition++;
        
    }
}else{
    console.log("Veuillez entrer au moins 1 arguments");
}

// Affichage du résultat
var lenghtOfresultArray = mytools.lengthOf(stockOfArgs);

// We go through the table upside down
for(var i=lenghtOfresultArray -1; i >= 0; i--){

    console.log(stockOfArgs[i]);

}
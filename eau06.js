const MyTools = require('./MyTools');
const mytools = new MyTools();

// Variables
const arrCapital =  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const arrLower =    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Recover process.argv array
var argumentsArray = process.argv;
var booleanVerif = mytools.checkArgumentCount(1, argumentsArray);
var error = "";
var finalString = [];

var dataUser = process.argv[2];

function verifyString(string){

    const arrNumbAndSpeChar =   ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~',0,1,2,3,4,5,6,7,8,9];

    var lengthOfarrNumbAndSpeChar = mytools.lengthOf(arrNumbAndSpeChar);
    var lengthOfString = mytools.lengthOf(string);

    console.log(lengthOfarrNumbAndSpeChar);

    for(var i = 0; i < lengthOfString; i++ ) {

        for(var y = 0;y < lengthOfarrNumbAndSpeChar; y++) {

            if(string[i] == arrNumbAndSpeChar[y]){
                return false;
            }
        }
       
    }

    return true;
}


if(booleanVerif && verifyString(dataUser) ){

    
     var lenghtOfDataUser = mytools.lengthOf(dataUser);


    // Transform and save my string into an array in UPPERCASE
    for (var i = 0; i < lenghtOfDataUser ; i ++){
        
        for(var y = 0; y < 26; y++){

            if(dataUser[i] == arrLower[y]){
            
                finalString[i] = arrCapital[y]
               
            }else if(dataUser[i] == arrCapital[y]) {
                finalString[i] = arrCapital[y];
                
            }
        }      
    }

    // Processing to put a lowercase on 2
    for (var i = 1; i < lenghtOfDataUser; i += 2){
        
        for(var y = 0; y < 26; y++){
            
            if(finalString[i] == arrCapital[y]) {
                
                finalString[i] = arrLower[y];
            }  
            
         
        }      
    }

    

}else{
    error = "numbOfArguments";
}

// Part 1: Error Handling
if(error == "numbOfArguments")  console.log("Veuillez entrer 2 chaînes de caractères.");
if(error == "wrongData") console.log("Error");

// Part 2: Parsing
var result = finalString.join('');

// Part 3: Resolution

// Part 4: Display
if(!error) console.log(result);

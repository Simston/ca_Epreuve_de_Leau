const MyTools = require('./MyTools');
const mytools = new MyTools();

// Recover process.argv array
var arg = process.argv;
var booleanVerif = mytools.verify0ArgumentOnly(arg);

// Combinaisons de 3 chiffres
if(booleanVerif){

    for(var i=0; i < 10; i++){
   
        //j=i+1 for to avoid repetition
        for(var j=i+1; j < 10 ; j++){
    
            // same for x
            for(var x=j+1; x < 10; x++) {
    
                // 3 digit comparaison
                if(i !== j && i !== x && j !== x){
                    
                    console.log(i + "" + j + "" + x);
    
                } 
            }   
        }
    }

}else{
    console.log("Nous n'attendons pas d'arguments ici")
}


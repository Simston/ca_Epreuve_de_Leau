const MyTools = require('./MyTools');
const mytools = new MyTools();

// Recover process.argv array
var arg = process.argv;
var booleanVerif = mytools.checkArgumentCount(0, arg);

// COmbinaisons de 2 nombres
var arrayOfresults = [];
var index = 0;

if(booleanVerif) {

    for (var i=0; i < 10;i++){

        for (var y=0; y < 10; y++){
    
             arrayOfresults[index] = i + "" + y;
             index++;
    
        }
    }
}else{
    console.log("Nous n'attendons pas d'arguments ici");
}

console.log(arrayOfresults);
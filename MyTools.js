class MyTools {

    verifyNumberOfArgument(arg){
        var countArgs = this.lengthOf(arg);
        if (countArgs < 4) {
            return false;
        } else {
            return true;
        }
    }

    // Checking the return of process.argv // in this case 0 for true
    verify0ArgumentOnly(arg){
        var countArgs = this.lengthOf(arg);
        if (countArgs > 2) {
            return false;
        } else {
            return true;
        }
    }

    // Checking the return of process.argv // in this case 0 for true
    verifyIfOneArgumentOnly(arg){   
        var countArgs = this.lengthOf(arg);
        if (countArgs > 3 || countArgs < 3) {
            return false;
        } else {
            return true;
        }
    }


    lengthOf(data) {
        var count = 0;
        for (var i = 0; data[i] !== undefined; i++) {
            count++;
        }
        return count;
    }
}

// Export de la classe pour une utilisation externe   
module.exports = MyTools;  










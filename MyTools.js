class MyTools {

    /**
     * Checks the number of expected arguments.
     * @param {number} expectedCountNumber - The expected number of arguments (integer).
     * @param {any[]} args - Arguments to check.
     * @returns {boolean} - Returns true if the number of arguments matches, otherwise false.
     */

    checkArgumentCount(expectedCountNumber, args){

        let ignoreInArray = 2;
        let countArgs = args.length - ignoreInArray;

        return expectedCountNumber === countArgs;
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










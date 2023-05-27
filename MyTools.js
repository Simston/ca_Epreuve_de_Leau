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

    /**
     * Checks if the character string does not contain numbers and special characters.
     * @param {string} string - The string to check.
     * @returns {boolean} - Returns true if the character string does not contain special characters and numbers.
     */
    isStringValid(string) {
        const specialCharsAndNumbers = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      
        var specialCharsAndNumbersLength = specialCharsAndNumbers.length;
        var stringLength = string.length;
      
        for (var i = 0; i < stringLength; i++) {
          for (var y = 0; y < specialCharsAndNumbersLength; y++) {
            if (string[i] === specialCharsAndNumbers[y]) {
              return false;
            }
          }
        }
      
        return true;
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










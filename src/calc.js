/**
 * Main file for the calculator
 * 
 * @author Jared Martinez
 * @version 9/25/2019
 */



// Dependencies
const readline = require('readline');
const operations = require('./operations.js');

// Interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/**
 * Function for getting a user input
 * 
 * @param { string } message
 * 
 * @return { promise } 
 */
const getValue = (message) => {
    return new Promise( (resolve, reject) => {
        rl.question(message, (input) => resolve(input));
    });
}; 

/**
 * Function for displaying the welcome message
 * 
 * @return { void }
 */
const welcomeMessage = () => {
    // Welcome message
    const welcomeMessage = `
Calc.js

Welcome to the Node.js Calculator app!
Version: 1.0.0

Usage: The user will be prompted for two numbers
then ask to select their operation of choice.
    `;
    console.log(welcomeMessage);
}

/**
 * Function for getting the numbers from a user
 * 
 * @return { Array }
 */
const getNumbers = async () => {
    // Number one
    const numOne = await getValue('Enter the first number: ');
    // Number two
    const numTwo = await getValue('Enter the second number: ');

    return [numOne, numTwo];
}

/**
 * Function for getting the calculation option
 * 
 * @return { String }
 */
const getOption = async () => {
    // Getting option
    const option = await getValue(`
Please select from the following options: 

Addition
Subtraction
Multiplication
Division

Enter your choice: `);
    return option;
}


/**
 * Function for calculating the two numbers
 * 
 * @param { integer } numOne 
 * @param { integer } numTwo 
 * @param { String } choice
 * 
 * @return { String | boolean } 
 */
const calculate = (numOne, numTwo, choice) => {
    // Variables
    let operationWord;
    let result;
    
    switch(choice) {
        case 'addition':
            operationWord = 'sum';
            result = operations.add(numOne, numTwo);
            break;
        case 'subtraction':
            operationWord = 'difference';
            result = operations.subtract(numOne, numTwo);
            break;
        case 'multiplication':
            operationWord = 'product';
            result = operations.multiply(numOne, numTwo);
            break;
        case 'division':
            operationWord = 'quotient';
            result = operations.divide(numOne, numTwo);
            break;
        default:
            console.log('Not a valid option.');
    }
        
    if(result){
        return `The ${operationWord} of ${numOne} and ${numTwo} is ${result}`;
    }
    return false;
}

/**
 * Function for showing the results of the calculation
 * 
 * @param { array } nums 
 * @param { string } option 
 * 
 * @return { void }
 */
const showResult = (nums, option) => {
    // Variables
    const numOne = nums[0];
    const numTwo = nums[1];
    const choice = option.toLowerCase();

    if(!(numOne && numTwo) || !operations.validateNumbers(numOne, numTwo)) {
        console.log('Only numbers are allowed, please try again.');
        getInfo();
        return;
    }

    // Getting the results of the calculation
    const message = calculate(numOne, numTwo, choice);

    // Success!
    if(message) {
        console.log(message);
        rl.close();
        return;
    }
    // Retrying
    getInfo();
}

/**
 * Function for getting the user information and then calling the showResults function
 * 
 * @return { void }
 */
const getInfo = async () => {
    // Getting new numbers
    const nums = await getNumbers(rl);
    // Getting new option
    const option = await getOption(rl);

    showResult(nums, option, rl);
}

/**
 * Main function 
 * 
 * @return { void }
 */
const main = async () => {
    // Outputting welcome message
    welcomeMessage();

    // Getting the information from the user
    getInfo();
}
main();
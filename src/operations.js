/**
 * File for handling the calculations
 * 
 * @author Jared Martinez
 * @version 9/25/2019 
 */

/**
 * Function for addition
 * 
 * @param { integer } numOne
 * @param { integer } numTwo
 * 
 * @return { number }
 */
const add = (numOne, numTwo) => +numOne + +numTwo;

/**
 * Function for subtraction
 * 
 * @param { integer } numOne
 * @param { integer } numTwo
 * 
 * @return { integer }
 */
const subtract = (numOne, numTwo) => +numOne - +numTwo;

/**
 * Function for multiplication
 * 
 * @param { integer } numOne
 * @param { integer } numTwo 
 * 
 * @return { integer }
 */
const multiply = (numOne, numTwo) => +numOne * +numTwo;

/**
 * Function for division
 * 
 * @param { integer } numOne 
 * @param { integer } numTwo 
 * 
 * @return { integer }
 */
const divide = (numOne, numTwo) => +numOne / +numTwo;

/**
 * Function for validating the user inputs
 * 
 * @param { integer } numOne 
 * @param { integer } numTwo 
 * 
 * @return { boolean }
 */
const validateNumbers = (numOne, numTwo) => !(isNaN(numOne) || isNaN(numTwo));

// Exporting operations
module.exports = {
    add,
    subtract, 
    multiply, 
    divide,
    validateNumbers
}
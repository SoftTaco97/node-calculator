/**
 * Testing file
 * 
 * @author Jared Martinez
 * @version 09/26/2019
 */

// Dependencies
const assert = require('assert');
const operations = require('../src/operations.js');

// Begin Tests
describe('Unit Tests', () => {

    // Addition tests
    describe('Addition tests - operations.add', () => {

        it('correctly calculates the sum of 1 and 3', () => {
            assert.equal(operations.add(1, 3), 4);
        });

        it('correctly calculates the sum of -1 and -1', () => {
            assert.equal(operations.add(-1,-1), -2);
        });

    });

    // Subtraction tests
    describe('Subtraction tests- operations.subtract', () => {

        it('correctly calculates the difference of 33 and 3', () => {
            assert.equal(operations.subtract(33, 3), 30);
        });
    
        it('correctly calculates the difference of -1 and -1', () => {
            assert.equal(operations.subtract(-1, -1), 0);
        });

    });

    // Multiplication tests
    describe('Multiplication tests - operations.multiply', () => {
        it('correctly calculates the product of 12 and 12', () => {
            assert.equal(operations.multiply(12, 12), 144);
        });
        
        it('correctly calculates the product of -10 and 2', () => {
            assert.equal(operations.multiply(-10, 2), -20);
        });
    });
    
    // Division
    describe('Division Tests - operations.divide', () => {
        it('correctly calculates the quotient of 10 and 2', () => {
            assert.equal(operations.divide(10, 2), 5);  
        });
        
        it('correctly calculates the quotient of -20 and 5', () => {
            assert.equal(operations.divide(-20, 5), -4);
        });
    });

    // Input validation
    describe('Validation tests - operations.validateNumbers', () => {

        it('indicates failure when a string is used instead of a number', () => {
            assert.equal(operations.validateNumbers('sammy', 5), false);
        });
        
        it('indicates failure when two strings is used instead of numbers', () => {
            assert.equal(operations.validateNumbers('sammy', 'sammy'), false);
        });
        
        it('successfully runs when two numbers are used', () => {
            assert.equal(operations.validateNumbers(5, 5), true);
        });

    });
});
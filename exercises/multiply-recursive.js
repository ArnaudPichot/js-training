'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops, do it using recursion
 *
 * @notions Primitive and Operators, Functions, Recursion
 */


// Your code :
function multiply(num1, num2){
    var resultSign = (num1 < 0) ?  
                     (num2 > 0) ? -1 : 1 
                     :          
                     (num2 < 0) ? -1 : 1;
  
    num1 = volvAbs(num1);
    num2 = volvAbs(num2);
  
    function doMult(num1, num2) {
      if (num2 === 0) return 0; 
      return num1 + doMult(num1, num2 - 1);
    }
  
    return (resultSign === 1) ? doMult(num1, num2) : -doMult(num1, num2);
}
function volvAbs(num1) { 
    return (num1 < 0) ? -num1 : num1;
  }
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */

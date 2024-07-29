// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).



// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.


///                     ANSWER HERE     


const createDecementCounter = (n) => {
    let counter = n;
    return function () {
        return counter--;
    }
}

// const counter = createDecementCounter(10)
// console.log(counter());
// console.log(counter());
// console.log(counter());

const createStepCounter = (start, step) => {
    // start = 3
    // step = 2
    let counter = start
    return function () {
        let val = counter
        counter += step
        return val
    }

}
const run = createStepCounter(3, 3)
// console.log(run());
// console.log(run());
// console.log(run());















// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".


// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.
// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".
// Example 3:

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.



//                              Answer



var expect = function (val) {
    let ans = val
    return {
        toBe: function (expected) {
            if (expected === ans) {
                return true;
            } else return ("Not Equal")
        },
        notToBe: function (expected) {
            if (expected !== ans) {
                return true;
            } else return ("Equal")
        }


    }


};

console.log(expect(34).toBe(3));
console.log(expect(3).toBe(3));
console.log(expect(null).toBe(3));
console.log(expect(null).toBe(null));
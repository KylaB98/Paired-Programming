/* EASY (1) 
Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even 
numbers. */

function splitOddAndEven(numbers) {
    let odd = [];
    let even = [];

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        even.push(numbers[i]);
      } else {
        odd.push(numbers[i]);
      }
    }

    const returnObject = {
      odd,
      even,
    };

    return returnObject;
  }
console.log(splitOddAndEven([1, 2, 3, 4, 5]));
console.log(splitOddAndEven([0, 3, 5, 9, 10]));
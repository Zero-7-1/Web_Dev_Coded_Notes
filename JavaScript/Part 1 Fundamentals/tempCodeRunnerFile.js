const multiplier = {
  factor: 3
};

const numbers3 = [1, 2, 3];
// Use map() with thisArg to multiply each number by the factor
const multiplied = numbers3.map(function(num) {
  return num * this.factor;
}, multiplier); // passing `multiplier` as thisArg
console.log(multiplied); 
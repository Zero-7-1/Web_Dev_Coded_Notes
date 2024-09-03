
const person = { name2: 'Alice', age: 25, job: 'Engineer' };
const { name2, ...rest2 } = person;

console.log(name2); // Output: 'Alice'
console.log(rest2); // Output: { age: 25, job: 'Engineer' }
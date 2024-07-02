const ehh = {
  "firstName":"ABC",
  "lastName":"XYZ"
};
const nameKey = "Name";  // ignoring first and last here 
console.log(ehh['first' + nameKey]); // evaluates to firstName through concatnation 
console.log(ehh['last' + nameKey]);  // evaluates to lastName through concatnation 
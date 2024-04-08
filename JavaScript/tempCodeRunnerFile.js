const binaryString = "1010"; // 10 in binary. 
const octString = "12"; // 10 in ocatl 
const hexString ="A"; // 10 in hexadecimal 
let parsedBinary = parseInt(binaryString, 2); // Parse as binary
let parsedOctal = parseInt(octString, 8);   // Parse as octal
let parsedHex = parseInt(hexString, 16);    // Parse as hexadecimal
console.log(parsedBinary); 
console.log(parsedOctal);  
console.log(parsedHex); 
console.log(typeof(parsedHex));
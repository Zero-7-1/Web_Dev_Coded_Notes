
function cutFruit(fruit){
    return fruit * 8; // say fruit is cut into 8 pieces 
}; 
function jucieMaker(apple, orange) {
    const applePiece = cutFruit(apple); // calling cutFruit()
    const OrangePiece = cutFruit(orange); // calling function in another function 
    const jucie = `Jucie with ${applePiece} apple pieces and 
                   ${OrangePiece} oranges pieces`;
    return jucie;
};
 
myJuice = jucieMaker(1,3);
console.log(myJuice); // returns say juice with no of fruits pieces  
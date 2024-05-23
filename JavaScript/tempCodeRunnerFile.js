// Functions calling another function 

function cutFruit(fruit){
    return fruit * 8; // say fruit is cut into 8 pieces before jucie

}

function jucieMaker(apple, orange) {
    const applePiece = cutFruit(apple);
    const OrangePiece = cutFruit(orange);
    const jucie = `Jucie with ${applePiece} apple pieces and 
                   ${OrangePiece} oranges pieces`;
    return jucie;
}

myJuice = jucieMaker(1,3);
console.log(myJuice); // return say juice with no of fruits pieces 
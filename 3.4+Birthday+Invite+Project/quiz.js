//var maxChars = 140;
//var sentence = "bola is a girlie";
//var count = sentence.length;


//console.log(sentence.length);
//sentence = sentence.slice(2,8);
//console.log(sentence);
//console.log(sentence.toUpperCase())
//sentence=sentence.charAt(0).toUpperCase() + sentence.slice(1,sentence.length);
//console.log(sentence);

//How many bottles of milk can my robot buy if a bottle is £1.50
function getMilk(amount){
    costOfABottle = 1.5;
    numberOfBottles = Math.floor(amount/costOfABottle);
console.log("You can buy "+ numberOfBottles + " bottles of milk")
}

getMilk(8);

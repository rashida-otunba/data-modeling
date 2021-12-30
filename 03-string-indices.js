//Strings are indexed; each character has a corresponding index (a positional number) starting from left to right; these can allow you to copy portions of a string into a new variable 
//Example= "chicken" has seven index points starting at 0 [0,1,2,3,4,5,6]

//length: property that returns the nubmber of index points in a string; NOTE: the spaces are also counted 

let lengthPractice= "hello".length // returns the number 5 because "hello" contains 5 index placements

console.log(lengthPractice);

let lengthPractice2= "hello   ".length // returns the number 8 because "hello   " contains 8 index placements with the spaces included 

console.log(lengthPractice2);


let mySong="Surfin' USA"; // this will return 11 because there is a quote and a space in addition to the characters 

console.log(mySong.length);

//Indices can be used to access individial charaters; square brackets are used to acccess the character index number 

console.log(mySong[0]);// will return the letter "S" for "Surfin" index 0

//length-1 will return the last character in the string 
console.log(mySong.length-1); // will return the last number value of the index; in this case it is 10 
console.log(mySong[mySong.length-1]); // will return the actual name of the character ; in this case it is "A" in USA

//NOTE: in JS string are immutable; meaning that you cannot change the value of one character in a string; for example if you wanted to change the "s" to "d", it will not allow you to do that



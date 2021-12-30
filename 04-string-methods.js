//String Methods: strings come with a set of built in methods, which are actions that can be performed on or with that particular string 
// string methods allow you to: 
// - search within a string 
// - replace parts of a string 
// - change the case of a string (ex: uppercase to lowercase )
//format: thing.method()


//toUppercase

// let msg='you are so grounded, mr';

// let msg2= msg.toUpperCase(); // this will make the entire string uppercase 
// console.log(msg2);

//trim : removes any leading or trailing blank spaces; this will not remove all spaces only the spaces at the end 

// let trimPractice='   its ok if it has space '; 
// let trimPractice2= trimPractice.trim();

// console.log(trimPractice2);

// //you can add additional functions to trim 

// let trimAddition= trimPractice.trim().toUpperCase();
// console.log(trimAddition);

//MORE STRING METHODS 
// some string methods accept arguments that modify their behavior. these arguments are passed inside of the parenthesis; Ex: search or replace; what are you replacing / searching 
//Format: thing.method(arg)


//EX 1: IndexOf

// let tvShow='catdog';
// let tvShowLog= tvShow.indexOf('cat'); 
// console.log(tvShowLog);// will return 0; cat is at the index of 0; it is not looking for c it is looking for cat 

// let morePractice = 'catdog'.indexOf('dog');
// console.log(morePractice);//this will return 3 as 'dog' starts at index 3 in the string 

//anytime you call indexOf with a value that cannot be found, it will return -1; this is the same as undefined 

// let undefinedIndex='catdog'.indexOf('ball');
// console.log(undefinedIndex); //this will return -1 as the value 

//Ex 2: Slice; this takes slices of a string and returns part of it 

// let str= "superfragical";
// let str2=str.slice(0,5);;
// console.log(str2); //super, s starts at 0, ends at r which ends at 4; the 5th index is not available 

// // if you only enter one value then it will start at that value and return the rest of the items in the string 

// let oneValue=str.slice(3);
// console.log(oneValue); //returns 'erfragical' since e is at index 3 

// if you have data that follows a pattern and you are trying to use a certain portion of it, then use slice 

// let numPractice = '$50.60';
// let numPractice2=numPractice.slice(1);
// console.log(numPractice2);

//Ex: 3 Replace; allows you to specify what you want to replace and what you want to replace it with 

// let replacePractice="i am a sample string";
// let replacePractice2=replacePractice.replace('string','thing'); //you take the first argument as what is being replaced and the second argument is what is replacing 
// console.log(replacePractice2);

// let anotherReplaceExample='ha,hee,hee'.replace('ha', 'hee');
// console.log(anotherReplaceExample);//this will replace the first word 'ha' with hee 

//54
//i
//undefined
//all uppercase //not saved to any new value 
//all lowercase and no leading space
//6//WRONG-- case matters when calling an index 
//7
//RBAGE!
//RAGE!
//Math Object: contains properties and methods for mathematical constants and functions 
//starts with uppercase 'M'

// Math.floor(4.9) //will return 4; does NOT round 

// Math.round(4.9) // will return 5; does round 

// Math.pow(7,2) //returns 49; raises 7 to the second power 

// //Math.random() : this is used to generate random decimal numbers 

// Math.random();

//Math.random is used as the base starting point to make a random whole number 

//random integer: generate random number between 1-10

//example: make a random whole number 

const step1 = Math.random(); //will generate the first decimal number 

const step2 = step1 * 10; //will generate a whole number with the decimals trailing between 1-10

const step3=Math.floor(step2); //will return the main integer prior to the decimal 

const step4 =step3+1;
//this will make the 10 whole integer eventually be included since the *10 in step 2 will not 


console.log(step4);


//you can also simplify this by doing it all in one line 

step5=Math.floor(Math.random()*10+1);
console.log(step5);

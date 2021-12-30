//String Template Literals: strings that allow embedded expeessions, which will be evaluated then turned into a resulting string 
//used to embed information 
//allows you to add in expressions and other variables to a string and return one string 
//backtick key is always to be used `` NOT single quotes ''
//cannot be used in IE 
//${}: this will make whatever is inside of it be evaluated first 

// let username ='Ziggy31';
// let username2=`Welcome back, ${username}` 

// console.log(username2); // will return --> Welcome back, Ziggy31

// let username3=`GAME OVER, ${username.toUpperCase()}`; // will return ---> GAME OVER, ZIGGY31
// console.log(username3);

//ex 2: Template Literal Practice 2 

let item='cucumbers';
let price = '1.99';
let quantity =4;

let wholeBasket= `You bought ${quantity} ${item}, total price $${price*quantity} `;
//the first dollar sign will be used to make the natural dollar sign in the string; it is not related to the bracket item 
console.log(wholeBasket);




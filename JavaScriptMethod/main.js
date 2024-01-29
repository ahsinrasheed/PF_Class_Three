let arry = [1,2,3,4,5];

//original Arry
console.log("original Array =>", arry);

// adding New Element
arry.push(6);
console.log("add new element =>", arry);

// removing first Element
arry.shift();
console.log('Removing first Element=>', arry)


// reversing the Array
arry.reverse();
console.log('reverse the Array=>', arry)

//Join the array elements into a string with a comma as the separator.

let joiningArray = arry.join(",")
console.log('joining the Array=>', joiningArray)
console.log('Type of joining the Array=>', typeof(joiningArray))


//Use the map function to create a new array (squaredNumbers) containing the square of each number in the numbers array.
let squaredNumbers=arry.map((num)=>{
    return num*num;
});

console.log("Squared array",squaredNumbers);

// String Method

let message  = 'Hello World!';

let newMessage = message.substring(0,5);

console.log('Substring to Hello=>',newMessage);

let UpperCaseMessage = message.toUpperCase();
console.log("String to Uppercase=>",UpperCaseMessage);


//Check if the string contains the word "World" (case-insensitive)
let searchString = 'world';
const containsWord = message.toLowerCase().includes(searchString.toLowerCase());

console.log('Check string contains the word "World" =>' ,containsWord);

// Replace Name with world!
let replaceMessage = message.replace('World','Ahsin');

console.log('Replace Name with world=>',replaceMessage);


// Create new Array from Message    
let createArray = Array.from(message).map((m)=>{
    
    return m;
});

console.log(createArray);


//Calculate the square root of 25.

const number = 25;
const squareRoot = Math.sqrt(number);

console.log(squareRoot);


// Generate a random number between 1 and 10 (inclusive).
let min =1;
let max =10;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

// Round 3.14159 to the nearest integer.
let  numRound = 3.14159;

const  newRound = Math.round(numRound);
console.log(newRound);

// Create two sets with three unique elements each
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

console.log("Set 1:", set1);
console.log("Set 2:", set2);

// Calculate the union of set1 and set2
const unionSet = new Set([...set1, ...set2]);
console.log("Union of Set 1 and Set 2:", unionSet);

// Check if set1 is a subset of set2
const isSubset = [...set1].every(element => set2.has(element));
console.log("Is Set 1 a subset of Set 2:", isSubset);

// Remove an element from set2
set2.delete(4);
console.log("Set 2 after removing element 4:", set2);

// Convert set1 to an array
const arrayFromSet1 = [...set1];    
console.log("Array from Set 1:", arrayFromSet1);

// Createa a new array and double each Element
let originalArray = [5, 10, 15];

const doubledArray = originalArray.map((num)=>{
    return num * 2;
})
console.log(doubledArray);

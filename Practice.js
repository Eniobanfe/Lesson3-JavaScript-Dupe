/* 
 A farmer has a farm located at Epe in Lagos. The farm is 2000sqm in length an 3000sqm in width. He has 50 chickens, 10 goats, and 2 fish ponds.

 1. Determine the Area of the farm in square
 2. Output the address of the farm including the town.
 3. Create an Object that models the farm.

 Tips: 
 1. Use appropiate variables
 2. Model the farm using an Object and output it to console.

 let obj = {
    prop1: value1,
    prop2: value2
 }

 4. Output a story using the farm object properties
*/

let farmArea;
let farmLength = 2000;
let farmWidth = 3000;

farmArea = farmLength * farmWidth;
console.log(farmArea + "sqm");

let streetAddress = "4, farmland land";
let city = "Epe";
let state = "Lagos";

let address = streetAddress + " " + city + " " + state + ".";

console.log(address);

let farm = {
	lengthOfFarm: farmLength,
	widthOfFarm: farmWidth,
	numOfChickens: 50,
	numOfGoats: 10,
	numOfFishPonds: 2,
	addressOfFarm: address,
};

console.log(farm);

let story =
	"A farmer has a farm located at " +
	farm.addressOfFarm +
	" The farm is " +
	farm.lengthOfFarm +
	"sqm in length and " +
	farm.widthOfFarm +
	"sqm in width. He has " +
	farm.numOfChickens +
	" chickens, " +
	farm.numOfGoats +
	" goats, and " +
	farm.numOfFishPonds +
	" fish ponds.";

console.log(story);

/* 
Constructing Strings with varaibles

The Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.

Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
*/

let numOfChildren = 4;
let partnersName = "Funke";
let myLocation = "Lagos Nigeria";
let jobTitle = "Software Developer";

let output = "";

output =
	"You will be a " +
	jobTitle +
	" in " +
	myLocation +
	", and married to " +
	partnersName +
	" with " +
	numOfChildren +
	" kids.";

console.log(output);
/* 
	Arithmetic Operators 
	1. Plus Operator +
	2. Subtraction Operator -
	3. Multiplication Operator *
	4. Division Operator /
	5. Remainder Operator %
	6. Addition Compound Assignment Operator +=
	7. Subtraction Compound Assignment Operator -=
	8. Multiplication Compound Assignment Operator *=
	9. Division Compound Assignment Operator /=
*/

/* Basic mathematical operators */
console.log(45 + 2); // 47
console.log(45 - 2); // 43
console.log(45 / 5); // 9
console.log(45 * 2); // 90
console.log(45 / 0); // Infinity
console.log(5 % 2); // 1

/* Compound Assignment operators */
let a = 3;
let b = 15;
let c = 12;

// Add 10 to each of the variables
a = a + 10;
b = b + 10;
c = c + 10;
console.log(a, b, c);
a += 10;
b += 10;
c += 10;
console.log(a, b, c);
/* 
	Excercise 1 
	Use the Subtraction, Multiplication and Division 
	Compound Assignment Operators to add, subtract and divide each variable by 5
*/

a -= 5;
b -= 5;
c -= 5;

console.log(a, b, c);
a *= 5;
b *= 5;
c *= 5;

console.log(a, b, c);
a /= 5;
b /= 5;
c /= 5;

console.log(a, b, c);

/* Concatenating strings with the Plus Equals operator += */

let ourString = "This is a House with ";
let description = " blue gate, with white painting and brown roof";
let owner = " owned by Babajide";

output = "";

output += ourString;
output += description;
output += owner + ".";

console.log(output);

/* Note 
Everything in JavaScript is an object, and every object has properties and methods. Therefore to find the length of a string for example we use the 'length' property of the string*/

let lengthOfStr = output.length;
console.log(lengthOfStr); //-> 86 includes the spaces in between.

/* Find the Nth chracter of a string using the bracket notation

Note
Generally JavaScript indexes start at 0 NOT 1. What this implies is that counting starts from zero(0). Therefore to access the first letter of a string we would use the index zero(0). 
*/

let firstCharacterOfStr = output[0];
console.log("The first character is " + firstCharacterOfStr + " at index 0");
console.log("The first character is " + "Hello World"[0] + " at index 0");

/* Excercise 2
Extract the 3rd character of the string "Lorem Ipsum Envato Redismuc Satos" */

console.log(
	"The third character is " +
		"Lorem Ipsum Envato Redismuc Satos"[2] +
		" at index 2"
);

console.log(
	"The eight character is " +
		"Lorem Ipsum Envato Redismuc Satos"[7] +
		" at index 7"
);

/* Find the last character of a string using the bracket notation */
ourString = "Lorem Ipsum Envato Redismuc Satos";
console.log(ourString[ourString.length - 1]); //-> s

ourString = "Ibe";
/* Example Usage using a 'while loop' */
let endOfString = ourString.length - 1;
let i = 0;
while (i <= endOfString) {
	// Do something
	console.log(ourString[i]);
	i++;
}

/* Exercise 3
	Word Blanks.

	Fill in the blanks

	It was really ____, and we ____ ourselves ____

	Build this sentence using concatenation and the plus or Plus Equals operator.
	
	Find the value of the eight character
  
	Dynamically add a full stop to the end of the string.

*/

/* Arrays */
/* 
An Array can be described as a contiguous collection of values.*/

/*Store Multiple Values - You store multiple values in one variable using an array
 */

let burger = ["beef", "butter", "cucumber", "bread"];
console.log(burger);

/* Nesting Arrays - You can store sub-arrays within an array also called Multi-dimensional array*/
const favTeamsAndPositionInLeague = [
	["ManU", 1],
	["Chelsea", 2],
	["ManCity", 3],
];

console.log(favTeamsAndPositionInLeague);

const prayingCountriesAndPercentageOfPopulation = [
	["Afganistan", 96],
	["Nigeria", 95],
];
console.log(prayingCountriesAndPercentageOfPopulation);

/* Access & Modify Array Data - We can modify and access array data using indexes. Arrays are indexed starting at Zero. The last element of an array is indexed at the length of the array minus one.
 */

/* Access Array Data - Array data values can be accessed using their index*/
// Get the first data element of the burger
const firstValue = burger[0];
console.log(firstValue);

// Get the last data element of an Array
const lastValue = burger[burger.length - 1];
console.log(lastValue);

// Get Third value of the array
const thirdValue = burger[2];
console.log(thirdValue);

/* Modify Array data - Array data values can be modified using their index
 */
// Example - Lets say we wanted a fish burger rather than a beef burger
burger[0] = "fish";
console.log(burger);

/* Exercise 1 
	Modify the favTeamsAndPositionInLeague array such that the position of the "Chelsea Team is 4" and log the array to console.
*/

favTeamsAndPositionInLeague[1][1] = 4;
console.log(favTeamsAndPositionInLeague);

favTeamsAndPositionInLeague[2][0] = "Arsenal";
console.log(favTeamsAndPositionInLeague);

/* 
	Basic Array Manipulating - You can manipulate arrays using special array methods such push(), pop(), shift(), unshift()
*/
/* Push() - An easy way to append data to the end of an array is by using the push(). The push method takes one or more arguments and appends them to the end of the array, in order that they appear. It returns the length of the array*/

const arr1 = [1, 2, 3];
arr1.push(4, 5);
console.log(arr1);

/* Pop() is another way to change the data in an array. It is used to pop a value off of the end of an array. The popped off value can then be stored in a variable. So we can pop() removes the LAST element from an array and returns that element*/

const arrOfThree = [1, 3, 5];
const removedOne = arrOfThree.pop();
console.log(removedOne); //-> 5
console.log(arrOfThree); //-> [1, 3]

/* shift() - The shift() removes the first element of an array. Similar to the pop() method but removes the first element of the array*/
const ourArray = ["Ibe", "and", "Dupe", "are", "in", "class"];
// what's the name of the first student to leave the class, who is left in class?
const leavesTheClass = ourArray.shift();
console.log(leavesTheClass); //- 'Ibe'
console.log(ourArray);

/* unshift() - Adds values to the beginning  of an array. It works exactly push() but appends values to the beginning of the array*/
const returnedToClass = ourArray.unshift("Ibe");
console.log(ourArray);

/* 
	Exercise 
	Create a shopping list in the variable "shoppingList". 
	1) The list should be a multi-dimensional array containing several sub-arrays. 
	2) The first element in each sub-array should contain a string with the name of the item, the second element should be a number representing quantity.
	3) The shopping list should contain at least five sub-arrays
	4) Remove the last item in your shopping list that wasn't in the shop and replace it with this item that was available in the shop ["Chocolate", 5];
	5) The shopping list should contain 5 items
*/

let shoppingList = [
	["Icecream", 2],
	["Bread", 4],
	["Milk", 3],
	["Butter", 1],
	["Mayonese", 1],
];
console.log(shoppingList);
let notFoundInShop = shoppingList.pop();
console.log(notFoundInShop);
console.log(shoppingList);
shoppingList.push(["Chocolate", 5]);
console.log(shoppingList);

/* 
	Reusable Functions 
	- Allow you to divide up your code into reusable parts called functions.
	You declare a function using the "function" keyword, followed by the name of the function, parenthesis and curly braces
	Example
*/
function functionName() {
	console.log("Hello World");
}

console.log(functionName);

/* For the function to work you have to call or invoke the function using its name followed by parenthesis */

functionName();

/* All the code between the curly braces will be executed every time the function is called
 */
functionName();
functionName();

/* Exercise 
	1. Create a function which prints out the string "Hi Babajide" to the dev console.
	2. Call the function twice.
*/
function greet() {
	console.log("Hi Babajide");
}

greet();
greet();

/* 
Function Arguments 
- Functions can accept parameters. These Parameters are variables that act as placeholders for the values that are to be inputs to a function.
- When a function is defined, it is usually defined along with Parameters.
- The actual values that are input("passed") into the function when it is called or invoked are know as arguments.
*/

function testFn(param1, param2) {
	console.log(param1, param2);
}

testFn("Hello", "World");

/* 
	Exercise 
	1. Create a function called fnWithArgs. 
	2. The function should accept two arguments.
	3. It should output the sum of the arguments to console.
	4. Call or invoke the function with two numbers as arguments 
*/

function fnWithArgs(num1, num2) {
	console.log(num1 + num2);
}

fnWithArgs(2, 3);
fnWithArgs(12, 13);

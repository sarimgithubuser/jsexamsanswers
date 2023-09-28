alert("chapter 1");

alert("Q1");
alert("First Name");
alert("Last Name");
alert("Email");
alert("Phone Number");
alert("Password");

alert("Q2");
alert("You're learning JavaScript!");

alert("Q3");
alert("Hello, world!");

alert("chapter 2");

alert("Q1");
var myVariableName;

alert("Q2");
var myVariable;  // Declaration
myVariable = "This is a string"; // Assignment

alert("Q3");
var teamName = "My Team";
alert(teamName);

alert("Q4");
var bestMan = "Charlie";
bestMan = "New Best Man"; // Assign a new string

alert("chapter 3");

alert("Q1");
var caseQty;

alert("Q2");
caseQty = 144;

alert("Q3");
var num = 9; // No quotes around 9

alert("Q4");
var sum = 5 + 3; // Declare and assign the sum of 5 and 3

alert("Q5");
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;

alert("Q6");
var myNumber = 7; // Declare and assign a number
myNumber = myNumber + 3; // Change the value by adding 3

alert("chapter 4");

alert("Q1");
var productCost = 3.45; // Corrected variable name

alert("Q2");
var nameOfBand;

alert("Q3");
var myNumber = 42;

alert("Q4");
var myFullName = "sarim hussain";

alert("Q5");
// Legal Variable Names
var myVariable;
var myVar123;
var camelCaseExample;

// Illegal Variable Names
// var 123myVar; // Cannot start with a number
// var my-Var;   // Cannot use hyphens
// var my Var;   // Cannot have spaces

alert("chapter 5");

alert("Q1");
alert("The name of the arithmetic operator that gives you the remainder when one number is divided by another is the 'Modulus' operator, and its symbol is '%'.");

alert("Q2");
var num = 20 % 6;
// The result of 20 % 6 is 2, so num will be 2.

alert("Q3");
var largeNum = 1000 * 2000;

alert("Q4");
var result = variable1 - variable2;

alert("Q5");
var remainder = dividend % divisor;

alert("Q6");
alert(num1 * num2);

alert("chapter 6");

alert("Q1");
// Using the increment operator (++)
x++;

// Using the addition assignment operator (+=)
x += 1;

alert("Q2");
x--;

alert("Q3");
var x = 50;
var y = x++;

alert("Q4");
var y = 50;
var z = --y;

alert("Q5");
var newNum = num--;

alert("Q6");
var variable1 = 5; // Example value
var variable2 = variable1++; // variable2 will be assigned the original value of variable1 (5), and then variable1 will be incremented to 6.

alert("Q7");
var count = 10; // Example value
count++; // Increment the variable
alert(count); // Display the new value in an alert

alert("chapter 7");

alert("Q1");
var calculatedNum = 2 + (2 * 6);

// The value of calculatedNum is 14.

alert("Q2");
var calculatedNum = (2 + 2) * 6;

// The value of calculatedNum is 24.

alert("Q3");
var calculatedNum = (2 + 2) * (4 + 2);

// The value of calculatedNum is 24.

alert("Q4");
var calculatedNum = ((2 + 2) * 4) + 2;

// The value of calculatedNum is 18.

alert("Q5");
// Statement: var cost = (2 + 2) * (4 + 10);

// The value of cost is 56.

alert("Q6");
// Statement: var units = 2 + (2 * (4 + 10));

// The value of units is 20.

alert("Q7");
// Statement: var pressure = (4 / 2) * 4;

// The value of pressure is 8.

alert("chapter 8");

alert("Q1");
var num = "2" + "2";

// The value of num is "22" (a string).

alert("Q2");
var message = "Hello," + "Dolly";

// The value of message is "Hello,Dolly" (a string).

alert("Q3");
alert("33" + 3);

// The message displayed in the alert box is "333" (a string).

alert("Q4");
alert("Pakistan" + " " + "Zindabad");

alert("Q5");
var result = "Value: " + 42;

alert("Q6");
var str1 = "Hello";
var str2 = " World";
var str3 = str1 + str2;

alert("chapter 9");

alert("Q1");
var firstName = prompt("Enter your first name:");

alert("Q2");
var country = prompt("Country?", "China");

alert("Q3");
var yourName = prompt("Enter your name:");

alert("Q5");
var userInput = prompt("Please enter your message:", "Default Message");

alert("Q6");
var message = "Enter your message:";
var defaultResponse = "Default text";
var userResponse = prompt(message, defaultResponse);

alert("Q7");
var message = "Enter your message:";
var defaultResponse = "Default text";
var userResponse = prompt(message, defaultResponse);
alert("User's response: " + userResponse);

alert("chapter 10");

alert("Q1");
var city = "Karachi";
if (city === "Karachi") {
  console.log("The City OF Lights");
}

alert("Q2");
if (x === y) {
  var z = prompt("Enter the value of z?");
}

alert("Q3");
if (ZipCode === "10010") {
  alert("Karachi");
} else {
  alert("Please write the correct city");
}

alert("Q4");
if (x === 1) {
  x = 42; // Assigning a new value to x if x is equal to 1
}

alert("chapter 11")

alert("Q1")
if (variable1 !== variable2) {
  // Your code here
}

alert("Q2")
if (variable1 >= variable2) {
  // Your code here
}


alert("Q3")
if (variable !== 42) {
  variable = 42; // Assigning a new value to variable if it's not equal to 42
}

alert("Q4")
if (number !== 7) {
  alert("Congratulations!");
}

alert("chapter 12")

alert("Q1")
if (variable1 >= variable2) {
  alert("Variable1 is greater than or equal to Variable2");
} else {
  alert("Variable1 is less than Variable2");
}

alert("Q2")
var marks = parseInt(prompt("Enter your marks:"));
var percentage = (marks / 100) * 100; // Assuming 100 is the maximum marks
var grade;

if (percentage >= 90) {
  grade = "A+";
} else if (percentage >= 80) {
  grade = "A";
} else if (percentage >= 70) {
  grade = "B";
} else if (percentage >= 60) {
  grade = "C";
} else {
  grade = "F";
}

alert("Your percentage is " + percentage.toFixed(2) + "%, and your grade is " + grade);

alert("Q3")
if (a === 10) {
  alert("a is 10");
}

alert("Q4")
var city = prompt("Enter a city:");

if (city === "Karachi") {
  alert("It is Karachi.");
} else if (city === "Lahore") {
  alert("It is Lahore.");
} else {
  alert("It is neither Karachi nor Lahore.");
}

alert("chapter 13")

alert("Q1")
if (a === b && c === d) {
  // Your code here
}

alert("Q2")
if (a === b || c !== d) {
  // Your code here
}

alert("Q3")
if ((name === "Hamza" || name === "Arsalan") && age < 60) {
  // Your code here
}

alert("Q4")
var num1 = 5;
var num2 = 10;

if (num1 < num2 || num1 > num2) {
  alert("The condition is met.");
}

alert("Q5")
var firstName = "YourFirstName"; // Replace with your first name
var lastName = "YourLastName"; // Replace with your last name

var userFirstName = prompt("Enter your first name:");
var userLastName = prompt("Enter your last name:");

if (userFirstName === firstName && userLastName === lastName) {
  alert("Names match!");
}

alert("chapter 14")

alert("Q1")
if (password !== "") {
  if (password.length <= 5) {
    alert("Password must be greater than 5 characters.");
  } else {
    alert("OK");
  }
}

alert("Q2")
if (a === 1) {
  if (c === "Max") {
    alert("OK");
  }
}

alert("Q3")
if (a === 1 && c === "Max") {
  alert("OK");
}

alert("Q4")
var num1 = 5;
var num2 = 10;

if (num1 === num2 && num1 <= num2) {
  alert("Both conditions are met.");
}

alert("chapter 15")

alert("Q1")
var emptyArray = [];


alert("Q2")
var stringArray = ["Hello"];

alert("Q3")
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]); // This will display "j"


alert("Q4")
var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var arrayLength = alphabet.length;

alert("Q5")
var myArray = ["Element 1"];
myArray[1] = "Element 2";
alert(myArray[1]); // This will display "Element 2"


alert("chapter 16")


alert("Q1")
var myArray = ["Element 1"];
myArray.push("Element 2");
alert(myArray[myArray.length - 1]); // This will display "Element 2"

alert("Q2")
var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop(); // Removes the last element

alert("Q3")
var myArray = ["Element 1"];
myArray.push(42); // Adds a new element (number 42) to the end

alert("Q4")
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L"); // Inserts "L" at index 2

alert("Q5")
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3); // Copies the first 3 sizes

alert("Q6")
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "element1", "element2"); // Adds 2 elements after "dog" and removes 3 elements

alert("Q7")
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2); // Removes "cat" and "ox"

alert("Q8")
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
pets = pets.slice(3, 5); // Reduces it to "duck" and "frog"


alert("chapter 17-20")

alert("Q1")
for (var i = 0; i < 10; i++) {
  // Your code here
}

alert("Q2")
for (var i = 0; i <= 12; i++) {
  // Your code here
}

alert("Q3")
for (var i = 0; i <= 4; i++) {
  // Your code here
}

alert("Q4")
for (var j = 0; j < 100; j++) {
  // Your code here
}

alert("Q5")
for (var i = 3; i > 0; i--) {
  // Your code here
}

alert("Q6")
var array = [1, 2, 3, 4, 5];
var numElements = array.length;

alert("Q7")
var flag = true; // or false, depending on your choice

alert("Q8")
for (var i = 0; i < pets.length; i++) {
  // Your code here
}

alert("Q9")
for (var i = 0; i < 10; i++) {
  if (i === 1) {
    alert(i);
    break;
  }
}

alert("Q10")
var userNames = ["Alice", "Bob", "Charlie"]; // Replace with your list of user names
var userInput = prompt("Enter first name:");

for (var i = 0; i < userNames.length; i++) {
  if (userInput === userNames[i]) {
    alert("Match found: Enter");
    break;
  }
}

if (i === userNames.length) {
  alert("Please write a correct user name");
}

alert("Q11")
var matchFound = false;
for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}

if (!matchFound) {
  alert("Match not found");
}

alert("Q12")
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
  for (var j = 0; j < secondArr.length; j++) {
    console.log(firstArr[i] + secondArr[j]);
  }
}

a1
a2
a3
a4
a5
a6
b1
b2
b3
b4
b5
b6
c1
c2
c3
c4
c5
c6
d1
d2
d3
d4
d5
d6
e1
e2
e3
e4
e5
e6
f1
f2
f3
f4
f5
f6

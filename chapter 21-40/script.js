 ("chapter 21")

alert("Q1")
var allLower = userInput.toLowerCase();

alert("Q2")
x = x.toLowerCase();

alert("Q3")
y = y.toUpperCase();

alert("Q4")
var originalString = "Some Text";
var lowerCaseString = originalString.toLowerCase();

alert("Q5")
var myArray = ["Apple", "Banana", "Cherry"];
var lowerCaseItem = myArray[2].toLowerCase();

alert("Q6")
var myString = "Hello, World!";
alert(myString.toUpperCase());

alert("Q7")
var cityName = "kaRacHi";
cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();


alert("chapter 22-25")

alert("Q1")
var sameWords = "captain";
var slicedPart = sameWords.slice(1, 3);

alert("Q2")
var numCharacters = str.length;

alert("Q3")
var animal = "elephant";
var seg = animal.slice(1, 5);

alert("Q4")
var numCharacters = myString.length;

alert("Q5")
var numCharacters = myString.length;
var slicedPart = myString.slice(1, numCharacters - 3);

alert("Q6")
var text = "To be or not to be.";
var indx = text.indexOf("be");
// The value of indx is 3.

alert("Q7")
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
// The value of indx is 16.

alert("Q8")
var indx = text.lastIndexOf("go");

alert("Q9")
if (str.indexOf(segment, indexNum) !== -1) {
    // Segment exists in the string.
  }

  alert("Q10")
  var charAtIndex2 = str.charAt(2); // charAtIndex2 is "c".

  alert("Q11")
  var cha = text.charAt(9);

  alert("Q12")
  var x = str.charAt(str.length - 1);

  alert("Q13")
  var cha = input.charAt(4);

  alert("Q14")
if (str.charAt(2) === 'X') {
    // The 3rd character is 'X'.
  }
  
  alert("Q15")
  var charArray = [];
for (var i = 0; i < str.length; i++) {
  charArray.push(str.charAt(i));
}

alert("Q16")
var revisedReply = reply.replace("no", "yes");

alert("Q17")
var y = x.replace(/a/g, "z");


alert("chapter 26")

alert("Q1")
var roundedNumber = Math.round(num);

alert("Q2")
var roundNum = Math.ceil(origNum);

alert("Q3")
var roundNum = Math.floor(origNum);

alert("Q4")
var num = 3.7;
var roundedNum = Math.round(num);

alert("Q5")
var roundedValue = Math.round(0.5);

alert("chapter 27")

alert("Q1")
var randomNumber = Math.floor(Math.random() * 50) + 1;

alert("Q2")
var randomValue = Math.random();

alert("Q3")
var diceRoll = Math.floor(Math.random() * 6) + 1;


alert("Q4")
var coinToss = Math.random() < 0.5 ? "Heads" : "Tails";

alert("chapter 28,29")

alert("Q1")
var num = parseInt(string);

alert("Q2")
var integerNumber = parseInt("123");

alert("Q3")
var floatNumber = parseFloat("3.14");

alert("Q4")
var str = "123";
if (!isNaN(parseFloat(str)) && isFinite(str)) {
  // The string can be converted to a number.
  var num = parseFloat(str);
} else {
  // Conversion is not possible.
}

alert("Q5")
var str = num.toString();

alert("Q6")
function numberToString() {
    var num = 42;
    var str = num.toString();
    return str;
  }
  
alert("Q7")
var decimalStr = "3.14";
var integerNum = parseInt(decimalStr); // integerNum will be 3.


alert("chapter 30")

alert("Q1")
var newNum = num.toFixed(4);

alert("Q2")
var numString = num.toFixed(2);
num = parseFloat(numString);

alert("Q3")
if (num.toFixed(2).length > 4) {
    // Code for condition
  }
  
alert("Q4")
var num = 3.14159265358979323846;
var roundedStr = num.toFixed(2);
alert(roundedStr);

alert("chapter 31-34")

alert("Q1")
var dObj = new Date();

alert("Q2")
var d = new Date();
var dStr = d.toString();

alert("Q3")
var day = d.getDay();

alert("Q4")
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
alert(dayNames[day]);

alert("Q5")
var currentDate = new Date();

alert("Q6")
var later = new Date(2020, 11, 31);

alert("Q7")
var specialDate = new Date(1992, 1, 2);

alert("Q8")
var referenceDate = new Date(1980, 0, 1); // January is month 0
var millisecondsElapsed = currentDate - referenceDate;
alert(millisecondsElapsed);

alert("Q9")
var d = new Date();
d.setFullYear(2023);

alert("Q10")
function changeMonthToJanuary(date) {
    date.setMonth(0); // January is month 0
    return date;
  }
  
alert("Q11")
function changeMinutesToSpecificValue(date, newMinutes) {
    date.setMinutes(newMinutes);
    return date;
  }
  
alert("Q12")
function addHoursToTime(date, hoursToAdd) {
    date.setHours(date.getHours() + hoursToAdd);
    return date;
  }
  
alert("Q13")
function calculateAge(birthDate) {
    var currentDate = new Date();
    var birthYear = birthDate.getFullYear();
    var currentYear = currentDate.getFullYear();
    var age = currentYear - birthYear;
    return age;
  }
  

alert("chapter 35-37")

alert("Q1")
function displayAlert() {}

alert("Q2")
function askName() {
    var userName = prompt("Enter name");
    return userName;
  }
  
alert("Q3")
function callOtherFunctions() {
    function1();
    function2();
  }
  
alert("Q4")
function promptAndAlertName() {
    var name = prompt("Enter name");
    alert("You entered: " + name);
  }
  
alert("Q5")
function concat(a, b, c) {}

alert("Q6")
function concatenateStrings(str1, str2) {
    var result = str1 + str2;
    return result;
  }
  
alert("Q7")
function multiplyNumbers(a, b, c) {
    var result = a * b * c;
    return result;
  }
  
alert("Q8")
function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    var average = sum / numbers.length;
    return average;
  }
  
alert("Q9")
function add(a, b) {
    return a + b;
  }
  
alert("Q10")
var result = myFunction();

alert("Q11")
function countCharacterOccurrences(word, character) {
    var count = 0;
    for (var i = 0; i < word.length; i++) {
      if (word.charAt(i) === character) {
        count++;
      }
    }
    return count;
  }
  
alert("Q12")
function setYearInDate(date, year) {
    date.setFullYear(year);
    return date;
  }
  
alert("Q13")
function calculateAgeFromDateOfBirth(dateOfBirth) {
    var currentDate = new Date();
    var birthDate = new Date(dateOfBirth);
    var ageInMilliseconds = currentDate - birthDate;
    var ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(ageInYears);
  }
  
alert("Q14")
function checkWordInArray(word, array) {
    return array.includes(word);
  }
  
alert("Q15")
function repeatLetter(letter) {
    return letter.repeat(10);
  }
  
alert("Q16")
function reverseArray(array) {
    return array.reverse();
  }
  
  alert("chapter 38")

  alert("Q1")
  function demonstrateLocalVariable() {
    var localVar = "This is a local variable.";
    // localVar is a local variable.
  }
  
  alert("Q2")
  var globalVar = "This is a global variable.";

function accessGlobalVariable() {
  console.log(globalVar); // Access globalVar inside the function.
}

alert("chapter 39-40")

alert("Q1")
var option = "A";

switch (option) {
  case "A":
    // Code for option A
    break;
  case "B":
    // Code for option B
    break;
  default:
    // Default code
}

alert("Q2")
var cityName = prompt("Enter a city name");

switch (cityName) {
  case "Karachi":
    alert("Karachi is the selected city.");
    break;
  default:
    alert("City not recognized.");
}

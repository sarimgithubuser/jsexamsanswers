alert("Chapter 41, 42 ")

alert("Q1")
//Using a while loop:
var i = 0;
while (i < 2) {
  // Code that does nothing
  i++;
}

//Using a do...while loop:
var i = 0;
do {
  // Code that does nothing
  i++;
} while (i < 2);

alert("Q2")
//Using a while loop:
var animals = ["horse", "ox", "cow", "pig", "duck"];
var i = 0;
while (i < animals.length) {
  if (animals[i] === "pig") {
    alert("Found it!");
    break;
  }
  i++;
}

//Using a do...while loop:
var animals = ["horse", "ox", "cow", "pig", "duck"];
var i = 0;
do {
  if (animals[i] === "pig") {
    alert("Found it!");
    break;
  }
  i++;
} while (i < animals.length);

alert("Q3")
//Using a while loop:
var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//Using a do...while loop:
var i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

alert("Q4")
//Using a while loop:

var userInput;
while (true) {
  userInput = prompt("Enter a number:");
  if (userInput === null) {
    break; // Exit the loop if user cancels
  }
  console.log("You entered: " + userInput);
}


alert("Q5")
//Using a while loop:

var userInput;
while (true) {
  userInput = prompt("Enter a number:");
  if (userInput === null) {
    break; // Exit the loop if user cancels
  }
  var number = parseInt(userInput);
  if (!isNaN(number)) {
    if (number % 2 === 0) {
      console.log(number + " is even.");
    } else {
      console.log(number + " is odd.");
    }
  } else {
    console.log("Invalid input. Please enter a number.");
  }
}


alert("Q6")
//Using a while loop:
var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;
var guess;

while (guess !== randomNumber) {
  guess = parseInt(prompt("Guess the number between 1 and 100:"));
  attempts++;

  if (isNaN(guess)) {
    console.log("Please enter a valid number.");
  } else if (guess < randomNumber) {
    console.log("Too low! Try again.");
  } else if (guess > randomNumber) {
    console.log("Too high! Try again.");
  }
}

console.log("Congratulations! You guessed the number " + randomNumber + " in " + attempts + " attempts.");

//Using a do...while loop:
var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;
var guess;

do {
  guess = parseInt(prompt("Guess the number between 1 and 100:"));
  attempts++;

  if (isNaN(guess)) {
    console.log("Please enter a valid number.");
  } else if (guess < randomNumber) {
    console.log("Too low! Try again.");
  } else if (guess > randomNumber) {
    console.log("Too high! Try again.");
  }
} while (guess !== randomNumber);

console.log("Congratulations! You guessed the number " + randomNumber + " in " + attempts + " attempts.");

alert("Q7")
var seconds = 10;

// Using a while loop
while (seconds >= 0) {
  console.log("Timer: " + seconds);
  seconds--;
}

// Using a do...while loop
do {
  console.log("Timer: " + seconds);
  seconds--;
} while (seconds >= 0);


alert("chapter 46-48")


alert("Q1")
var myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
  console.log("Button clicked!");
});

alert("Q2")
var hideButton = document.getElementById("hideButton");
var content = document.getElementById("content");

hideButton.addEventListener("click", function() {
  content.style.display = "none";
});

alert("Q3")

alert("Q4")
var scrollToTop = document.getElementById("scrollToTop");

scrollToTop.addEventListener("click", function() {
  window.scrollTo(0, 0);
});

alert("Q5")
var playSound = document.getElementById("playSound");
var myAudio = document.getElementById("myAudio");

playSound.addEventListener("click", function() {
  myAudio.play();
});

alert("Q6")

alert("Q7")
var alertButton = document.getElementById("alertButton");

alertButton.addEventListener("click", function() {
  alert("Button clicked!");
});

alert("Q8")

alert("Q9")
var playSoundButton = document.getElementById("playSoundButton");
var myAudio = document.getElementById("myAudio");

playSoundButton.addEventListener("click", function() {
  myAudio.play();
});

alert("Q10")
var myElement = document.getElementById("myElement");

myElement.addEventListener("mouseover", function() {
  alert("Mouse over element!");
});

alert("Q11")
var myElement = document.getElementById("myElement");

myElement.addEventListener("mouseout", function() {
  myElement.style.display = "none";
});

alert("Q12")
var openNewWindow = document.getElementById("openNewWindow");

openNewWindow.addEventListener("click", function() {
  var mouseX = event.clientX;
  var mouseY = event.clientY;
  var newWindow = window.open("", "MyWindow", "width=" + mouseX + ", height=" + mouseY);
  newWindow.document.write("<h1>New Window</h1>");
  newWindow.document.write("<button id='closeButton'>Close Window</button>");

  var closeButton = newWindow.document.getElementById("closeButton");
  closeButton.addEventListener("click", function() {
    newWindow.close();
  });
});


alert("Chapter 49, 50")

alert("Q1")
function readInputValue() {
  var userInput = document.getElementById("userInput").value;
  console.log("Input value: " + userInput);
}


alert("Q2")
function readCheckboxValue() {
  var isChecked = document.getElementById("myCheckbox").checked;
  console.log("Checkbox is checked: " + isChecked);
}


alert("Q3")
function readSelectValue() {
  var selectedValue = document.getElementById("mySelect").value;
  console.log("Selected value: " + selectedValue);
}


alert("Q4")
function setTextInField() {
  var textField = document.getElementById("textField");
  textField.value = "Some text goes here";
}


alert("Q5")
var married = false; // You can change this variable based on user input

function setStatus() {
  var statusField = document.getElementById("status");
  if (!married) {
    statusField.value = "available";
  }
}


alert("Q6")
function fillEmptyInput() {
  var emptyInput = document.getElementById("emptyInput");
  if (emptyInput.value === "") {
    emptyInput.value = "Default Value";
  }
}


alert("Q7")
function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var errorMessage = document.getElementById("errorMessage");

  if (username === "" || password === "" || confirmPassword === "") {
    errorMessage.innerHTML = "All fields are required.";
  } else if (password !== confirmPassword) {
    errorMessage.innerHTML = "Passwords do not match.";
  } else {
    errorMessage.innerHTML = ""; // Clear error message
    alert("Registration successful!");
    // Add code to submit the form or perform further actions
  }
}



alert("chapter 51")


alert("Q1")
function expandParagraph() {
  var paragraph = document.getElementById("expandableParagraph");
  paragraph.style.whiteSpace = "normal";
}

alert("Q2")
function searchText() {
  var paragraphText = document.getElementById("searchParagraph").textContent;
  var searchTerm = "sample"; // Change this to the word or phrase you want to search for
  if (paragraphText.includes(searchTerm)) {
    alert("Found: " + searchTerm);
  } else {
    alert("Not found: " + searchTerm);
  }
}

alert("Q3")
function findLongestWord() {
  var paragraphText = document.getElementById("longestWordParagraph").textContent;
  var words = paragraphText.split(" ");
  var longestWord = "";
  
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  
  alert("Longest word: " + longestWord);
}

alert("Q4")
function updateParagraph() {
  var textFieldValue = document.getElementById("textField").value;
  if (textFieldValue !== "") {
    document.getElementById("outputParagraph").textContent = textFieldValue;
  }
}

alert("Q5")
function updateParagraph() {
  var textFieldValue = document.getElementById("textField").value;
  var specificWord = "update"; // Change this to the word you want to check
  if (textFieldValue === specificWord) {
    document.getElementById("outputParagraph").textContent = textFieldValue;
  }
}

alert("Q6")
function updateParagraph() {
  var textFieldValue = document.getElementById("textField").value;
  var maxLength = 10; // Change this to the desired maximum length
  if (textFieldValue.length <= maxLength) {
    document.getElementById("outputParagraph").textContent = textFieldValue;
  }
}

alert("chapter 52")

alert("Q1")
var sentence = document.getElementById("boldSentence");

sentence.addEventListener("click", function() {
  sentence.style.fontWeight = "bold";
});

alert("Q2")
var image = document.getElementById("myImage");
var imageText = document.getElementById("imageText");

image.addEventListener("mouseover", function() {
  image.style.display = "none";
  imageText.style.display = "block";
});

imageText.addEventListener("mouseout", function() {
  imageText.style.display = "none";
  image.style.display = "block";
});

alert("Q3")
var heading = document.getElementById("hoverHeading");

heading.addEventListener("mouseover", function() {
  heading.style.backgroundColor = "black";
});

heading.addEventListener("mouseout", function() {
  heading.style.backgroundColor = ""; // To revert to the original style
});

alert("Q4")
var paragraph = document.getElementById("underlineParagraph");

paragraph.addEventListener("mouseover", function() {
  paragraph.style.textDecoration = "underline";
});

paragraph.addEventListener("mouseout", function() {
  paragraph.style.textDecoration = "none"; // To remove underline
});


















































































































































































































































































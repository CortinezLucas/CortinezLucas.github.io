// First button function
function greetUser() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;
    if (hour > 5 && hour < 11) {
      greeting = "Good morning";
    } else if (hour >= 12 && hour < 18) {
      greeting = "Good Day";
    } else {
      greeting = "Good Evening";
    }
    alert(greeting);
  }
  
  // Second button function
  function changeButtonTextAndClass() {
    let button = document.getElementById("button2");
    console.log("Before change:", button.textContent, button.className);
    button.textContent = "Done";
    button.className = "btn btn-success";
    console.log("After change:", button.textContent, button.className);
  }
  
  document.getElementById("button1").addEventListener("click", greetUser);
  document.getElementById("button2").addEventListener("click", changeButtonTextAndClass);

// Check Trivia Answer
function checkTriviaAnswer() {
    const answer = document.getElementById('triviaAnswer').value.trim().toLowerCase();
    const responseElement = document.getElementById('triviaResponse'); // Fixed element ID
    const correctAnswer = "Biden".toLowerCase();
  
    if (answer === correctAnswer) {
      responseElement.textContent = `Correct! You guessed: ${answer}`;
    } else {
      responseElement.textContent = `Incorrect. You guessed: ${answer}`;
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const triviaInput = document.getElementById("triviaAnswer");
    triviaInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkTriviaAnswer();
        }
    });

    const numberInput = document.getElementById("number-input");
    numberInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            checkNumber();
        }
    });
});


  
  // Function to check if a number is odd or even
  function checkNumber() {
    const numInput = document.getElementById('number-input').value;
    const num = parseInt(numInput);
    if (!isNaN(num) && num >= 10000 && num <= 99999) {
      const isEven = num % 2 === 0;
      document.getElementById('number-result').innerText = `The number ${num} is ${isEven ? "even" : "odd"}.`;
    } else {
      document.getElementById('number-result').innerText = "Please enter a valid 5-digit number.";
    }
  }
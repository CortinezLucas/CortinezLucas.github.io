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
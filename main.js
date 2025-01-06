
//   const userName = prompt("Please enter your name:");

//   if (userName) {
    
//     const nameElement = document.createElement("div");
//     nameElement.classList.add("name-display"); 

    
//     nameElement.textContent = `Hello, ${userName}!`;

    
//     // document.body.appendChild(nameElement);
//   } else {
//     alert("You didn't enter a name.");
//   }



// Prompt user for their name
const userName = prompt("Please enter your name:");

if (userName) {
  // Create a new div element to display the name
  const nameElement = document.createElement("div");
  nameElement.classList.add("name-display"); // Add class for styling

  // Set the text content of the div to the entered name
  nameElement.textContent = `Hello, ${userName}!`;

  // Append the new element to the body of the page
//   document.body.appendChild(nameElement);
} else {
  alert("You didn't enter a name.");
}

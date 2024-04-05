// Function to handle rolling a single die
function rollSingleDie() {
  const sides = document.getElementById('sides').value; // Get the number of sides from the input field
  const result = rollDie(sides); // Roll the die
  document.getElementById('result').innerText = `Result: ${result}`; // Update the result in the HTML
  function rollDie(sides) {
    return roll(`1d${sides}`);
  }
}

// Function to handle rolling multiple dice
function rollMultipleDice() {
  const quantity = document.getElementById('quantity').value; // Get the quantity from the input field
  const sides = document.getElementById('sides').value; // Get the number of sides from the input field
  const results = rollDice(quantity, sides); // Roll the dice
  let resultString = 'Results: ';
  results.forEach((result, index) => {
    resultString += `${result}`;
    if (index < results.length - 1) {
      resultString += ', ';
    }
  });
  document.getElementById('result').innerText = resultString; // Update the result in the HTML
}

// Function to roll a single die with the specified number of sides
function roll(diceNotation) {

// Now you can use rollDie function
console.log("Rolling a d20:", rollDie(20)); // Roll a single d20

  
  // Roll the dice and calculate the total
  let total = 0;
  for (let i = 0; i < quantity; i++) {
    total += Math.floor(Math.random() * sides) + 1;
  }
  
  // Return the total
  return total;
}

console.log("Rolling a d20:", rollDie(20)); // Roll a single d20
console.log("Rolling 2d6:", rollDice(2, 6)); // Roll 2 six-sided dice
console.log("Rolling 3d10:", rollDice(3, 10)); // Roll 3 ten-sided dice

// Function to handle saving the character to the server
function saveCharacterToServer(characterData) {
  fetch('/save-character', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(characterData)
  })
  .then(response => {
      if (response.ok) {
          // Character saved successfully
          alert('Character saved successfully!');
      } else {
          // Error saving character
          throw new Error('Failed to save character');
      }
  })
  .catch(error => {
      // Handle error
      console.error('Error saving character:', error.message);
      alert('Failed to save character. Please try again later.');
  });
}

// Function to handle saving the character
function saveCharacter() {
  // Get the form data
  const formData = {
      name: document.getElementById('name').value,
      race: document.getElementById('race').value,
      class: document.getElementById('class').value,
      abilities: document.getElementById('abilities').value,
      skills: document.getElementById('skills').value,
      equipment: document.getElementById('equipment').value
  };

  // Call the function to save the character to the server
  saveCharacterToServer(formData);
}


// Function to populate the dropdown menu with pre-built characters
function populateBuiltCharacters() {
  const builtCharacters = ['Character 1', 'Character 2', 'Character 3']; // Example pre-built characters

  const selectElement = document.getElementById('built-characters');

  // Clear existing options
  selectElement.innerHTML = '';

  // Add default option
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.text = 'Select a built character';
  defaultOption.disabled = true;
  defaultOption.selected = true;
  selectElement.appendChild(defaultOption);

  // Add options for pre-built characters
  builtCharacters.forEach(character => {
      const option = document.createElement('option');
      option.value = character;
      option.text = character;
      selectElement.appendChild(option);
  });
}
const button = document.getElementById('char-button');

  const changeToCharacter = async (event) => {
    event.preventDefault();
  
    const selectedChar = document.getElementById('#selectedChar').value.trim();

    if (selectedChar) {
      const response = await fetch('/api/character', {
        method: 'GET',
        body: JSON.stringify({ selectedChar })
      });
  
      if (response.ok) {
        document.location.replace('/api/character');
      } else {
        alert(response.statusText);
      }
    }
  };

// Function to handle save button click event
document.getElementById('save-button').addEventListener('click', saveCharacter);

// Populate the dropdown menu with pre-built characters when the page loads
window.addEventListener('load', populateBuiltCharacters);

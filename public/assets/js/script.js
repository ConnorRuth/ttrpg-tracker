

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
  const weaponroll = async (event) => {
    event.preventDefault();
  
    const selectedWeapon = document.getElementById('#selectedweapon').value.trim();

    if (selectedWeapon) {
      const response = await fetch('/api/character', {
        method: 'GET',
        body: JSON.stringify({ selectedWeapon })
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

// Add event listener to the button
document.getElementById('weaponRoll').addEventListener('click', async () => {
  try {
      // Fetch the side string from another route
      const response = await fetch('/get-sides');
      if (!response.ok) {
          throw new Error('Failed to fetch side string');
      }
      const sideString = await response.text();

      // Assign the side string to a variable
      const sides = sideString.trim();
      console.log('Received side string:', sides);

      // Call a function or perform any other actions with the received side string
      rollDice(sides);
  } catch (error) {
      console.error('Error fetching side string:', error);
  }
});

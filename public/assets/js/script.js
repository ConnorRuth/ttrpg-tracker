// import { roll } from 'dice-utils';



// console.log("Rolling a d20:", rollDie(20)); // Roll a single d20
// console.log("Rolling 2d6:", rollDice(2, 6)); // Roll 2 six-sided dice
// console.log("Rolling 3d10:", rollDice(3, 10)); // Roll 3 ten-sided dice

//   const weaponroll = async (event) => {
//     event.preventDefault();
  
//     const selectedWeapon = document.getElementById('#selectedweapon').value.trim();

//     if (selectedWeapon) {
//       const response = await fetch('/api/character', {
//         method: 'GET',
//         body: JSON.stringify({ selectedWeapon })
//       });
  
//       if (response.ok) {
//         document.location.replace('/api/character');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };

// // Add event listener to the button
// document.getElementById('weaponRoll').addEventListener('click', async () => {
//   try {
//       // Fetch the side string from another route
//       const response = await fetch('/get-sides');
//       if (!response.ok) {
//           throw new Error('Failed to fetch side string');
//       }
//       const sideString = await response.text();

//       // Assign the side string to a variable
//       const sides = sideString.trim();
//       console.log('Received side string:', sides);

//       // Call a function or perform any other actions with the received side string
//       rollDice(sides);
//   } catch (error) {
//       console.error('Error fetching side string:', error);
//   }
// });
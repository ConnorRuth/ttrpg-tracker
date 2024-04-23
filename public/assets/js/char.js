
const charSaveHandler = async (event) => {
    event.preventDefault();
    console.log('saving character...');
    const charIdentifier = parseInt(document.location.pathname.split('/')[2]);
    
    const charFormData = {
        level: parseInt(document.getElementById('level').attributes.value.value),
        maxHP: parseInt(document.getElementById('maxHP').attributes.value.value),
        currentHP: parseInt(document.getElementById('currentHP').attributes.value.value),
        age: parseInt(document.getElementById('age').attributes.value.value),
        features: document.getElementById('features').attributes.value.value
    };
    const abilityFormData= [{
        character_id: charIdentifier,
        ability_id: parseInt(document.getElementById('ability1').value),
        score: parseInt(document.getElementById('ability1score').value)},

        {character_id:charIdentifier,
        ability_id: parseInt(document.getElementById('ability2').value),
        score: parseInt(document.getElementById('ability2score').value)},

        {character_id:charIdentifier,
        ability_id: parseInt(document.getElementById('ability3').value),
        score: parseInt(document.getElementById('ability3score').value)},

        {character_id:charIdentifier,
        ability_id: parseInt(document.getElementById('ability4').value),
        score: parseInt(document.getElementById('ability4score').value)},

        {character_id:charIdentifier,
        ability_id: parseInt(document.getElementById('ability5').value),
        score: parseInt(document.getElementById('ability5score').value)},

        {character_id:charIdentifier,
        ability_id: parseInt(document.getElementById('ability6').value),
        score: parseInt(document.getElementById('ability6score').value)},
    ]
// fetch for character model
    // fetch for ability model
    console.log(abilityFormData);
    console.log(charFormData);
    try {
        const response = await fetch('/api/character/ability', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( abilityFormData)
        });

        if (response.ok) {
            console.log('Character saved successfully!');
        } else {
            console.error('Failed to save character.');
        }
    } catch (error) {
        console.error('Error saving character:', error);
    }
};
 document
    .getElementById('charsheet-button')
    .addEventListener('click', charSaveHandler);

const updateCharSkill = async (event) => {
    event.preventDefault();
    const charIdentifier = parseInt(document.location.pathname.split('/')[2]);
    
    const skillFormData = [
    {
        character_id: charIdentifier,
        skill_id: parseInt(document.getElementById('skill1').value),
        score: parseInt(document.getElementById('skill1score').value)
    },
    {
        character_id: charIdentifier,
        skill_id: parseInt(document.getElementById('skill2').value),
        score: parseInt(document.getElementById('skill2score').value)
    },{
        character_id: charIdentifier,
        skill_id: parseInt(document.getElementById('skill3').value),
        score: parseInt(document.getElementById('skill3score').value)
    },{
        character_id: charIdentifier,
        skill_id: parseInt(document.getElementById('skill4').value),
        score: parseInt(document.getElementById('skill4score').value)
    },{
        character_id: charIdentifier,
        skill_id: parseInt(document.getElementById('skill5').value),
        score: parseInt(document.getElementById('skill5score').value)
    },{
        character_id: charIdentifier,
        skill_id: parseInt(document.getElementById('skill6').value),
        score: parseInt(document.getElementById('skill6score').value)
    },{
        character_id: charIdentifier,
        skill_id: parseInt(document.getElementById('skill7').value),
        score: parseInt(document.getElementById('skill7score').value)
    },{
        character_id: charIdentifier,
        skill_id: parseInt(document.getElementById('skill8').value),
        score: parseInt(document.getElementById('skill8score').value)
    },{
        character_id: charIdentifier,
        skill_id: parseInt(document.getElementById('skill9').value),
        score: parseInt(document.getElementById('skill9score').value)
    },{
        character_id: charIdentifier,
        skill_id: parseInt(document.getElementById('skill10').value),
        score: parseInt(document.getElementById('skill10score').value)
    },{
        character_id: charIdentifier,
        skill_id: parseInt(document.getElementById('skill11').value),
        score: parseInt(document.getElementById('skill11score').value)
    },{
        character_id: charIdentifier,
        skill_id: parseInt(document.getElementById('skill12').value),
        score: parseInt(document.getElementById('skill12score').value)
    },{
        character_id: charIdentifier,
        skill_id: parseInt(document.getElementById('skill13').value),
        score: parseInt(document.getElementById('skill13score').value)
    },{
        character_id: charIdentifier,
        skill_id: parseInt(document.getElementById('skill14').value),
        score: parseInt(document.getElementById('skill14score').value)
    },{
        character_id: charIdentifier,
        skill_id: parseInt(document.getElementById('skill15').value),
        score: parseInt(document.getElementById('skill15score').value)
    },{
        character_id: charIdentifier,
        skill_id: parseInt(document.getElementById('skill16').value),
        score: parseInt(document.getElementById('skill16score').value)
    },{
        character_id: charIdentifier,
        skill_id: parseInt(document.getElementById('skill17').value),
        score: parseInt(document.getElementById('skill17score').value)
    },{
        character_id: charIdentifier,
        skill_id: parseInt(document.getElementById('skill18').value),
        score: parseInt(document.getElementById('skill18score').value)
    },
    ]

    try {
        const response = await fetch('/api/character/skill', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(skillFormData)
        });

        if (response.ok) {
            console.log('Character skills successfully updated!');
        } else {
            console.error('Failed to update skills.');
        }
    } catch (error) {
        console.error('Error updating skills.', error);
    }
};
document
    .getElementById('charsheet-button')
    .addEventListener('click', updateCharSkill);


// const rollDamage = async (event) => {
//     event.preventDefault();
//     const displayResult = document.getElementById("result");
//     const weaponData ={
//         damage: document.getElementById("weaponselect").value,
//     }
//     try{
//         const response = await fetch('/api/character/roll', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(weaponData)
//         });
//         if (response.ok) {
//             console.log('got the  damage');
//             displayResult.innerHTML =`<p>you rolled: ${response.results[0]} ${response.results[1]} for a total of ${response.total}</p>`;
//         } else {
//             console.error('Failed to get damage');
//         }
//     } catch (error){
//         console.error('Failed to get damage server side', error);
//     }
    
// }
// diceButton.addEventListener('click', rollDamage);
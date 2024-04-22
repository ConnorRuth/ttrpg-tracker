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
        for(i=0; i<abilityFormData.length; i++){
        const response = await fetch('/api/character/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( abilityFormData[i])
        });

        if (response.ok) {
            console.log('Character saved successfully!');
        } else {
            console.error('Failed to save character.');
        }}
    } catch (error) {
        console.error('Error saving character:', error);
    }
};
 document
    .getElementById('charsheet-button')
    .addEventListener('click', charSaveHandler);

const updateCharSkill = async (event) => {
    event.preventDefault();
    const skillUpdate = {
        skill_Id: document.querySelector('#skillsDropdown option:checked').value,
    };
    console.log(skillUpdate);

    try {
        const response = await fetch('/api/skill/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(skillUpdate)
        });

        if (response.ok) {
            console.log('Character skills successfully updated!');
            location.reload();
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
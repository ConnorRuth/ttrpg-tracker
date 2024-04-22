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
        const response = await fetch('/api/character/', {
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


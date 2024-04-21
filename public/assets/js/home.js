const charCreateHandler = async (event) => {
    event.preventDefault();
    console.log(event);
    
    const formData = {
        char_name: document.getElementById('name').value,
        level: parseInt(document.getElementById('level').value),
        charclass_id: parseInt(document.getElementById('avail-classes').value),
        race_id: parseInt(document.getElementById('avail-races').value),
        maxHP: parseInt(document.getElementById('maxHP').value),
        currentHP: parseInt(document.getElementById('currentHP').value),
        description: document.getElementById('description').value,
        age: parseInt(document.getElementById('age').value),
        features: document.getElementById('features').value
    };

    try {
        const response = await fetch('/api/character', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            console.log('Character created successfully!');
            location.reload();
        } else {
            console.error('Failed to create character.');
        }
    } catch (error) {
        console.error('Error creating character:', error);
    }
};
 document
    .querySelector('#save-button')
    .addEventListener('click', charCreateHandler);


function charSelectHandler(event) {
 event.preventDefault();

 const selectedChar = document.querySelector("#built-characters option:checked");
 window.document.location.replace("/character/"+ selectedChar.value);

};
document.getElementById("char-button").addEventListener('click', charSelectHandler);
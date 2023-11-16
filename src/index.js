fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(data => {
        const characterBar = document.getElementById('character-bar');
        data.forEach(character => {
            const span = document.createElement('span');
            span.innerText = character.name
            characterBar.appendChild(span);
        });
    });











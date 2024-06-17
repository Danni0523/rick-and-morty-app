export const showCharacterInfo = (character) => {
    if (!character) {
        alert("Personaje no encontrado");
        return;
    }
    
    const characterInfo = document.getElementById('characterInfo');
    const characterNameDisplay = document.getElementById('characterNameDisplay');
    const characterImage = document.getElementById('characterImage');

    characterNameDisplay.textContent = character.name;
    characterImage.src = character.image;
    
    characterInfo.classList.remove('d-none');
};

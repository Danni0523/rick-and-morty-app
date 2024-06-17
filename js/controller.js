import { getCharacterDataByName } from './model.js';
import { showCharacterInfo } from './view.js';

document.getElementById('btnBuscar').addEventListener('click', async () => {
    const characterName = document.getElementById('characterName').value.trim();
    if (characterName) {
        const character = await getCharacterDataByName(characterName);
        showCharacterInfo(character);
    } else {
        alert("Por favor ingrese el nombre de un personaje");
    }
});

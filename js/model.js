export const getCharacterDataByName = async (name) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
        const data = await response.json();
        return data.results[0]; 
    } catch (error) {
        console.error('Error fetching character data:', error);
        console.log("asdfasdf");
        return null;
    }
};

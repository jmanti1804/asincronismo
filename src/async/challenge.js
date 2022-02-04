const fethData = require ('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async(url_api) => {
    try {
        const data = await fethData(url_api);
        const character = await fethData(`${API}${data.results[0].id}`);
        const origin = await fethData(character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
}

console.log('Before');
anotherFunction(API);
console.log('After');
const pokemon = {
    sprite: document.getElementById('pokemon-image'),
    name: document.getElementById('pokemon-name')
}


const GetPokemon = async ()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';

    const data = await fetch(url);
    const dataJson = await data.json();
    
    console.log(await dataJson);

    pokemon.sprite.src = await dataJson.sprites.front_default;
    pokemon.name.innerHTML = await `Name: ${dataJson.name}`;
}

GetPokemon();
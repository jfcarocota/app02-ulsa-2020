const urlList = JSON.parse(sessionStorage.getItem('urlList'));
const sprite = sessionStorage.getItem('sprite');


//console.log(urlList);

const GetPokemon = ()=>{
    const spriteName = sprite.replace('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/', '');
    const spriteNumber = spriteName.replace('.png', '');
    console.log(spriteNumber);
    urlList.forEach(element => {
        let pokemonNumber = element.replace('https://pokeapi.co/api/v2/pokemon/', '');
        pokemonNumber = pokemonNumber.replace('/', '');
        if(spriteNumber == pokemonNumber)
        {
            console.log(element);
        }
    });
}

GetPokemon();
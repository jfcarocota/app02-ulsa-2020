const pokemon = {
    sprite: document.getElementById('pokemon-image'),
    name: document.getElementById('pokemon-name'),
    types: document.getElementById('pokemon-types'),
    abilities: document.getElementById('pokemon-abilities')
}


const GetPokemon = async ()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';

    const data = await fetch(url);
    const dataJson = await data.json();

    const {sprites, name, types, abilities} = dataJson;

    types.forEach(element => {
        const {type} = element;
        //console.log(type.name);
        pokemon.types.innerHTML += `<li>${type.name}</li>`;
    });

    abilities.forEach(element => {
        const{ability} = element;
        //pokemon.abilities.innerHTML += `<li>${ability.name}</li>`;
        //console.log(ability.url);
        GetAbilityInfo(ability.url,  ability.name);

        //console.log(pokemonAbilitesInfo);
    });
    
    //console.log(await abilities);

    pokemon.sprite.src = await sprites.front_default;
    pokemon.name.innerHTML = await `Name: ${name}`;
}

const GetAbilityInfo= async (url, abilityName)=>{

    const data = await fetch(url);
    const dataJson = await data.json();
    const{effect_entries} = dataJson;

    let effectsList = '';

    effect_entries.forEach(element => {

        const{effect, language} = element;

        if(language.name === 'en'){
            //console.log(effect);
            effectsList += `<li>${effect}</li>`;
        }
    });

    pokemon.abilities.innerHTML += 
    `<li>
        ${abilityName}
        <div>effect</div>
        <ul>
            ${effectsList}
        </ul>
    </li>`;

    /*const abilitiesPokemon = effect_entries.map( element =>{
        const{effect, language} = element;

        if(language.name === 'en'){
            //console.log(effect);
            return effect;
        }
    });*/

    //console.log(abilitiesPokemon);
}

GetPokemon();
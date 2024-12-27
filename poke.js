async function fetchPokemon(id) {
    try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); 
    if (!response.ok) {
        throw new Error('Pokémon not found.');
    }
    const data = await response.json();
    return data;
    } catch (error) {
    console.error('Error fetching Pokémon:', error);
    throw error; 
    }
}

document.addEventListener('DOMContentLoaded', () => { 
    const searchButton = document.getElementById('searchButton'); 
    searchButton.addEventListener('click', async () => { 
    const searchInput = document.getElementById('searchInput').value;
    try {
        if (!/^[0-9]+$/.test(searchInput)) {
        throw new Error('Please enter a valid Pokémon ID (numbers only).');
        }
        const pokemon = await fetchPokemon(searchInput);
        window.location.href = `poke-details.html?id=${pokemon.id}`; 
    } catch (error) {
        const searchResults = document.getElementById('searchResults');
        searchResults.innerHTML = `<p class="text-danger">${error.message}</p>`;
    }
    });
});

const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('id');

if (pokemonId) { 
    fetchPokemon(pokemonId)
    .then(pokemon => {
        const pokemonName = document.getElementById('pokemonName');
        pokemonName.textContent = pokemon.name;

        const pokemonImage = document.getElementById('pokemonImage');
        pokemonImage.src = pokemon.sprites.front_default; 

        const pokemonStats = document.getElementById('pokemonStats');
        pokemonStats.innerHTML = ''; 

        pokemon.stats.forEach(stat => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${stat.stat.name}</td>
            <td>${stat.base_stat}</td>
        `;
        pokemonStats.appendChild(row);
        }); 

        const typesList = document.createElement('ul');
        pokemon.types.forEach(type => {
        const listItem = document.createElement('li');
        listItem.textContent = type.type.name;
        typesList.appendChild(listItem);
        });
        const typesContainer = document.createElement('div');
        typesContainer.innerHTML = `<b>Types:</b><ul>${typesList.innerHTML}</ul>`;
        document.querySelector('.container').appendChild(typesContainer); 

        const abilitiesList = document.createElement('ul');
        pokemon.abilities.forEach(ability => {
        const listItem = document.createElement('li');
        listItem.textContent = ability.ability.name;
        abilitiesList.appendChild(listItem);
        });
        const abilitiesContainer = document.createElement('div');
        abilitiesContainer.innerHTML = `<b>Abilities:</b><ul>${abilitiesList.innerHTML}</ul>`;
        document.querySelector('.container').appendChild(abilitiesContainer); 

    })
    .catch(error => {
        const pokemonName = document.getElementById('pokemonName');
        pokemonName.textContent = "Pokémon Not Found"; 
        console.error('Error fetching Pokémon:', error); 
    });
}
// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then(res => res.json())
//     .then(data => {
//         let pokemons = data.results;
//         console.log(pokemons)
//         pokemons.forEach(pokemon => { // pokemons here is an array. array can be looped using forEach

//             // YOU CAN ACCESS POKEMON NAME HERE

//             // pokemon here is an object that has name, and url property.
//             // you need to fetch the url(API endpoint) to get pokemon details.
//             // console.log(pokemon);

//             fetch(pokemon.url) // fetching pokemon details
//             .then(res=>res.json())
//             .then(pokemonDetails=>{

//                 // YOU CAN ACCESS POKEMON IMAGE HERE

//                 // pokemonDetails here is an object containing pokemon details.
//                 // To access the pokemon image, pokemonDetails.sprites.other["official-artwork"].front_default
//                 // console.log(pokemonDetails);


//                 // pokemonDetails.types is an array of objects.
//                 // console.log(pokemonDetails.types)

//                 pokemonDetails.types.forEach(type=>{

//                     // YOU CAN ACCESS POKEMON TYPE HERE
//                     // console.log(type);

//                 })
//             });
//         });
//     });

    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(res => res.json())
    .then(data => {
        console.log(data); // Log the entire Pokémon details

        // Accessing Pokémon name and image
        const pokemonName = data.name;
        const pokemonImage = data.sprites.other["official-artwork"].front_default;
        console.log("Name:", pokemonName);
        console.log("Image:", pokemonImage);

        // Accessing Pokémon types
        const pokemonTypes = data.types.map(type => type.type.name);
        console.log("Types:", pokemonTypes);

        // Now, we can fetch additional details about the Pokémon if needed
        // For example, we can fetch more details about each type
        pokemonTypes.forEach(typeName => {
            fetch(`https://pokeapi.co/api/v2/type/${typeName}`)
                .then(res => res.json())
                .then(typeData => {
                    console.log(`Details for ${typeName} type:`, typeData);
                });
        });
    })
    .catch(error => {
        console.error("Error fetching Pokémon data:", error);
    });

    document.addEventListener("DOMContentLoaded", function () {
        // Fetch Pokemon data and render them initially
        fetchPokemonData();
    
        // Add event listener to the search button
        document.getElementById("search").addEventListener("click", function () {
            // Get the value of the input field for the Pokemon name
            const pokemonName = document.getElementById("pokemon-name").value.toLowerCase();
    
            // Fetch Pokemon data and filter based on the search criteria
            fetchPokemonData(pokemonName);
        });
    
        // Add event listener to the clear button
        document.getElementById("clear").addEventListener("click", function () {
            // Clear the input field for the Pokemon name
            document.getElementById("pokemon-name").value = "";
    
            // Fetch Pokemon data and render all Pokemon again
            fetchPokemonData();
        });
    
        // Function to fetch Pokemon data and render them
        function fetchPokemonData(searchQuery = '') {
            fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
                .then((res) => res.json())
                .then((data) => {
                    // Filter Pokemon data based on the search query
                    const filteredPokemon = data.results.filter(pokemon => pokemon.name.includes(searchQuery));
    
                    // Render the filtered Pokemon
                    renderPokemon(filteredPokemon);
                })
                .catch((error) => {
                    console.error("Error fetching Pokemon data:", error);
                });
        }
    
        // Function to render Pokemon data
        // function renderPokemon(pokemonList) {
        //     const gridContainer = document.getElementById("grid-container");
        //     gridContainer.innerHTML = ""; // Clear previous Pokemon cards
    
        //     pokemonList.forEach((pokemon) => {
        //         const pokemonName = pokemon.name;
        //         const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split("/")[6]}.png`;
    
        //         const pokemonCard = document.createElement("div");
        //         pokemonCard.innerHTML = `
        //             <img src="${pokemonImageUrl}" alt="${pokemonName}">
        //             <h2>${pokemonName}</h2>
        //         `;
        //         gridContainer.appendChild(pokemonCard);
        //     });
        // }
        function renderPokemon(pokemonList) {
            const gridContainer = document.getElementById("grid-container");
            gridContainer.innerHTML = ""; // Clear previous Pokemon cards
        
            pokemonList.forEach((pokemon) => {
                const pokemonName = pokemon.name;
                const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split("/")[6]}.png`;
        
                // Fetch additional details about the Pokémon
                fetch(pokemon.url)
                    .then(res => res.json())
                    .then(pokemonData => {
                        const pokemonTypes = pokemonData.types.map(type => type.type.name);
                        const typeClasses = pokemonTypes.map(type => type.toLowerCase()).join(' ');
                        
                        const pokemonCard = document.createElement("div");
                        pokemonCard.innerHTML = `
                            <img src="${pokemonImageUrl}" alt="${pokemonName}">
                            <h2>${pokemonName}</h2>
                            <p class="${typeClasses}">${pokemonTypes.join(', ')}</p>
                        `;
                        gridContainer.appendChild(pokemonCard);
                    })
                    .catch(error => {
                        console.error("Error fetching Pokemon details:", error);
                    });
            });
        }
    });
    

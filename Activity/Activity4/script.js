fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())
    .then(data => {
        let pokemons = data.results;
        // console.log(pokemons)
        pokemons.forEach(pokemon => { // pokemons here is an array. array can be looped using forEach

            // YOU CAN ACCESS POKEMON NAME HERE

            // pokemon here is an object that has name, and url property.
            // you need to fetch the url(API endpoint) to get pokemon details.
            // console.log(pokemon);

            fetch(pokemon.url) // fetching pokemon details
            .then(res=>res.json())
            .then(pokemonDetails=>{

                // YOU CAN ACCESS POKEMON IMAGE HERE

                // pokemonDetails here is an object containing pokemon details.
                // To access the pokemon image, pokemonDetails.sprites.other["official-artwork"].front_default
                // console.log(pokemonDetails);


                // pokemonDetails.types is an array of objects.
                // console.log(pokemonDetails.types)

                pokemonDetails.types.forEach(type=>{

                    // YOU CAN ACCESS POKEMON TYPE HERE
                    // console.log(type);

                })
            });
        });
    });
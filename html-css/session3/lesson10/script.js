fetch("https://pokeapi.co/api/v2/pokemon").then(function(response){
            return response.json()
        }).then(function(data){
            console.log(data)
        }).catch(function(err){
            console.log(err)
        })
const pruneData = country => {

    return ({
        name: country.name, 
        capital: country.capital, 
        population: country.population
    })
}

module.exports = pruneData

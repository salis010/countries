const express = require('express')
const axios = require('axios')
const pruneData = require('./src/backend/prune-data')
const getCountriesNames = require('./src/backend/get-countries-names')

const app = express()
const port = 3000

app.use(express.static(__dirname))
app.use(express.static(__dirname + '/dist'))

app.get('/question1/country/:countryName', (req, res) => {
	const country = req.params.countryName

	axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
		.then(response => pruneData(response.data[0]))
		.then(data => res.json(data))
		.catch(err => console.log(err))
})

app.get('/question2/country/:countryName', (req, res) => {
	const country = req.params.countryName

	axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
		.then(response => getCountriesNames(response.data))
		.then(data => res.json(data))
		.catch(err => console.log(err))
})

app.get('/*', function(req, res) {
	res.sendFile(__dirname + '/dist/index.html')
  })
  


app.listen(port, function () {
	console.log(`Listening on port ${port}...`)
})

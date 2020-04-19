const express = require('express')
const axios = require('axios')
const pruneData = require('./src/backend/prune-data')
const getCountriesNames = require('./src/backend/get-countries-names')
const getBody = require('./src/backend/get-body')
const jwt = require('./src/backend/auth/jwt')
const authenticate = require('./src/backend/auth/authenticate')
const secret = require('./src/backend/auth/config')

const app = express()
const port = 3000

let registeredUsers = []

app.set('jwtSecretToken', secret)

app.use(express.static(__dirname))
app.use(express.static(__dirname + '/dist'))	

app.get('/question1/country/:countryName', (req, res) => {
	const country = req.params.countryName

	axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
		.then(response => pruneData(response.data[0]))
		.then(data => res.json(data))
		.catch(err => {
			res.status(404)
			res.json({'Error': 'No matching country'})
		})
})

app.get('/question2/country/:country', (req, res) => {
	const country = req.params.country

	axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
		.then(response => getCountriesNames(response.data))
		.then(data => res.json(data))
		.catch(err => {
			res.status(404)
			res.json(['Error: No matching countries'])
		})
})

app.get('/*', function(req, res) {
	res.sendFile(__dirname + '/dist/index.html')
  })

app.post('/register-user', (req, res) => {
	getBody(req, res)
	.then(data => registeredUsers.push(data))
	.then(() => res.json('User registered successfully'))
	.catch(err => {
		console.error('Error', err)
		res.status(500)
		res.send({'error': err})
	})
})

app.post('/login', (req, res) => {
	getBody(req)
		.then(credentials => {
			authenticate(registeredUsers, credentials)
			.then(data => res.json(data))
			.catch(err => {
				res.status(401)
				res.send({'error': err})
				console.log('Login error:', err)
			})
		})		
		.catch(err => {
			res.status(401)
			res.send({'error': err})
			console.log('Login error:', err)
	})
})

app.listen(port, function () {
	console.log(`Listening on port ${port}...`)
})

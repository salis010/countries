const expressJwt = require('express-jwt')
const secret = require('./config.js')

const jwt = () => {
    return expressJwt({ secret })
}

module.exports = jwt

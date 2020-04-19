const secret = require('./config')
const jwt = require('jsonwebtoken')

const authenticate = (registeredUsers, credentials) => {

    const { email, password } = credentials

    const promise = new Promise((resolve, reject) => {
        const user = registeredUsers.find(registeredUser => registeredUser.email == email && registeredUser.password == password)
        
        if(user) {
            const token = jwt.sign({ name: user.name }, secret)

            resolve(token)
        }
        else (
            reject('Error: no matching use credentials found')
        )
    })

    return promise

}

module.exports = authenticate

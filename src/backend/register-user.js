const formidable = require('formidable')
// const fs = require('fs')
// const saveProductToMongo = require('./save-product-to-mongo')


const registerUser = (req, res) => {
    
    const promise = new Promise((resolve, reject) => {
 
        new formidable.IncomingForm().parse(req, (err, fields) => {
            if (err) {
            console.error('Error', err)
            res.status(500)
            res.send({'error': err})
            reject(err)
            } else {
                resolve(fields)
            }	
        })

    })

    return promise
}

module.exports = registerUser
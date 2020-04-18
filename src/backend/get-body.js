const formidable = require('formidable')

const getBody = (req, res) => {
    
    const promise = new Promise((resolve, reject) => {
 
        new formidable.IncomingForm().parse(req, (err, fields) => {
            if (err) {            
                reject(err)
            } else {
                resolve(fields)
            }	
        })

    })

    return promise
}

module.exports = getBody

import { baseUrl } from '../../../constants'

export const registerUser = formValues => {        

    const promise = new Promise((resolve, reject) => {

        const formData = new FormData()
    
        Object.keys(formValues).forEach(key => {
            formData.set(key, formValues[key].value)
        })
                    
        fetch(`${baseUrl}/register-user`, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(message => resolve(message))
        .catch(err => reject(err))		
    })

    return promise
}
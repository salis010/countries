import { baseUrl } from '../../../constants'

export const registerUser = formValues => {        

    const formData = new FormData()
    
    Object.keys(formValues).forEach(key => {
        formData.set(key, formValues[key].value)
    })
                
    fetch(`${baseUrl}/register-user`, {
        method: 'POST',
        body: formData,
    })
    .then(response => console.log(`User registered successfully: ${response.ok}`))
    .catch(err => console.log(err))		
}
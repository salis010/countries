export const initializeRegistrationState = () => (
    {
        name: { 
            value: '',
            status: fieldStatus.notVisited,
            isValid: false,
        },
        email: { 
            value: '',
            status: fieldStatus.notVisited,
            isValid: false,
        },
        password: { 
            value: '',
            status: fieldStatus.notVisited,
            isValid: false,
        },
        isFormValid: false,
    }
)

export const fieldStatus = {
    notVisited: 0,
    beingEdited: 1,
    userLeftField: 2,
}


export const isNameValid = str => str.length > 1 && /^[a-zA-Z]*$/.test(str)

export const isEmailValid = strEmail => {

    const regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    
    return regex.test(strEmail)
}

export const isPasswordValid = str => str.length >= 6 && /^[a-zA-Z0-9!@#$%^&*()_+=-]+$/.test(str)

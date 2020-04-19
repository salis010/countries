export const checkOtherFieldsValidity = (state, field) => {

    const keys = Object.keys(state)

    for(let i = 0; i < keys.length; i++) {
        if(keys[i] == field || keys[i] == 'isFormValid' || keys[i] == 'registrationSuccessfulMessage') {
            continue
        } else {
            if(!state[keys[i]].isValid) {
                return false
            }
        }
    }

    return true
}
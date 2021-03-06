export const filterStringArray = (arr, filter) => {
	
	const rx = new RegExp(`${filter}`, 'i')

	const results = arr.filter(str => rx.test(str))

	return results
}


export const isNameValid = str => str.length > 1 && /^[a-zA-Z]*$/.test(str)


export const isEmailValid = strEmail => {

    const regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    
    return regex.test(strEmail)
}


export const isPasswordValid = str => str.length > 5 && /^[a-zA-Z0-9!@#$%^&*()_+=-]+$/.test(str)

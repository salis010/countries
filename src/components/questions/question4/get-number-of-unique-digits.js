const isUnique = (arr, n) => {
    for(let i = 0; i < arr.length; i++) {
        
        if(arr[i].number === n) {
            return false
        }
    }

    return true
}

export const getNumberOfUniqueDigits = arr => {

    const uniqueNumbers = []

    arr.forEach(n => {
        if(isUnique(uniqueNumbers, n)) {                
            uniqueNumbers.push({
                number: n,
                frequency: 1
            })
        } else {
            uniqueNumbers.forEach(unique => {
                if(unique.number === n) {
                    unique.frequency++
                }
            })
        }
    })

    uniqueNumbers.sort((a, b) => b.frequency - a.frequency)

    return uniqueNumbers
}

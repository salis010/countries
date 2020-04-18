import getCountriesNames from '../../src/backend/get-countries-names'

describe('Test getCountriesNames', () => {

    const countries = [
        { name: 'Italy', capital: 'Rome' },
        { name: 'Germany', capital: 'Berlin' },
    ]

    const correctAnswer = ['Italy', 'Germany']

    it('returns an array', () => {
        expect(Array.isArray(getCountriesNames(countries))).toBe(true)
    })

    it('extracts the "country" property from each element of the provided array and returns an array', () => {
        expect(JSON.stringify(getCountriesNames(countries))).toBe(JSON.stringify(correctAnswer))
    })
    
})

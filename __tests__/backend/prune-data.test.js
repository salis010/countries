import pruneData from '../../src/backend/prune-data'

describe('Test pruneData', () => {

    const country = {
        name: 'Malta', 
        capital: 'Valletta' ,
        population: 400000,
        field1: 'field1',
        field2: 'field2',
        field3: 'field3',
    }
    

    const correctAnswer = {
        name: 'Malta', 
        capital: 'Valletta', 
        population: 400000,
    }

    it('returns an object', () => {
        expect(typeof pruneData(country)).toBe('object')
    })

    it('extracts the properties "name", "capital", and "population" and returns them in a new object', () => {
        expect(JSON.stringify(pruneData(country))).toBe(JSON.stringify(correctAnswer))
    })
    
})

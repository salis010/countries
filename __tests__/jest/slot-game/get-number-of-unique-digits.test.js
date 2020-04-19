import { getNumberOfUniqueDigits } from '../../../src/components/questions/question4/get-number-of-unique-digits'

describe('Test getNumberOfUniqueDigits', () => {

    const result1 = [
        {
            number: 0,
            frequency: 1,
        },
        {
            number: 1,
            frequency: 1,
        },
        {
            number: 2,
            frequency: 1,
        },
    ]

    const result2 = [
        {
            number: 0,
            frequency: 2,
        },
        {
            number: 2,
            frequency: 1,
        },
    ]

    const result3 = [
        {
            number: 0,
            frequency: 3,
        },
    ]

    it('returns 3 when supplied with [0, 1, 2]', () => {
        expect(JSON.stringify(getNumberOfUniqueDigits([0, 1, 2]))).toBe(JSON.stringify(result1))
    })

    it('returns 2 when supplied with [0, 0, 2]', () => {
        expect(JSON.stringify(getNumberOfUniqueDigits([0, 0, 2]))).toBe(JSON.stringify(result2))
    })

    it('returns 1 when supplied with [0, 0, 0]', () => {
        expect(JSON.stringify(getNumberOfUniqueDigits([0, 0, 0]))).toBe(JSON.stringify(result3))
    })

})
    
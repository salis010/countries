import { filterStringArray, isNameValid, isEmailValid, isPasswordValid } from '../../../src/components/questions/utils'

describe('Test the functions in src/components/questions/util', () => {

    const arr = ['Libya', 'Liberia', 'Italy', 'UK']

    it('returns an array with the elements of the supplied array that match the supplied regex', () => {
        expect(JSON.stringify(filterStringArray(arr, 'li'))).toBe(JSON.stringify(['Libya', 'Liberia']))
    })

    it('returns false when supplied with a short name', () => {
        expect(isNameValid('S')).toBe(false)
    })

    it('returns false when supplied with a name that contains digits', () => {
        expect(isNameValid('Diane77')).toBe(false)
    })

    it('returns false when supplied with a name that contains a space', () => {
        expect(isNameValid('Diane Smith')).toBe(false)
    })

    it('returns true when supplied with a name longer than one character and is composed of just letters', () => {
        expect(isNameValid('Diane')).toBe(true)
    })

    it('returns false when an email does not have the "@" symbol', () => {
        expect(isEmailValid('name.domain.com')).toBe(false)
    })

    it('returns false when an email does not have the "." symbol', () => {
        expect(isEmailValid('name@domaincom')).toBe(false)
    })

    it('returns true when an email is the form ____@_____.com', () => {
        expect(isEmailValid('name@domain.com')).toBe(true)
    })

    it('returns false when the password is less that 6 characters', () => {
        expect(isPasswordValid('12345')).toBe(false)
    })

    it('returns false when the password has a space', () => {
        expect(isPasswordValid('12345 12345')).toBe(false)
    })

    it('returns false when the password is 6 characters long or more and had valid characters', () => {
        expect(isPasswordValid('ABC123456')).toBe(true)
    })

})

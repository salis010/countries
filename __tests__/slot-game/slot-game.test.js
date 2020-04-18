import { spinTheReels } from '../../src/components/questions/question4/spin-the-reels'
import { getNumberOfUniqueDigits } from '../../src/components/questions/question4/get-number-of-unique-digits'

describe('Checks that slot game returns the correct winnings', () => {

    // symbol mapping
	// lemon: 	0
	// banana: 1
	// apple: 	2
    // cherry: 3

    const numberOfSpins = 1000000
    const results = []

    for(let i = 0; i < numberOfSpins; i++) {
        const { lineResult, win } = spinTheReels()

        const uniqueNumbers = getNumberOfUniqueDigits(lineResult)

        if (uniqueNumbers.length === 3) {
            results.push(win === 0) 
        } else if (uniqueNumbers.length === 2) {
            switch(uniqueNumbers[0].number) {
                case 3:
                    results.push(win === 40)
                    break 
                case 2:
                    results.push(win === 10)
                    break
                case 1:
                    results.push(win === 5)
                    break
                case 0:
                    results.push(win === 0)
                    break
                default:
                    results.push(false)
                    break
            }
        } else if (uniqueNumbers.length === 1) {
            switch(uniqueNumbers[0].number) {
                case 3:
                    results.push(win === 50)
                    break 
                case 2:
                    results.push(win === 20)
                    break
                case 1:
                    results.push(win === 15)
                    break
                case 0:
                    results.push(win === 3)
                    break
                default:
                    results.push(false)
                    break
            }
        }
    }

    it('It returns false, meaning all wins matched correctly with the paytable and there is no "false" element in "results"', () => {
        expect(results.includes(false)).toBe(false)
    })

})
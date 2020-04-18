export const getRandomNumber = max => Math.floor(Math.random() * Math.floor(max))

export const spinTheReels = () => {

    const reelsLayout = [
        [3, 0, 2, 0, 1, 1, 0, 0],
        [0, 2, 0, 0, 3, 2, 1, 0],
        [0, 2, 0, 2, 3, 0, 1, 0]
    ]

    // symbol mapping
	// lemon: 	0
	// banana: 1
	// apple: 	2
	// cherry: 3
	
	let cherries = 0
    let apples = 0
    let bananas = 0
    let lemons = 0
    let win = 0

    const lineResult = [0, 0, 0]

    for(let i = 0; i < lineResult.length; i++) {
    
        lineResult[i] = reelsLayout[i][getRandomNumber(reelsLayout[i].length)]
    
        switch(lineResult[i]) {
            case 0: 
                lemons++ 
                break
            case 1: 
                bananas++
                break
            case 2: 
                apples++
                break
            case 3: 
                cherries++
                break
            default: break
        }
    }

    // start from most probable to the least probable
    if(lemons === 3) {
        win = 3
    } else if( bananas === 2) {
        win = 5
    } else if( bananas === 3) {
        win = 15
    } else if( apples === 2) {
        win = 10
    } else if( apples === 3) {
        win = 20
    } else if( cherries === 2) {
        win = 40
    } else if( cherries === 3) {
        win = 50
    }

    return { lineResult, win }
}
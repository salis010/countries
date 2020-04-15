import lemon from './images/lemon.png'
import banana from './images/banana.png'
import apple from './images/apple.png'
import cherry from './images/cherry.png'

export const getImage = n => {
    switch(n) {
        case 0: return lemon
        case 1: return banana
        case 2: return apple
        case 3: return cherry
    }
}

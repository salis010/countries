import React from 'react'
import styled from 'styled-components'
import { Question } from '../../question'
import { spinTheReels } from './spin-the-reels'
import { getImage } from './get-image'

const LineWrapper = styled.div`
	display: flex;
`

export const Question4 = ({ balance, setBalance, win, setWin, lineResult, setLineResult }) => {
	
	const spin = () => {
		const { lineResult, win } = spinTheReels()
		
		setWin(win)
		setBalance(balance - 1 + win)
		setLineResult(lineResult)

		// RTP check
		// let totalWin = 0
		// const spins = 1000000
		// for(let i = 0; i < spins; i++) {
		// 	totalWin += spinTheReels().win
		// }
		// console.log('RTP:', `${(totalWin / spins) * 100}%`)
	}

	return ( 
		<Question questionNumber={4}>			
			<p>Balance: {balance}</p>
			<p>Win: {win}</p>
			<p>Line: {lineResult}</p>
			<LineWrapper>
				<img src={getImage(lineResult[0])} />
				<img src={getImage(lineResult[1])} />
				<img src={getImage(lineResult[2])} />
			</LineWrapper>
			<button onClick={spin}>Spin</button>
		</Question>
	 )
}

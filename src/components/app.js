import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from './navbar'
import { Question1 } from './questions/question1/index'
import { Question2 } from './questions/question2/index'
import { Question3 } from './questions/question3/index'
import { Question4 } from './questions/question4/index'
import { Question5 } from './questions/question5/index'
import { Question6 } from './questions/question6/index'


export const App = () => {

	const questionComponents = [ Question1, Question2, Question3, Question4, Question5, Question6 ]

	return (
		<Router>
			<NavBar numberOfQuestions={6} />
			<Switch>
				{questionComponents.map((question, i) =>
					<Route 
						key={i}
						path={`/question${i + 1}`} 
						component={question} 
					/>
				)}
			</Switch>
		</Router>
	)
}

import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/app'
import './styles/main.css'

const mountNode = document.getElementById('mountNode')

ReactDOM.render(<App />, mountNode)


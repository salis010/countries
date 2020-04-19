import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/index'
import { App } from './components/app'
import './styles/main.css'

const mountNode = document.getElementById('mountNode')

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    mountNode)

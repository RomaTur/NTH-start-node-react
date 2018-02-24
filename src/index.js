import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './components/App'

const root = (
    <App />
)

ReactDOM.render(root, document.getElementById('root'))
registerServiceWorker()

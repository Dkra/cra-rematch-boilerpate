import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { init } from '@rematch/core'
import models from './models'
import './index.css'
import AppContainer from './containers/AppContainer'
import registerServiceWorker from './registerServiceWorker'

const store = init({
	models
})

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()

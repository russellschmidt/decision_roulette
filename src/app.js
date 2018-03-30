import React from 'react'
import ReactDOM from 'react-dom'

import DecisionApp from './components/DecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

ReactDOM.render(<DecisionApp options={['Angel City Brewery', 'Spring St Bar']}/>, document.getElementById('app'))

import {createStore, applyMiddleware} from 'redux'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'

import reducers from './reducers'

export default createStore(reducers, applyMiddleware(promise(), thunk))
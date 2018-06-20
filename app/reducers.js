import {combineReducers} from 'redux'

import Auth from './resources/Auth'
import LivePeers from './resources/LivePeers'
import Messages from './resources/Messages'

export default combineReducers({
  Auth,
  LivePeers,
  Messages
})
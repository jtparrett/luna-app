import {combineReducers} from 'redux'

import LivePeers from './resources/LivePeers'
import Messages from './resources/Messages'

export default combineReducers({
  LivePeers,
  Messages
})
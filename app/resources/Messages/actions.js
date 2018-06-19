import SHA256 from 'crypto-js/sha256'
import {CREATE} from './types'
import {actions as PeerActions} from '../LivePeers'

export function createMessage({id, message}){
  return {
    type: CREATE,
    id, message
  }
}

export function sendMessage(message){
  return (dispatch, getState) => {
    const time = new Date().getTime()
    const id = SHA256(message + time).toString()
    const data = {id, message}
    dispatch(createMessage(data))
    dispatch(PeerActions.broadcast(JSON.stringify(data)))
  }
}
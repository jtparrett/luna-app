import SHA256 from 'crypto-js/sha256'
import {CREATE} from './types'
import {actions as PeerActions} from '../LivePeers'

export function createMessage(data){
  return {
    type: CREATE,
    ...data
  }
}

export function sendMessage(mes, to){
  return (dispatch, getState) => {
    const {Auth} = getState()

    const time = new Date().getTime()
    const id = SHA256(mes + time).toString()
    const message = to.encrypt(mes)

    const data = {
      id, message,
      to: to.exportKey('public').toString(),
      from: Auth.RSASession.exportKey('public').toString()
    }

    dispatch(createMessage(data))
    dispatch(PeerActions.broadcast(JSON.stringify(data)))
  }
}
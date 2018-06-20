import {CREATE, DELETE} from './types'
import {actions as MessageActions} from '../Messages'

export function broadcast(res, sender){
  return (dispatch, getState) => {
    const {LivePeers} = getState()
    Object.values(LivePeers).map(peer => {
      if(!peer || peer === sender) return
      peer.write(res)
    })
  }
}

export function removePeer(host){
  return {
    type: DELETE,
    host
  }
}

export function createPeer(peer, preHost){
  return (dispatch, getState) => {
    const host = preHost || peer.remoteAddress.replace(/^.*:/, '')

    peer.on('data', (r) => {
      try {
        const res = r.toString()
        const data = JSON.parse(res)

        if(!data.message) return

        const {Messages} = getState()
        if(!Messages[data.id]){
          dispatch(MessageActions.createMessage(data))
          dispatch(broadcast(res, peer))
        }
      } catch(err) {
        console.log('Invalid Message Received')
      }
    })

    peer.on('error', () => {
      dispatch(removePeer(host))
    })

    peer.on('end', () => {
      dispatch(removePeer(host))
    })

    dispatch({ type: CREATE, host, peer })
  }
}
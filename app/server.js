import net from 'net'
import store from './store'
import {actions as PeerActions} from './resources/LivePeers'

export default net.createServer((peer) => {
  store.dispatch(PeerActions.createPeer(peer))
}).listen(1995)
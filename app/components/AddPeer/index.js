import {compose, withState} from 'recompose'
import {connect} from 'react-redux'
import {actions as PeerActions} from '../../resources/LivePeers'
import net from 'net'

import View from './view'

const mapDispatchToProps = (dispatch, {host}) => ({
  onSubmit: (e) => {
    e.preventDefault()
    const peer = net.connect({ host, port: 1995 })
    dispatch(PeerActions.createPeer(peer, host))
  }
})

export default compose(
  withState('host', 'updateHost', ''),
  connect(null, mapDispatchToProps)
)(View)
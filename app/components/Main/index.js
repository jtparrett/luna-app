import {compose, branch, renderComponent} from 'recompose'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'

import Session from '../Session'
import Home from '../Home'

const getPeers = (state) => state.LivePeers 

const getIsConnected = createSelector(getPeers, (peers) => {
  return Object.values(peers).some(peer => peer)
})

const mapStateToProps = (state) => ({
  isConnected: getIsConnected(state)
})

export default compose(
  connect(mapStateToProps),
  branch(
    ({isConnected}) => isConnected,
    renderComponent(Home)
  )
)(Session)
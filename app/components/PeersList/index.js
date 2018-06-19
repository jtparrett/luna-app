import {compose} from 'recompose'
import {connect} from 'react-redux'

import View from './view'

const mapStateToProps = (state) => ({
  peers: Object.keys(state.LivePeers)
})

export default compose(
  connect(mapStateToProps)
)(View)
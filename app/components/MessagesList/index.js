import {compose} from 'recompose'
import {connect} from 'react-redux'

import View from './view'

const mapStateToProps = (state) => ({
  messages: Object.values(state.Messages)
})

export default compose(
  connect(mapStateToProps)
)(View)
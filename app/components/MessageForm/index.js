import {compose, withState} from 'recompose'
import {connect} from 'react-redux'

import {actions as MessageActions} from '../../resources/Messages'
import View from './view'

const mapDispatchToProps = (dispatch, {message, updateMessage}) => ({
  onSubmit: (e) => {
    e.preventDefault()
    dispatch(MessageActions.sendMessage(message))
    updateMessage('')
  }
})

export default compose(
  withState('message', 'updateMessage', ''),
  connect(null, mapDispatchToProps)
)(View)
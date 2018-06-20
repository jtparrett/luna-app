import {compose, withState} from 'recompose'
import {connect} from 'react-redux'
import {actions as AuthActions} from '../../resources/Auth'

import View from './view'

const mapDispatchToProps = (dispatch, {secretKey}) => ({
  onSubmit: (e) => {
    e.preventDefault()
    dispatch(AuthActions.auth(secretKey))
  }
})

export default compose(
  withState('secretKey', 'updateSecretKey'),
  connect(null, mapDispatchToProps)
)(View)
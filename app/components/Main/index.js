import {compose, branch, renderComponent} from 'recompose'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'

import Session from '../Session'
import Home from '../Home'

const mapStateToProps = (state) => ({
  sessionExists: state.Auth.RSASession
})

export default compose(
  connect(mapStateToProps),
  branch(
    ({sessionExists}) => sessionExists,
    renderComponent(Home)
  )
)(Session)
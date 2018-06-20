import {compose, withHandlers} from 'recompose'
import {connect} from 'react-redux'
import {clipboard} from 'electron'

import View from './view'

const mapStateToProps = (state) => ({
  RSASession: state.Auth.RSASession
})

export default compose(
  connect(mapStateToProps),
  withHandlers({
    copyKey: ({RSASession}) => () => {
      const key = RSASession.exportKey('public')
      clipboard.writeText(key)
    }
  })
)(View)
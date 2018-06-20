import {compose, withState, withHandlers} from 'recompose'
import NodeRSA from 'node-rsa'

import View from './view'

export default compose(
  withState('RSAKey', 'updateRSAKey'),
  withHandlers({
    onSubmit: ({updateRSAKey}) => (e) => {
      e.preventDefault()
      const key = new NodeRSA({b:1024})
      updateRSAKey(key.exportKey('private'))
    }
  })
)(View)
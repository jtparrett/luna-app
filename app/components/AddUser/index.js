import {compose, withState} from 'recompose'
import {connect} from 'react-redux'
import NodeRSA from 'node-rsa'

import {actions as MessageActions} from '../../resources/Messages'
import View from './view'

const mapDispatchToProps = (dispatch, {publicKey, updatePublicKey}) => ({
  onSubmit: (e) => {
    e.preventDefault()
    try {
      if(!publicKey){
        throw 'Invalid Public Key'
        return
      }

      const key = new NodeRSA(publicKey)
      if(!key.isPublic()){
        throw 'Invalid Public Key'
        return
      }

      dispatch(MessageActions.sendMessage('New Connection...', key))
    } catch (err){
      console.error(err)
    }
  }
})

export default compose(
  withState('publicKey', 'updatePublicKey'),
  connect(null, mapDispatchToProps)
)(View)
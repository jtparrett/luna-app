import {compose} from 'recompose'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'

import View from './view'

const getMessages = (state) => Object.values(state.Messages)
const getAuth = (state) => state.Auth

const getOwnMessages = createSelector(getMessages, getAuth, (messages, auth) => {
  const key = auth.RSASession.exportKey('public').toString()

  return messages.filter(message => {
    return message.from === key || message.to === key
  }).map(message => {
    return auth.RSASession.decrypt(Buffer.from(message.message)).toString()
  })
})

const mapStateToProps = (state) => ({
  messages: getOwnMessages(state)
})

export default compose(
  connect(mapStateToProps)
)(View)
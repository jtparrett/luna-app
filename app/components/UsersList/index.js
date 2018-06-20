import {compose} from 'recompose'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'

import View from './View'

const getMessages = (state) => Object.values(state.Messages)
const getAuth = (state) => state.Auth

const getUsers = createSelector(getMessages, getAuth, (messages, auth) => {
  const publicKey = auth.RSASession.exportKey('public')

  return messages.filter(message => {
    return message.from === publicKey || message.to === publicKey
  }).map(message => {
    return message.from === publicKey ? message.to : message.from
  })
})

const mapStateToProps = (state) => ({
  users: getUsers(state)
})

export default compose(
  connect(mapStateToProps)
)(View)
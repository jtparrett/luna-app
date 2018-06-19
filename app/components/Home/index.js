import React from 'react'
import injectSheet from 'react-jss'

import MessagesList from '../MessagesList'
import MessageForm from '../MessageForm'
import PeersList from '../PeersList'

const styles = {
  main: {
    display: 'flex'
  },
  screen: {
    flex: 1
  },
  messageForm: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  }
}

const View = ({classes}) => (
  <div className={classes.main}>
    <div className={classes.screen}>
      <div className={classes.messageForm}>
        <MessagesList />
        <MessageForm />
      </div>
    </div>
    <PeersList />
  </div>
)

export default injectSheet(styles)(View)
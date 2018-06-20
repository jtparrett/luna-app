import React from 'react'
import injectSheet from 'react-jss'

import Button from '../Button'
import MessagesList from '../MessagesList'
import MessageForm from '../MessageForm'
import PeersList from '../PeersList'
import AddPeer from '../AddPeer'
import UsersList from '../UsersList'
import AddUser from '../AddUser'

const styles = {
  main: {
    display: 'flex'
  },
  aside: {
    height: '100vh',
    width: 200,
    padding: 15,
    boxSizing: 'border-box',
    overflow: 'auto'
  },
  screen: {
    width: 'calc(100% - 200px)',
    borderLeft: '1px solid #ddd'
  },
  messageForm: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  }
}

const View = ({classes, copyKey}) => (
  <div className={classes.main}>
    <div className={classes.aside}>
      <Button title="Copy Public key" onClick={copyKey} />
      <AddUser />
      <UsersList />
      <AddPeer />
      <PeersList />
    </div>
    <div className={classes.screen}>
      <div className={classes.messageForm}>
        <MessagesList />
        <MessageForm />
      </div>
    </div>
  </div>
)

export default injectSheet(styles)(View)
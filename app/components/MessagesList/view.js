import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  main: {
    flex: 1,
    overflow: 'auto',
    padding: 10
  },
  message: {
    margin: 0,
    fontSize: 12,
    padding: 5
  }
}

const View = ({messages, classes}) => (
  <div className={classes.main}>
    { messages.map((message, i) => (
      <p className={classes.message} key={i}>{message}</p>
    ))}
  </div>
)

export default injectSheet(styles)(View)
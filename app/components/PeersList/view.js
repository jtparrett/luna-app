import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  main: {
    width: 150,
    padding: 15,
    borderLeft: '1px solid #ddd'
  },
  peer: {
    fontSize: 14,
    margin: 0
  }
}

const View = ({classes, peers}) => (
  <div className={classes.main}>
    { peers.map((host, i) => (
      <p key={i} className={classes.peer}>{host}</p>
    ))}
  </div>
)

export default injectSheet(styles)(View)
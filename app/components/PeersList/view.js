import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  peer: {
    fontSize: 14,
    margin: 0
  }
}

const View = ({classes, peers}) => (
  <div>
    { peers.map((host, i) => (
      <p key={i} className={classes.peer}>{host}</p>
    ))}
  </div>
)

export default injectSheet(styles)(View)
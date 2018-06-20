import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  main: {
    backgroundColor: '#FB4D4B',
    border: '0',
    borderRadius: 5,
    fontSize: 12,
    padding: [10, 30],
    color: '#fff',
    outline: 'none',
    display: 'inline-block',
    '&:active': {
      backgroundColor: '#333'
    }
  }
}

const View = ({title, classes, ...props}) => (
  <button className={classes.main} {...props}>{title}</button>
)

export default injectSheet(styles)(View)
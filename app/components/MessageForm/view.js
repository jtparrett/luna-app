import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  main: {
    borderTop: '1px solid #ddd'
  },
  input: {
    padding: 15,
    outline: 'none',
    border: 'none',
    width: '100%',
    fontSize: 12
  },
  button: {
    display: 'none'
  }
}

const View = ({ onSubmit, updateMessage, message, classes }) => (
  <form onSubmit={onSubmit} className={classes.main}>
    <input className={classes.input} autoFocus onChange={(e) => updateMessage(e.target.value)} value={message} />
    <button className={classes.button} type="submit">Send</button>
  </form>
)

export default injectSheet(styles)(View)
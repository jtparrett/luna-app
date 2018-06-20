import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  label: {
    fontSize: 12,
    display: 'block',
    paddingBottom: 5
  },
  input: {
    border: '1px solid #ddd',
    outline: 'none',
    borderRadius: 3,
    padding: 5,
    fontSize: 14
  }
}

const View = ({classes, label, ...props}) => (
  <div>
    { label &&
      <label className={classes.label}>{label}</label>
    }
    <input {...props} className={classes.input} />
  </div>
)

export default injectSheet(styles)(View)
import React from 'react'
import {compose, lifecycle} from 'recompose'
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
    padding: 5,
    wordWrap: 'break-word'
  }
}


let foot
let main

const View = ({messages, classes}) => (
  <div className={classes.main} ref={el => main = el}>
    { messages.map((message, i) => (
      <p className={classes.message} key={i}>{message}</p>
    ))}
    <div ref={el => foot = el} />
  </div>
)

export default compose(
  injectSheet(styles),
  lifecycle({
    componentDidMount(){
      foot.scrollIntoView()
    },
    componentDidUpdate(){
      if(main.scrollTop >= (main.scrollHeight - main.clientHeight) - 100){
        foot.scrollIntoView()
      }
    }
  })
)(View)
import React from 'react'
import {compose} from 'recompose'
import injectSheet from 'react-jss'
import {Provider} from 'react-redux'

import Server from '../../server'
import store from '../../store'
import Main from '../Main'

const styles = {
  '@global': {
    '@font-face': [{
      fontFamily: 'Open Sans',
      fontWeight: 700,
      src: 'url("assets/fonts/OpenSans-Bold.ttf")'
    },{
      fontFamily: 'Open Sans',
      fontWeight: 400,
      src: 'url("assets/fonts/OpenSans-Regular.ttf")'
    }],
    body: {
      margin: 0,
      fontFamily: 'Open Sans, Arial, sans-serif'
    }
  }
}

const App = ({classes}) => (
  <Provider store={store}>
    <Main />
  </Provider>
)

export default compose(
  injectSheet(styles)
)(App)
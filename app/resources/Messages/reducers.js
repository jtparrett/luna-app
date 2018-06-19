import {CREATE} from './types'

export default (state = {}, {type, id, message}) => {

  if(type === CREATE){
    return Object.assign({}, state, {
      [id]: message
    })
  }

  return state
}
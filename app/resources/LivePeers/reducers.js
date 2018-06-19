import {CREATE, DELETE} from './types'

export default (state = {}, {type, host, peer}) => {
  if(type === CREATE){
    return Object.assign({}, state, {
      [host]: peer
    })
  }

  if(type === DELETE){
    const update = Object.assign({}, state)
    delete update[host]
    return update
  }

  return state
}
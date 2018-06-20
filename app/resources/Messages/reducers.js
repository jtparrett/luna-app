import {CREATE} from './types'

export default (state = {}, {type, id, ...data}) => {

  if(type === CREATE){
    return Object.assign({}, state, {
      [id]: {
        id,
        ...data
      }
    })
  }

  return state
}
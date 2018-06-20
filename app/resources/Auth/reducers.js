import {CREATE} from './types'

export default (state = {}, {type, RSASession}) => {
  if(type === CREATE){
    return { RSASession }
  }

  return state
}
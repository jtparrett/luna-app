import NodeRSA from 'node-rsa'
import {CREATE} from './types'

export function auth(secretKey){
  return (dispatch) => {
    try {
      if(!secretKey){
        throw 'Invalid Token'
      }

      const RSASession = new NodeRSA(secretKey)

      if(!RSASession.isPrivate()){
        throw 'Invalid Token'
      }

      dispatch({
        type: CREATE,
        RSASession
      })
    } catch (err){
      console.error(err)
    }
  }
}
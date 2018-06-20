import React from 'react'
import {Link} from 'react-router-dom'

import Textarea from '../Textarea'
import Button from '../Button'

export default ({onSubmit, updateSecretKey, secretKey}) => (
  <form onSubmit={onSubmit}>
    <Textarea onChange={(e) => updateSecretKey(e.target.value)} label={'Secret key'} />
    <Button type="submit" title="Login" />
    <Link to={'/register'}>Don't have a secret key?</Link>
  </form>
)
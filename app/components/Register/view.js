import React from 'react'
import {Link} from 'react-router-dom'

import Textarea from '../Textarea'
import Button from '../Button'

export default ({RSAKey, onSubmit}) => (
  <form onSubmit={onSubmit}>
    <p>Your secret key is your account, use it to login and decrypt messages. Don't lose it, as it cannot be replaced.</p>
    <Button type={'submit'} title="Generate a new secret key" />
    {RSAKey &&
      <Textarea readOnly value={RSAKey} />
    }
    <Link to={'/'}>Return to Login</Link>
  </form>
)
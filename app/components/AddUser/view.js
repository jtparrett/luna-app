import React from 'react'

import Input from '../Input'
import Button from '../Button'

export default ({onSubmit, updatePublicKey, publicKey}) => (
  <form onSubmit={onSubmit}>
    <Input label={'Add User Public Key'} onChange={(e) => updatePublicKey(e.target.value)} />
    <Button title="Add User" />
  </form>
)
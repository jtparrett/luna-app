import React from 'react'

import Input from '../Input'
import Button from '../Button'

export default ({onSubmit, updateHost, host}) => (
  <form onSubmit={onSubmit}>
    <Input autoFocus onChange={(e) => updateHost(e.target.value)} label={'Peer i.p'} />
    <Button type="submit" title="Connect" />
  </form>
)
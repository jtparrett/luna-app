import React from 'react'

export default ({onSubmit, updateHost, host}) => (
  <form onSubmit={onSubmit}>
    <label>Known Host i.p</label>
    <input autoFocus onChange={(e) => updateHost(e.target.value)} value={host} />
    <button type="submit">Join</button>
  </form>
)
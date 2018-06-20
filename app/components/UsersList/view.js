import React from 'react'

export default ({users}) => (
  <div>
    { users.map((user, i) => (
      <p key={i}>{user}</p>
    ))}
  </div>
)
import React from 'react'

export default ({ error }) => {
  if (!error) return null;

  return (
    <p style={{ color: "#f31", margin: "1rem 0px" }}>
      {error}
    </p>
  )
}

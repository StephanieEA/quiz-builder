import React from 'react'

const Button = ({onClick, text, name, className}) =>
  <button onClick={onClick}
          className={className}
          name={name}>
    {text}
  </button>

export default Button

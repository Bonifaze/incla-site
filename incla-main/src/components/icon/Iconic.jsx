import React from 'react'

const Iconic = ({Icon, text, className}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}><p>{text}</p></div>
  )
}

export default Iconic
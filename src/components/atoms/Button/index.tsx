import React from 'react'

type PropTypes = {
  children: string
  onClick: () => void
  type?: 'button' | 'submit'
}

function Button({ children, onClick, type = 'button' }: PropTypes) {
  return (
    <button
      className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button

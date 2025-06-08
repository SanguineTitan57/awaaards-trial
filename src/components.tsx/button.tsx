import React from 'react'

interface ButtonProps {
  id?: string
  title: string
  leftIcon?: React.ReactNode
  containerClass?: string
}

const Button: React.FC<ButtonProps> = ({ id, title, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer rounded-full overflow-hidden px-7 py-3 text-black flex items-center gap-2 ${containerClass}`}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      <span className='font-general text-xs uppercase'>{title}</span>
    </button>
  )
}

export default Button
import React, { FC } from 'react'
import './Button.css'
interface ButtonProps
{
    text: string
  type?: | "reset" | "submit" | "button"
  onClick?:()=>void
}

export const Button:FC<ButtonProps> = ({text, type="button",onClick}) => {
  return (
      <button onClick={onClick} type={type}>{ text}</button>
  )
}

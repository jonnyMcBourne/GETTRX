import React, { FC } from 'react'
import './Button.css'
interface ButtonProps
{
    text: string
    type?: | "reset" | "submit" | "button"
}

export const Button:FC<ButtonProps> = ({text, type="button"}) => {
  return (
      <button type={type}>{ text}</button>
  )
}

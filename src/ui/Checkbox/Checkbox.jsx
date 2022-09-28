import cn from "classnames"
import { useState } from "react"
import s from "./Checkbox.module.scss"
import Chevron from "./chevron.svg"
export const Checkbox = ({ name, text, className, ...props }) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div
      className={cn(s.wrap, className)}
      onClick={() => {
        setIsChecked(!isChecked)
      }}
    >
      <input
        checked={isChecked}
        {...props}
        className={s.input}
        type="checkbox"
        name={name}
      />
      <span
        className={cn(s.checkbox, {
          [s.active]: isChecked,
        })}
      >
        <Chevron />
      </span>
      {text && <p>{text}</p>}
    </div>
  )
}

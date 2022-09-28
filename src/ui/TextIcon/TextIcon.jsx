import cn from "classnames"
import s from "./TextIcon.module.scss"
// Icons
import Hat from "./dz.svg"
import Clock from "./time.svg"

export const TextIcon = ({ text, value, icon, className, ...props }) => {
  return (
    <div className={cn(s.wrap, className)}>
      <div className={s.icon}>
        <Hat />
      </div>
      {text && <p className={s.text}>{text}</p>}
      {value && <p className={s.value}>{value}</p>}
    </div>
  )
}

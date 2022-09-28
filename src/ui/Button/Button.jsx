import cn from "classnames"
import s from "./Button.module.scss"

export const Button = ({
  children,
  className,
  size,
  style,
  type,
  ...props
}) => {
      return (
        <button
          className={cn(s.btn, className, {
            [s.outlined]: style === "outlined",
            [s.sm]: size === "sm",
          })}
          {...props}
        >
          {children}
        </button>
      )
}

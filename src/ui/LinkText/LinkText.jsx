import cn from "classnames"
import s from "./LinkText.module.scss"
import Link from "next/link"

export const LinkText = ({ children, href, className }) => {
  return (
    <Link href={href}>
      <a className={cn(s.link, className)}>{children}</a>
    </Link>
  )
}

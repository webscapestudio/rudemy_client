import s from "./Backlink.module.scss"
import Chevron from "./Chevron.svg"
import { useRouter } from "next/router"
import cn from "classnames"

export const Backlink = ({ className }) => {
  const router = useRouter()
  const back = () => {
    router.back()
  }
  return (
    <div className={cn(s.backlink, className)} onClick={back}>
      <Chevron />
      <p>Назад</p>
    </div>
  )
}

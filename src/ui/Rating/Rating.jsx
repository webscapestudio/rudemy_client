import cn from "classnames"
import Link from "next/link"
import s from "./Rating.module.scss"
import Star from "./star.svg"

export const Rating = ({ rate, count, reviews }) => {
  return (
    <div className={s.wrap}>
      <div className={s.rating}>
        <Star className={s.star} />
        <Star className={s.star} />
        <Star className={s.star} />
        <Star className={s.star} />
        <Star className={s.star} />
      </div>

      {count && <p className={s.count}>({count})</p>}
      {reviews && (
        <Link href="#reviews">
          <p className={s.reviews}>
            <span>(</span>
            {reviews} отзывов<span>)</span>
          </p>
        </Link>
      )}
    </div>
  )
}

import cn from "classnames"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../../ui"
import s from "./Card.module.scss"
import image from "./img.jpg"
import StarIcon from "./star.svg"

export const Card = () => {
  return (
    <div className={s.card}>
      <Link href="/product/1">
        <a className={s.image}>
          <Image src={image} alt={"course title"} layout="responsive" />
        </a>
      </Link>

      <div className={s.inner}>
        <h3 className={s.title}>Java для полнейших чайников и чашек</h3>

        <div className={s.type__wrap}>
          <p className={s.type}>Курс</p>
          <p className={s.students}>14 000 учеников</p>
        </div>

        <p className={s.description}>
          Краткое описание курса, которое мб будет занимать макисмум три строки,
          а может и меньше, но точно не больше трех строк, хотя кто бы знал
        </p>

        <div className={s.info}>
          <div className={s.info__left}>
            <p className={s.lessons}>10 уроков</p>
            <Link href="/user/1">
              <a className={s.author}>Иван Пупкин</a>
            </Link>
            <p className={s.reviews}>1 000 отзывов</p>
          </div>
          <div className={s.info__right}>
            <p className={s.old__price}>5 000 руб</p>
            <p className={s.price}>3 000 руб</p>
            <div className={s.rev}>0 0 0 0 0(4,2)</div>
          </div>
        </div>

        <div className={s.footer}>
          <Button className={s.buy} style="accent">
            Купить
          </Button>
          <button className={cn(s.favorite)}>
            <StarIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

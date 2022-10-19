import s from "./HeroProduct.module.scss"
import Image from "next/image"
import Img from "./img.jpg"
import { Rating } from "../../ui"
import Link from "next/link"
import { priceSpace } from "../../helpers/priceFormat"

export const HeroProduct = () => {
  // TODO: Доделать рейтинг
  return (
    <div className={s.card}>
      <div className={s.left}>
        <Image src={Img} layout="responsive" alt="Название курса" />
      </div>

      <div className={s.info}>
        <h3 className={s.title}>Java для полнейших чайников и чашек</h3>

        <div className={s.info__row}>
          <div className={s.type}>Курс</div>

          <div className={s.students}>14 000 учеников</div>
        </div>

        <p className={s.description}>
          Краткое описание курса, которое мб будет занимать макисмум три строки,
          а может и меньше, но точно не больше трех строк, хотя кто бы знал
        </p>

        <div className={s.bottom}>
          <div className={s.bottom__left}>
            <Rating count={4.3} />
            <Link href={"/author"}>
              <a className={s.author}>Иван Пупкин</a>
            </Link>
          </div>

          <div className={s.bottom__right}>
            <p className={s.price__old}>{priceSpace(5000)} руб</p>
            <p className={s.price}>{priceSpace(3000)} руб</p>
          </div>
        </div>
      </div>
    </div>
  )
}

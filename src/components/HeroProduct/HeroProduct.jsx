import s from "./HeroProduct.module.scss"
import Image from "next/image"
import Img from "./img.jpg"

export const HeroProduct = () => {
  return (
    <div className={s.card}>
      <div className={s.left}>
        <Image src={Img} layout="responsive" alt="Название курса" />
      </div>

      <div className={s.info}>
        <h3 className={s.title}>Java для полнейших чайников и чашек</h3>

        <div className={s.info__row}>
          <div className={s.type}>курс</div>

          <div className={s.students}>14 000 учеников</div>
        </div>

        <p className={s.description}>
          Краткое описание курса, которое мб будет занимать макисмум три строки,
          а может и меньше, но точно не больше трех строк, хотя кто бы знал
        </p>

        <div className={s.bottom}></div>
      </div>
    </div>
  )
}

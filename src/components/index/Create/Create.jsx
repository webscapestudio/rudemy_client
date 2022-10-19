import s from "./Create.module.scss"
import CreateTeacherImg from "../../../../public/images/CreateTeacherImg.png"
import CreateStudentImg from "../../../../public/images/CreateStudentImg.png"
import Image from "next/image"
import { Button, Title } from "../../../ui"
import Link from "next/link"

export const CreateSection = () => {
  return (
    <section className={s.create}>
      <div className="container">
        <div className={s.create__wrap}>
          <div className={s.create__item}>
            <Title tag="h3" className={s.title}>
              Создавай, обучай, зарабатывай
            </Title>
            <p>
              Rudemy создана для того, что бы ты мог создавать и продвигать свои
              авторские курсы легко и эффективно. Мы разработали инновационный
              интерфейс который позволит тебе создавать именно тот контент,
              который ты считаешь нужным.{" "}
            </p>
            <Link href="/login">
              <Button className={s.create__item_btn}>Стать творцом</Button>
            </Link>
            <div className={s.create__item_img}>
              <Image
                src={CreateTeacherImg}
                layout="responsive"
                alt="Создавай, обучай, зарабатывай"
              />
            </div>
          </div>
          <div className={s.create__item}>
            <Title tag="h3" className={s.title}>
              Получай новые знания
            </Title>
            <p>
              Если ты хочешь получить новые знания – ты нашел нужную платформу.
              Зарегестрировавшись на rudemy, ты получишь доступ к огромному
              количеству курсов и гарантированно качественному контент от
              мастеров в своей сфере.
            </p>

            <Link href="/login">
              <Button className={s.create__item_btn}>Стать учеником</Button>
            </Link>

            <div className={s.create__item_img}>
              <Image
                src={CreateStudentImg}
                layout="responsive"
                alt="Получай новые знания"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

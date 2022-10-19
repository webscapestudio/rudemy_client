import { Title } from "../../../ui"
import s from "./How.module.scss"

export const HowSection = () => {
  return (
    <section className={s.how}>
      <div className="container">
        <Title tag="h2">Как это работает</Title>
        <p className={s.subtitle}>
          Посмотрите короткое видео о том, как работает наш сервис. Вы воочию
          сможете оценить все удобства и преимущства.
        </p>

        <div className={s.how__video}>
          <video loop autoPlay muted>
            <source src="./how.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}

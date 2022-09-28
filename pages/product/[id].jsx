import Head from "next/head"
import Link from "next/link"
import ProductLayout from "../../src/layouts/ProductLayout"
import { Backlink, Rating, TextIcon, Title } from "../../src/ui"
import s from "./index.module.scss"

export default function Product() {
  return (
    <>
      <Head>
        <title>Название курса</title>
      </Head>
      <ProductLayout>
        <section className={s.top}>
          <div className="container">
            <Backlink />
          </div>
        </section>

        <section className={s.section}>
          <div className="container">
            <div className={s.wrap}>
              <div className={s.left}>
                <Title tag="h2">Тестирование ПО для начинающих.</Title>
                <div className={s.main__info}>
                  <div className={s.row}>
                    <Rating rate={3} count={3.7} reviews={1000} />
                    <TextIcon text="Студентов:" value="4 000" />
                    <TextIcon text="Количество уроков:" value="32" />
                  </div>

                  <div className={s.row}>
                    <div className={s.row__info}>
                      <p>Уровень: </p>
                      <p>Начальный </p>
                    </div>
                    <div className={s.row__info}>
                      <p>Последнее обновление: </p>
                      <p>15.05.2022 </p>
                    </div>
                    <div className={s.row__info}>
                      <p>Автор: </p>
                      <Link href="/author/1">
                        <a className={s.row__athor}>Вася Пупкин</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.card}></div>
            </div>
          </div>
        </section>
      </ProductLayout>
    </>
  )
}

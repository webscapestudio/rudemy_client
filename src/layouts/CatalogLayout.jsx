import cn from "classnames"
import { Filter, Footer, Header } from "../components"
import { Title } from "../ui"
import s from "./Catalog.module.scss"

export default function CatalogLayout({ children }) {
  return (
    <>
      <Header />
      <main className={cn("main")}>
        <div className="container">
          <section className={s.top}>
            <Title tag="h2">Каталог</Title>
            <div className={s.catalog__list}></div>
          </section>

          <Title tag="h2">Поиск по категории “Разработка”</Title>
          <div className={cn("wrap", s.catalog)}>
            <Filter />
            <div className={s.content}>{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

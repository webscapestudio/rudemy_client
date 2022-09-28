import Link from "next/link"
import { useSelector } from "react-redux"
import { AuthApi } from "../../config/api"
import { Button } from "../../ui"
import s from "./Header.module.scss"
import Logo from "./Logo.svg"

export const Header = () => {
  const user = useSelector((state) => state.user.data)
  console.log(user)

  const pages = [
    { id: 1, title: "Каталог", link: "/catalog" },
    { id: 2, title: "Авторы", link: "/authors" },
    { id: 3, title: "Как это работает", link: "#howitworks" },
    { id: 4, title: "Наши преимущества", link: "#features" },
    { id: 5, title: "FAQ", link: "#faq" },
  ]
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__wrap}>
          <Link href="/">
            <a className={s.logo}>
              <Logo />
            </a>
          </Link>

          <nav className={s.header__nav}>
            <ul className={s.header__nav_items}>
              {pages.map((item) => (
                <li key={item.id}>
                  <Link href={item.link}>
                    <a className={s.link}>{item.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {user ? (
            <div className={s.header__btn}>
              <Link href="/profile">
                <a href="">
                  <Button size="sm">Личный кабинет</Button>
                </a>
              </Link>

              <Button size="sm" style="outlined" onClick={AuthApi.logout}>
                Выйти
              </Button>
            </div>
          ) : (
            <div className={s.header__btn}>
              <Link href="/login">
                <Button size="sm">Вход</Button>
              </Link>

              <Link href="/registration">
                <Button size="sm" style="outlined">
                  Регистрация
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

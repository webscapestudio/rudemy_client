import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"
import s from "./aside.module.scss"
import ava from "./ava.jpg"
import BookIcon from "./book.svg"
import GearIcon from "./settings.svg"
import StarIcon from "./star.svg"

export const Aside = () => {
  const userData = useSelector((state) => state.user.data)
  console.log(userData)
  const links = [
    { id: 1, title: "Мои курсы", icon: <BookIcon />, link: "/profile/courses" },
    {
      id: 2,
      title: "Избранное",
      icon: <StarIcon />,
      link: "/profile/favorites",
    },
    {
      id: 3,
      title: "Настройки",
      icon: <GearIcon />,
      link: "/profile/settings",
    },
    {
      id: 4,
      title: "Новый курс",
      icon: <GearIcon />,
      link: "/profile/courses/new",
    },
  ]
  return (
    <aside className={s.aside}>
      <div className={s.user}>
        <div className={s.user__wrap}>
          <div className={s.user__avatar}>
            <Image
              src={ava}
              width={80}
              height={80}
              className={s.user__avatar_img}
            />
          </div>

          {userData && (
            <div className={s.user__info}>
              <p>{userData.firstName}</p>
              <p>{userData.lastName}</p>
              <div className={s.user__role}>{userData?.roles?.description}</div>
            </div>
          )}
        </div>
      </div>

      <div className={s.hr}></div>

      <nav className={s.nav}>
        <ul>
          {links.map((i) => (
            <li key={i.id}>
              <Link className={s.link} href={i.link}>
                <a className={s.link__wrap}>
                  {i.icon}
                  <p>{i.title}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

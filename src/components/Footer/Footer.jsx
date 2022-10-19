import Link from "next/link"
import s from "./Footer.module.scss"
import Logo from "./Logo.svg"
import VkLogo from "./vk.svg"
import TgLogo from "./tg.svg"

export const Footer = () => {
  const footerLinks = [
    { id: 1, link: "/about", title: "О компании" },
    { id: 2, link: "/policy", title: "Политика конфиденциальности" },
    { id: 3, link: "/oferta", title: "Оферта" },
  ]
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.top}>
          <div className={s.left}>
            <Link href="/">
              <a className={s.logo}>
                <Logo />
              </a>
            </Link>

            <nav className={s.nav}>
              {footerLinks &&
                footerLinks.map((item) => (
                  <Link href={item.link} key={item.id}>
                    <a className={s.link}>{item.title}</a>
                  </Link>
                ))}
            </nav>
          </div>

          <div className={s.right}>
            <Link href="https://t.me/rudemy">
              <a target="_blank">
                <VkLogo />
              </a>
            </Link>

            <Link href="https://t.me/rudemy">
              <a target="_blank">
                <TgLogo />
              </a>
            </Link>

            <Link href="mailto:office@rudemy.com">
              <a target="_blank">suppot@rudemy.com</a>
            </Link>
          </div>
        </div>

        <div className={s.bot}>
          <div className={s.bot__inner}>
            <Link href="https://webscape.site/">
              <a className={s.ws} target="_blank">
                Разработано в{" "}
                <span>
                  webScape<span>.</span>
                </span>
              </a>
            </Link>
            <p className={s.copyright}>© 2022 Rudemy</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

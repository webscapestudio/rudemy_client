import { Footer, Header } from "../components"
import s from "./ProductLayout.module.scss"

export default function ProductLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

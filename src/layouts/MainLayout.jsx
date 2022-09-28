import { Footer, Header } from "../components"
import { Aside } from "../components/Aside/Aside"
import { Backlink, Title } from "../ui"

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          {/* <Backlink />
          <Title className="title" tag="h2">
            Привет
          </Title> */}
          <div className="wrap">
            <Aside />
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

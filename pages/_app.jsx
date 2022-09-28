import "normalize.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "../styles/globals.scss"
import { wrapper } from "../src/redux/store.js"
import { AuthApi } from "../src/config/api"
import { setUserData } from "../src/redux/slices/user"
import { parseCookies } from "nookies"

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

App.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ ctx, Component }) => {
      try {
        const { rdtoken } = parseCookies(ctx)
        const userData = await AuthApi.getMe(rdtoken)
        store.dispatch(setUserData(userData))
      } catch (err) {
        console.log(err)
        return {
          props: {},
        }
      }

      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps({ ...ctx, store })
          : {},
      }
    }
)

export default wrapper.withRedux(App)

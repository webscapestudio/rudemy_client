import "normalize.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "../styles/globals.scss"
import { store } from "../src/redux/store.js"
import { Provider } from "react-redux"

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

// App.getInitialProps = wrapper.getInitialAppProps(
//   (store) =>
//     async ({ ctx, Component }) => {
//       try {
//         const { rdtoken } = parseCookies(ctx)
//         const userData = await AuthApi.getMe(rdtoken)
//         store.dispatch(setUserData(userData))
//       } catch (err) {
//         console.log(err)
//         return {
//           props: {},
//         }
//       }

//       return {
//         pageProps: Component.getInitialProps
//           ? await Component.getInitialProps({ ...ctx, store })
//           : {},
//       }
//     }
// )

export default App

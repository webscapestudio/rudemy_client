import s from "../auth.module.scss"
import { Button, Input, LinkText, Title } from "../../src/ui"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { fetchLogin } from "../../src/redux/slices/userSlice"
import { useRouter } from "next/router"
import caimg from "./password-change-png.png"
import { AuthApi } from "../../src/config/api"
import { setCookie } from "nookies"
import { useState } from "react"
import { setUserData } from "../../src/redux/slices/user"

export default function Login() {
  const [errorFromApi, setErrorFromApi] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  })
  const onSubmit = async (data) => {
    try {
      const { access_token, ...userData } = await AuthApi.login(data)
      setCookie(null, "rdtoken", access_token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      })
      dispatch(setUserData(userData))
      router.push("/profile/settings")
    } catch (err) {
      if (err.response) {
        setErrorFromApi(err.response?.data.message)
      }
      console.warn("Ошибка при логине", err)
    }
  }

  return (
    <>
      <div className={s.wrap}>
        <div className={s.left}>
          <Image src="/images/logo.svg" width="153" height="51" />
          <p className={s.left__subtitle}>
            Уникальная платформа для создания и продажи онлайн-курсов.
          </p>
          <Image src={caimg} className={s.image__big} />
        </div>
        <div className={s.info}>
          <div className={s.info__wrap}>
            <Title tag="h2" className={s.title}>
              Войти
            </Title>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
              <Input
                placeholder="Почта"
                type="email"
                errors={
                  errors.email?.type === "required" &&
                  "Поле обязательно для заполнения"
                }
                form={{ ...register("email", { required: true }) }}
              />
              <Input
                placeholder="Пароль"
                type="password"
                errors={
                  errors.password?.type === "required" &&
                  "Поле обязательно для заполнения"
                }
                form={{ ...register("password", { required: true }) }}
              />
              <Button type="submit" className={s.form__button}>
                Войти
              </Button>
              {errorFromApi && <p>{errorFromApi}</p>}
              <div className={s.form__subtext}>
                Еще нет аккаунта?{" "}
                <LinkText href="/registration">
                  Зарегестрируйтесь бесплатно
                </LinkText>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

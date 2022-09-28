import s from "../auth.module.scss"
import { Button, Input, LinkText, Title } from "../../src/ui"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { fetchRegister } from "../../src/redux/slices/userSlice"
import { useRouter } from "next/router"
import VkIcon from "./vk.svg"
import TwIcon from "./tw.svg"
import FbIcon from "./fb.svg"
import YaIcon from "./ya.svg"
import GoogleIcon from "./google.svg"
import Link from "next/link"
import caimg from "./create-account-png.png"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

// import { useHistory } from "react-router-dom"

export default function Registration() {
  let password
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Пароль обязателен к заполнению")
      .min(4, "Пароль должен содержать 8 символов"),
    cpassword: Yup.string()
      .required("Пароли должны совпадать")
      .min(4, "Пароль должен содержать 8 символов")
      .oneOf([Yup.ref("password")], "Пароли не совпадают"),
    email: Yup.string().required("Введите почту"),
  })

  const socialsLinks = [
    { id: 1, icon: <VkIcon /> },
    { id: 2, icon: <TwIcon /> },
    { id: 3, icon: <FbIcon /> },
    { id: 4, icon: <YaIcon /> },
    { id: 5, icon: <GoogleIcon /> },
  ]

  const dispatch = useDispatch()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(formSchema),
  })
  const onSubmit = (data) => {
    dispatch(fetchRegister(data))
    console.log(data)
  }

  return (
    <>
      <div className={s.wrap}>
        <div className={s.left}>
          <Image src="/images/logo.svg" width="153" height="51" />
          <p className={s.left__subtitle}>
            Уникальная платформа для создания <br /> и продажи онлайн-курсов.
          </p>
          <Image src={caimg} className={s.image__big} />
        </div>
        <div className={s.info}>
          <div className={s.info__wrap}>
            <Title tag="h2" className={s.title}>
              Создайте аккаунт
            </Title>
            <p className={s.subtitle}>
              Получите доступ к созданию и покупке курсов
            </p>

            <div className={s.socials}>
              {socialsLinks.map((link) => (
                <p className={s.social} key={link.id}>
                  {link.icon}
                </p>
              ))}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
              <Input
                placeholder="Почта"
                type="email"
                errors={errors.email?.message}
                form={{ ...register("email", { required: true }) }}
              />
              <Input
                placeholder="Пароль"
                type="password"
                errors={errors.cpassword?.message}
                form={{ ...register("password", { required: true }) }}
              />
              <Input
                placeholder="Повторите пароль"
                type="password"
                errors={errors.cpassword?.message}
                form={{
                  ...register("cpassword", {
                    required: true,
                  }),
                }}
              />

              <Button type="submit" className={s.form__button}>
                Войти
              </Button>
              <p className={s.policy}>
                Нажимая кнопку “Зарегестрироваться”, <br /> вы соглашаетесь с
                нашей <Link href="/policy">политикой конфиденциальности</Link>
              </p>
              <div className={s.form__subtext}>
                Уже зарегестрированы? <LinkText href="/login">Войти</LinkText>
              </div>
            </form>

            <Input placeholder="код" />
            <Button>Подтвердить</Button>
          </div>
        </div>
      </div>
    </>
  )
}

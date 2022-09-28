import MainLayout from "../../../src/layouts/MainLayout"
import s from "../profile.module.scss"
import { Button, Input, SelectItem } from "../../../src/ui"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { AuthApi } from "../../../src/config/api"
import { parseCookies } from "nookies"

export default function ProfileSettings() {
  const dispatch = useDispatch()
  const router = useRouter()
  const userData = useSelector((state) => state.user.data)
  const formSchema = Yup.object().shape({
    firstName: Yup.string().min(4, "Поле должно содержать больше 3-х символов"),
    lastName: Yup.string().min(4, "Поле должно содержать больше 3-х символов"),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(formSchema),
  })

  const onSubmit = async (values) => {
    const token = parseCookies()
    const rdtoken = token.rdtoken
    const data = await AuthApi.update(rdtoken, values)
    console.log(data)
  }
  return (
    <MainLayout>
      <section className={s.section}>
        <h1>Профиль</h1>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            title="Имя"
            type="text"
            value={userData?.firstName ? userData.firstName : "Ваше имя"}
            form={{ ...register("firstName") }}
            errors={errors.firstName?.message}
          />
          <Input
            title="Фамилия"
            value={userData?.lastName}
            type="text"
            form={{ ...register("lastName") }}
            errors={errors.lastName?.message}
          />

          <SelectItem
            value={userData?.sex}
            title="Пол"
            form={{ ...register("sex") }}
            errors={errors.lastName?.message}
            options={[
              { value: "Мужской", label: "Мужской" },
              { value: "Женский", label: "Женский" },
            ]}
          />

          <Input
            title="Дата рождения"
            value={userData?.birth}
            type="date"
            form={{ ...register("birth") }}
          />
          <p>
            Получайте скидки на день рождения! (Изменять дату можно не более
            2-ух раз)
          </p>

          <Input
            title="Образование"
            value={userData?.education}
            form={{ ...register("education") }}
          />
          <Input
            title="Место работы"
            value={userData?.workedat}
            form={{ ...register("workedat") }}
          />

          <h1 className={s.title_second}>Основное</h1>

          <Input
            title="Почта"
            value={userData?.email}
            type="mail"
            form={{ ...register("email") }}
            errors={errors.lastName?.message}
          />

          <Input
            title="Телефон"
            value={userData?.phone}
            type="tel"
            form={{ ...register("phone") }}
            errors={errors.lastName?.message}
          />

          <Button type="submit">Сохранить</Button>
        </form>
      </section>
    </MainLayout>
  )
}

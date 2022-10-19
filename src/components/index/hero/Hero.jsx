import Link from "next/link"
import { EffectCoverflow } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { Button, Title } from "../../../ui"
import { HeroProduct } from "../../HeroProduct/HeroProduct"
import s from "./Hero.module.scss"

export const Hero = () => {
  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.hero__wrap}>
          <div className={s.hero__left}>
            <Title tag="h1">
              Маркетплейс <br /> онлайн-курсов
            </Title>
            <p className={s.hero__text}>
              Уникальная платформа для создания и продажи онлайн-курсов.
              создайте свой курс быстро и поделитесь своими знаниями со всем
              миром.
            </p>

            <div className={s.hero__left_btns}>
              <Link href="/catalog">
                <a className={s.catalog__btn}>
                  <Button>Перейти к каталогу</Button>
                </a>
              </Link>

              <Link href="/registration">
                <Button style="outlined">Присоедениться к нам</Button>
              </Link>
            </div>
          </div>

          <div className={s.hero__right}>
            <Swiper
              spaceBetween={0}
              slidesPerView={"auto"}
              effect="coverflow"
              loop={true}
              modules={[EffectCoverflow]}
              pagination={{ clickable: true, dynamicBullets: true }}
              coverflowEffect={{
                rotate: 0,
                stretch: 800,
                depth: 300,
                modifier: 1,
                slideShadows: false,
              }}
            >
              <SwiperSlide>
                <HeroProduct />
              </SwiperSlide>
              <SwiperSlide>
                <HeroProduct />
              </SwiperSlide>
              <SwiperSlide>
                <HeroProduct />
              </SwiperSlide>
              <SwiperSlide>
                <HeroProduct />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

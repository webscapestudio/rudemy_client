import s from "./PopularCourses.module.scss"
import { SliderArrow, Title } from "../../../ui"
import cn from "classnames"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Card } from "../../Card/Card"
import { Navigation } from "swiper"

export const PopularCourses = () => {
  const popularNavigationPrevRef = useRef(null)
  const popularNavigationNextRef = useRef(null)

  return (
    <section className={s.popular}>
      <div className="container">
        <Title tag="h2">Популярные курсы</Title>
        <p className={s.subtitle}>
          Самые популярные курсы на rudemy сейчас. Многие создатели
          присоединились к нашей платформе и уже разместили свои курсы. Мы не
          вводим ограничений на тематику и продолжительность курсов – будьте
          свободны и смелы. Поделитесь своими знаниями с пользователями rudemia.
        </p>

        <div className={s.popular__top}>
          <div className={s.popular__tabs}>
            <div className={cn(s.tab, s.active)}>Все курсы</div>
            <div className={s.tab}>Java</div>
            <div className={s.tab}>HTML</div>
            <div className={s.tab}>Figma</div>
            <div className={s.tab}>C++</div>
            <div className={s.tab}>1C</div>
            <div className={s.tab}>Верстка</div>
            <div className={s.tab}>Дизайн</div>
            <div className={s.tab}>Фото</div>
            <div className={s.tab}>Видео</div>
          </div>
          <div className={s.popular__top_arrows}>
            <div ref={popularNavigationPrevRef}>
              <SliderArrow prev />
            </div>

            <div ref={popularNavigationNextRef}>
              <SliderArrow next />
            </div>
          </div>
        </div>

        <div className={s.popular__slider}>

          <Swiper slidesPerView={4}
                  loop={true}
                  spaceBetween={16}
                  modules={[Navigation]}
                  navigation={{
                    prevEl: popularNavigationPrevRef.current,
                    nextEl: popularNavigationNextRef.current
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = popularNavigationPrevRef.current
                    swiper.params.navigation.nextEl = popularNavigationNextRef.current
                  }}>
              <SwiperSlide><Card /></SwiperSlide>
              <SwiperSlide><Card /></SwiperSlide>
              <SwiperSlide><Card /></SwiperSlide>
              <SwiperSlide><Card /></SwiperSlide>
              <SwiperSlide><Card /></SwiperSlide>
              <SwiperSlide><Card /></SwiperSlide>
              <SwiperSlide><Card /></SwiperSlide>
              <SwiperSlide><Card /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

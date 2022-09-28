import cn from "classnames"
import { Checkbox, Radio, Title } from "../../ui"
import s from "./Filter.module.scss"
import Chevron from "./chevron.svg"

export const Filter = () => {
  return (
    <aside className={s.filter}>
      <div className={s.wrap}>
        <div className={s.filter__item}>
          <div className={s.filter__item_top}>
            <h5 className={s.filter__item_title}>Тип</h5>
            <Chevron />
          </div>
          <ul>
            <li>
              <Checkbox text="Курс" />
            </li>
            <li>
              <Checkbox text="Файл" />
            </li>
            <li>
              <Checkbox text="Вебинар" />
            </li>
          </ul>
        </div>

        <div className={s.filter__item}>
          <div className={s.filter__item_top}>
            <h5 className={s.filter__item_title}>Тематика</h5>
            <Chevron />
          </div>
          <ul>
            <li>
              <Checkbox text="Веб-разработка" />
            </li>
            <li>
              <Checkbox text="Обработка и анализ данных" />
            </li>
            <li>
              <Checkbox text="Разработка мобильных приложений" />
            </li>
            <li>
              <Checkbox text="Языки программирования" />
            </li>
            <li>
              <Checkbox text="Разработка игр" />
            </li>
          </ul>
        </div>

        <div className={s.filter__item}>
          <div className={s.filter__item_top}>
            <h5 className={s.filter__item_title}>Подкатегория</h5>
            <Chevron />
          </div>
          <ul>
            <li>
              <Checkbox text="JavaScript" />
            </li>
            <li>
              <Checkbox text="React" />
            </li>
            <li>
              <Checkbox text="Angular" />
            </li>
            <li>
              <Checkbox text="CSS" />
            </li>
            <li>
              <Checkbox text="Node.Js" />
            </li>
          </ul>
        </div>

        <div className={s.filter__item}>
          <div className={s.filter__item_top}>
            <h5 className={s.filter__item_title}>Рейтинг</h5>
            <Chevron />
          </div>
          <ul>
            <li>
              <Radio text="5" name="rating" />
            </li>

            <li>
              <Radio text="4" name="rating" />
            </li>

            <li>
              <Radio text="3" name="rating" />
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}

import s from "./SliderArrow.module.scss"
import Next from "./next.svg"
import Prev from "./prev.svg"

export const SliderArrow = ({ next, prev, className, ...props }) => {
  return (
    <>
      {next && (
        <div className={s.arrow}>
          <Next />
        </div>
      )}

      {prev && (
        <div className={s.arrow}>
          <Prev />
        </div>
      )}
    </>
  )
}

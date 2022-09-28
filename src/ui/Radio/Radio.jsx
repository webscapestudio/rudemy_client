import s from "./Radio.module.scss"

export const Radio = ({ name, className, text, ...props }) => {
  return (
    <div className={s.radio}>
      <input type="radio" name={name} {...props} />
      {text && <p>{text}</p>}
    </div>
  )
}

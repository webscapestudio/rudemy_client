import cn from "classnames"
import s from "./Input.module.scss"
import LockIcon from "./lock.svg"
import MailIcon from "./sms.svg"
import PhoneIcon from "./phone.svg"

export const Input = ({
  placeholder,
  title = false,
  errors = false,
  form,
  type = "text",
  className,
  ...props
}) => {
  switch (type) {
    case "email":
      return (
        <div
          className={cn(s.input, className, {
            [s.input__error]: errors,
          })}
        >
          {title && <span className={s.label}>{title}</span>}
          <div className={s.wrap}>
            <input
              type="text"
              className={s.input__element}
              placeholder={placeholder}
              {...form}
              {...props}
            />

            <div className={s.icon}>
              <MailIcon />
            </div>
          </div>
          <p className={s.message}>{errors}</p>
        </div>
      )

    case "tel":
      return (
        <div
          className={cn(s.input, className, {
            [s.input__error]: errors,
          })}
        >
          {title && <span className={s.label}>{title}</span>}
          <div className={s.wrap}>
            <input
              type="tel"
              className={s.input__element}
              placeholder={placeholder}
              {...form}
              {...props}
            />

            <div className={s.icon}>
              <PhoneIcon />
            </div>
          </div>
          <p className={s.message}>{errors}</p>
        </div>
      )

    case "date":
      return (
        <div
          className={cn(s.input, className, {
            [s.input__error]: errors,
          })}
        >
          {title && <span className={s.label}>{title}</span>}
          <div className={s.wrap}>
            <input
              type="date"
              className={s.input__element}
              placeholder={placeholder}
              {...form}
              {...props}
            />

            <div className={s.icon}>
              <PhoneIcon />
            </div>
          </div>
          <p className={s.message}>{errors}</p>
        </div>
      )

    case "text":
      return (
        <div
          className={cn(s.input, className, {
            [s.input__error]: errors,
          })}
        >
          {title && <span className={s.label}>{title}</span>}
          <div className={s.wrap}>
            <input
              type="text"
              className={s.input__element}
              placeholder={placeholder}
              {...form}
              {...props}
            />
          </div>
          <p className={s.message}>{errors}</p>
        </div>
      )

    case "password":
      return (
        <div
          className={cn(s.input, className, {
            [s.input__error]: errors,
          })}
        >
          {title && <span className={s.label}>{title}</span>}
          <div className={s.wrap}>
            <input
              type="password"
              className={s.input__element}
              placeholder={placeholder}
              {...form}
              {...props}
            />

            <div className={s.icon}>
              <LockIcon />
            </div>
          </div>
          <p className={s.message}>{errors}</p>
        </div>
      )
  }
  return (
    <div
      className={cn(s.input, {
        [s.input__error]: errors,
      })}
    >
      {title && <span className={s.label}>{title}</span>}
      <div className={s.wrap}>
        <input
          type="text"
          className={s.input__element}
          placeholder={placeholder}
          {...form}
          {...props}
        />

        <div className={s.icon}>
          <MailIcon />
        </div>
      </div>
      <p className={s.message}>{errors}</p>
    </div>
  )
}

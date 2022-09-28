import s from "./select.module.scss"
import Select from "react-select"

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ]

export const SelectItem = ({ options, form, ...props }) => {
  return (
    <select {...form} {...props}>
      {options.map((item, idx) => (
        <option key={idx} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  )
}

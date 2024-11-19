import React from "react"
import { SUPPORTED_LANGUAGES } from "../constants"
import { FromLanguage, Language, SectionType } from "../types.d"

type Props =
  | {
      type: SectionType.From
      value: FromLanguage
      onChange: (language: FromLanguage) => void
    }
  | {
      type: SectionType.To
      value: Language
      onChange: (language: Language) => void
    }

const Select: React.FC<Props> = ({ onChange, value }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }
  return (
    <select
      value={value}
      onChange={handleChange}
      className="bg-transparent text-white opacity-30 cursor-pointer"
    >
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option className="text-Bg-lang" key={key} value={key}>
          {literal}
        </option>
      ))}
    </select>
  )
}

export default Select

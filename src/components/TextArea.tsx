import React from "react"
import { SectionType } from "../types.d"
interface Props {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}
const getPlaceholder = ({
  type,
  loading,
}: {
  type: SectionType
  loading?: boolean
}) => {
  if (type === SectionType.From) return "Introducir texto"
  if (loading === true) return "Cargando..."
  return "Traducción"
}

const TextArea: React.FC<Props> = ({ type, loading, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }
  return (
    <textarea
      onChange={handleChange}
      value={value}
      autoFocus={type === SectionType.From}
      placeholder={getPlaceholder({ type, loading })}
      className="w-full h-40 p-2 bg-transparent border-none rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
    ></textarea>
  )
}

export default TextArea

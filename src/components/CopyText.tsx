import React from "react"
import { Copy } from "lucide-react"
interface Props {
  value: string
}

const CopyText: React.FC<Props> = ({ value }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      alert("Text copied")
    } catch (error) {
      console.log("Error al copiar el texto", error)
    }
  }
  return (
    <button onClick={handleCopy}>
      <Copy />
    </button>
  )
}

export default CopyText

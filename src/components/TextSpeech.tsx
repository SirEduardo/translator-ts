import React from "react"
import { Volume2 } from "lucide-react"
import { FromLanguage } from "../types"
interface Props {
  value: string
  language: FromLanguage
}

const TextSpeech: React.FC<Props> = ({ value, language }) => {
  const handleSpeak = () => {
    if (!window.speechSynthesis) {
      alert("La API de síntesis de voz no está disponible en este navegador.")
      return
    }
    const utterance = new SpeechSynthesisUtterance(value)
    utterance.lang = language
    window.speechSynthesis.speak(utterance)
  }

  return (
    <button onClick={handleSpeak}>
      <Volume2 />
    </button>
  )
}

export default TextSpeech

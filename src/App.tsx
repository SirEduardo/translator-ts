import { ArrowRightLeft } from "lucide-react"
import Select from "./components/Select"
import { useStore } from "./hooks/useStore"
import { AUTO_LANGUAGE } from "./constants"
import { SectionType } from "./types.d"
import TextArea from "./components/TextArea"
import { useEffect } from "react"
import CopyText from "./components/CopyText"
import TextSpeech from "./components/TextSpeech"

function App() {
  const {
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
  } = useStore()

  useEffect(() => {
    if (fromText === "") return

    fetch(
      `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLanguage}|${toLanguage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setResult(data.responseData.translatedText)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [fromText, toLanguage, fromLanguage])
  return (
    <main className="min-h-screen relative">
      <img className="h-svh w-full" src="../public/hero_img.jpg" />
      <section className="absolute inset-0 flex items-center justify-center gap-20">
        <div className="bg-Bg-fromColor w-1/3 h-96 rounded-2xl p-8">
          <div className="flex justify-between items-center pb-4">
            <div className="flex items-center gap-4">
              <Select
                type={SectionType.From}
                value={fromLanguage}
                onChange={setFromLanguage}
              />
            </div>
            <div>
              <button
                disabled={fromLanguage === AUTO_LANGUAGE}
                className="text-Bg-toColor border-2 border-Bg-toColor p-1 rounded-lg"
                onClick={interchangeLanguages}
              >
                <ArrowRightLeft />
              </button>
            </div>
          </div>
          <TextArea
            type={SectionType.From}
            value={fromText}
            onChange={setFromText}
          ></TextArea>
          <footer className="flex justify-between pt-10">
            <div className="flex gap-3 text-Bg-toColor ">
              <TextSpeech value={fromText} language={fromLanguage} />
              <CopyText value={fromText} />
            </div>
          </footer>
        </div>
        <div className="bg-Bg-fromColor w-1/3 h-96 rounded-2xl p-8 ">
          <div className="flex gap-8 pb-4">
            <Select
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
          </div>
          <TextArea
            loading={loading}
            type={SectionType.To}
            value={result}
            onChange={setResult}
          ></TextArea>
          <footer className="flex justify-between pt-10">
            <div className="flex gap-3 text-Bg-toColor">
              <TextSpeech value={result} language={toLanguage} />
              <CopyText value={result} />
            </div>
          </footer>
        </div>
      </section>
    </main>
  )
}

export default App

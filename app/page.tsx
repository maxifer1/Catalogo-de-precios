"use client"

import { useEffect, useState } from "react"
import { IntroAnimation } from "../components/intro-animation"
import { PlanCards } from "../components/plan-cards"
import { WelcomeScreen } from "../components/welcome-screen"
import { clearStoredStoreName } from "../lib/store-name"

type EntryStage = "welcome" | "intro" | "page"

export default function ReportesPage() {
  // Siempre arranca en "welcome": el nombre no se recuerda entre cargas.
  const [entryStage, setEntryStage] = useState<EntryStage>("welcome")
  const [storeName, setStoreName] = useState("")

  useEffect(() => {
    // Limpia el nombre que pudo haber quedado guardado por versiones previas.
    clearStoredStoreName()
  }, [])

  function handleWelcomeSubmit(name: string) {
    setStoreName(name)
    setEntryStage("intro")
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 relative flex items-center justify-center overflow-hidden">
      {entryStage === "welcome" && <WelcomeScreen onSubmit={handleWelcomeSubmit} />}
      {entryStage === "intro" && (
        <IntroAnimation storeName={storeName} onComplete={() => setEntryStage("page")} />
      )}
      {entryStage === "page" && <PlanCards storeName={storeName} />}
    </main>
  )
}

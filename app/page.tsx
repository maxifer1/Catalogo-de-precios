"use client"

import { useEffect, useState } from "react"
import { IntroAnimation } from "../components/intro-animation"
import { PlanCards } from "../components/plan-cards"
import { WelcomeScreen } from "../components/welcome-screen"
import { EntryStagePlaceholder } from "../components/entry-stage-placeholder"
import { persistStoreName, readStoredStoreName } from "../lib/store-name"

type EntryStage = "loading" | "welcome" | "intro" | "page"

export default function ReportesPage() {
  const [entryStage, setEntryStage] = useState<EntryStage>("loading")
  const [storeName, setStoreName] = useState("")

  useEffect(() => {
    const storedName = readStoredStoreName()

    if (storedName) {
      setStoreName(storedName)
      setEntryStage("intro")
      return
    }

    setEntryStage("welcome")
  }, [])

  function handleWelcomeSubmit(name: string) {
    setStoreName(name)
    persistStoreName(name)
    setEntryStage("intro")
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 relative flex items-center justify-center overflow-hidden">
      {entryStage === "loading" && <EntryStagePlaceholder />}
      {entryStage === "welcome" && <WelcomeScreen onSubmit={handleWelcomeSubmit} />}
      {entryStage === "intro" && (
        <IntroAnimation storeName={storeName} onComplete={() => setEntryStage("page")} />
      )}
      {entryStage === "page" && <PlanCards storeName={storeName} />}
    </main>
  )
}

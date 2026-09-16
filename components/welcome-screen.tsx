"use client"

import { FormEvent, useState } from "react"
import {
  STORE_NAME_MAX_LENGTH,
  normalizeStoreName,
  validateStoreName,
} from "../lib/store-name"

interface WelcomeScreenProps {
  onSubmit: (storeName: string) => void
}

export function WelcomeScreen({ onSubmit }: WelcomeScreenProps) {
  const [storeName, setStoreName] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isExiting, setIsExiting] = useState(false)

  const trimmedName = normalizeStoreName(storeName)
  const isSubmitDisabled = !trimmedName || isExiting

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const validationError = validateStoreName(storeName)
    if (validationError) {
      setError(validationError)
      return
    }

    setError(null)
    setIsExiting(true)

    window.setTimeout(() => {
      onSubmit(trimmedName)
    }, 700)
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center px-4 overflow-hidden transition-all duration-700 ease-in-out ${
        isExiting ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
      }`}
      style={{
        background: "linear-gradient(135deg, #0077B5 0%, #000000 50%, #ffffff 100%)",
        backgroundSize: "200% 200%",
        animation: "gradientBG 6s ease infinite",
      }}
    >
      <style jsx>{`
        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .welcome-fade-1 {
          animation: fadeInUp 0.7s ease-out forwards;
        }
        .welcome-fade-2 {
          animation: fadeInUp 0.7s ease-out 0.12s forwards;
          opacity: 0;
        }
        .welcome-fade-3 {
          animation: fadeInUp 0.7s ease-out 0.24s forwards;
          opacity: 0;
        }
      `}</style>

      <div className="w-full max-w-md">
        <div className="text-center mb-8 welcome-fade-1">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-3">
            Bienvenido
          </h1>
          <p className="text-base md:text-lg text-slate-200 font-light drop-shadow">
            Ingresá el nombre de tu local para comenzar
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="welcome-fade-2 rounded-2xl border border-white/20 bg-white/10 p-5 md:p-7 shadow-xl backdrop-blur-md"
          noValidate
        >
          <label htmlFor="store-name" className="sr-only">
            Nombre del local
          </label>
          <input
            id="store-name"
            type="text"
            value={storeName}
            maxLength={STORE_NAME_MAX_LENGTH}
            autoComplete="organization"
            autoFocus
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "store-name-error" : undefined}
            placeholder="Nombre del local"
            onChange={(event) => {
              setStoreName(event.target.value)
              if (error) {
                setError(null)
              }
            }}
            className="w-full rounded-xl border border-white/25 bg-white/90 px-4 py-3 text-base text-slate-900 shadow-sm outline-none placeholder:text-slate-400 transition focus:border-[#0077B5] focus:ring-2 focus:ring-[#0077B5]/40"
          />

          {error ? (
            <p id="store-name-error" className="mt-2 text-sm text-red-200" role="alert">
              {error}
            </p>
          ) : (
            <p className="mt-2 text-xs text-slate-200/80">
              Máximo {STORE_NAME_MAX_LENGTH} caracteres.
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitDisabled}
            className="mt-5 w-full rounded-xl bg-[#0077B5] py-3 px-4 text-base font-medium text-white shadow-md transition hover:bg-[#006093] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Ingresar
          </button>
        </form>

        <p className="welcome-fade-3 mt-6 text-center text-xs text-slate-200/80">
          Personalizamos la experiencia con el nombre de tu negocio.
        </p>
      </div>
    </div>
  )
}

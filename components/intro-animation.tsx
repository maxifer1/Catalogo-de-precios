"use client"

import { useState, useEffect } from "react"

interface IntroAnimationProps {
  storeName: string
  onComplete: () => void
}

export function IntroAnimation({ storeName, onComplete }: IntroAnimationProps) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Tras 3.5 segundos inicia la animación de desvanecimiento
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 5000)

    // Tras 4.5 segundos se notifica la finalización para desmontar el componente
    const completeTimer = setTimeout(() => {
      onComplete()
    }, 5500)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center text-center px-4 overflow-hidden transition-all duration-1000 ease-in-out ${
        fadeOut ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
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
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-1 {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-2 {
          animation: fadeInUp 0.8s ease-out 1.2s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Primer Texto: Hola Matrix Bicicletería */}
      <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4 animate-fade-1">
        Hola {storeName}
      </h1>

      {/* Segundo Texto: Te ofrecemos un plan a tu medida */}
      <p className="text-xl md:text-2xl text-slate-200 font-light drop-shadow animate-fade-2">
        Te ofrecemos un plan a tu medida
      </p>
    </div>
  )
}
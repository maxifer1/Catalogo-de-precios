"use client"

interface PlanCardsProps {
  storeName: string
}

export function PlanCards({ storeName }: PlanCardsProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center min-h-screen transition-all duration-700 animate-fadeIn">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>

      {/* 1. Mensaje de Bienvenida Motivador */}
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-[#0077B5] uppercase bg-[#0077B5]/10 rounded-full">
          ¡Potenciemos tu presencia online!
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3 leading-tight">
          Hagamos realidad la página web que {storeName} necesita
        </h2>
      </div>

      {/* 2. Resumen del Relevamiento del Proyecto */}
      <div className="w-full max-w-4xl mb-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="p-2 bg-[#0077B5]/10 rounded-lg text-[#0077B5]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
              Detalles del Proyecto Relevado
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Módulos y funcionalidades acordadas para tu sitio
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/60 text-slate-700 dark:text-slate-200">
            <span className="text-[#0077B5] font-bold">✓</span>
            <span>Landing page con banner publicitario</span>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/60 text-slate-700 dark:text-slate-200">
            <span className="text-[#0077B5] font-bold">✓</span>
            <span>Catálogo de servicios</span>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/60 text-slate-700 dark:text-slate-200">
            <span className="text-[#0077B5] font-bold">✓</span>
            <span>Catálogo de bicicletas</span>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/60 text-slate-700 dark:text-slate-200">
            <span className="text-[#0077B5] font-bold">✓</span>
            <span>Catálogo de repuestos</span>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/60 text-slate-700 dark:text-slate-200">
            <span className="text-[#0077B5] font-bold">✓</span>
            <span>Sección de reseñas</span>
          </div>

          

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/60 text-slate-700 dark:text-slate-200">
            <span className="text-[#0077B5] font-bold">✓</span>
            <span>Integración con WhatsApp</span>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800/60 text-slate-700 dark:text-slate-200 sm:col-span-2 md:col-span-3">
            <span className="text-[#0077B5] font-bold">✓</span>
            <span>Panel de administrador para gestión de contenidos</span>
          </div>
        </div>
      </div>

      {/* Subtítulo Sección de Planes */}
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Nuestros Planes
        </h3>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
          Selecciona la opción que mejor se adapte a tus necesidades
        </p>
      </div>

      {/* Grid de Planes */}
    {/* Grid de Planes */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full items-stretch">
  {/* 1. Plan Estándar Mensual */}
  <div className="border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
    <div>
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
        Estándar Mensual
      </h3>
      <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm leading-relaxed">
        Presencia web profesional con suscripción mensual.
      </p>
      
      <div className="mb-6">
        <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
          $75.000 <span className="text-xs font-normal text-slate-500">/ mes</span>
        </div>
        <div className="text-xs text-slate-400 dark:text-slate-500 mt-1.5 italic">
          *Ajustable por IPC Trimestral
        </div>
      </div>

      <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 mb-8">
        <li className="flex items-start gap-2">
          <span className="shrink-0 text-[#0077B5] font-bold">✓</span>
          <span>Desarrollo y despliegue del sitio web</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="shrink-0 text-[#0077B5] font-bold">✓</span>
          <span>Capacitación de los paneles de administrador</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="shrink-0 text-[#0077B5] font-bold">✓</span>
          <span>Mantenimiento y soporte mensual</span>
        </li>
      </ul>
    </div>

    <a
      href="https://wa.me/5493513207202?text=Hola!%20Nos%20interesa%20el%20Plan%20Est%C3%A1ndar%20Mensual"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-3 px-4 rounded-xl font-medium border border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5]/10 transition-colors text-center block"
    >
      Elegir Estándar Mensual
    </a>
  </div>

  {/* 2. Plan Estándar Anual */}
  <div className="border-2 border-[#0077B5] rounded-2xl p-6 md:p-8 bg-white dark:bg-slate-900 shadow-lg relative flex flex-col justify-between">
    <span className="absolute -top-3 right-6 bg-[#0077B5] text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">
      Opción Recomendada
    </span>

    <div>
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
        Estándar Anual
      </h3>
      <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm leading-relaxed">
        Presencia web profesional con cobertura de un año.
      </p>

      <div className="mb-6 flex flex-col">
        <div className="text-3xl font-extrabold text-[#0077B5]">
          $750.000
        </div>
        <div className="text-xs font-normal text-slate-500 mt-1">
          Pago único
        </div>
      </div>

      <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 mb-8">
        <li className="flex items-start gap-2">
          <span className="shrink-0 text-[#0077B5] font-bold">✓</span>
          <span>Desarrollo y despliegue del sitio web</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="shrink-0 text-[#0077B5] font-bold">✓</span>
          <span>Capacitación de los paneles de administrador</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="shrink-0 text-[#0077B5] font-bold">✓</span>
          <span>Mantenimiento y soporte incluído por <strong className="font-bold text-slate-900 dark:text-white">12 meses</strong></span>
        </li>
        <li className="flex items-start gap-2 text-emerald-600 dark:text-emerald-400 font-semibold">
          <span className="shrink-0 font-bold">✓</span>
          <span>Ahorro equivalente a 2 meses</span>
        </li>
      </ul>
    </div>

    <a
      href="https://wa.me/5493513207202?text=Hola!%20Nos%20interesa%20el%20Plan%20Est%C3%A1ndar%20Anual"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-3 px-4 rounded-xl font-medium bg-[#0077B5] text-white hover:bg-[#006093] transition-colors shadow-md text-center block"
    >
      Elegir Estándar Anual
    </a>
  </div>

  {/* 3. Plan Premium Mensual */}
  <div className="border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
    <div>
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
        Premium Mensual
      </h3>
      <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm leading-relaxed">
        Herramientas avanzadas con suscripción mensual.
      </p>

      <div className="mb-6">
        <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
          $95.000 <span className="text-xs font-normal text-slate-500">/ mes</span>
        </div>
        <div className="text-xs text-slate-400 dark:text-slate-500 mt-1.5 italic">
          *Ajustable por IPC Trimestral
        </div>
      </div>

      <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300 mb-8">
        <li className="flex items-start gap-2 font-medium">
          <span className="shrink-0 text-[#0077B5] font-bold">✓</span>
          <span>Todo lo incluido en Estándar</span>
        </li>
        <li className="flex items-start gap-2 text-[#0077B5] font-semibold">
          <span className="shrink-0 font-bold">✓</span>
          <span>Panel estadísticas Google Analytics</span>
        </li>
        <li className="flex items-start gap-2 text-[#0077B5] font-semibold">
          <span className="shrink-0 font-bold">✓</span>
          <span>SEO Técnico para posicionamiento</span>
        </li>
        <li className="flex items-start gap-2 text-[#0077B5] font-semibold">
          <span className="shrink-0 font-bold">✓</span>
          <span>Exclusividad en diseños</span>
        </li>
      </ul>
    </div>

    <a
      href="https://wa.me/5493513207202?text=Hola!%20Nos%20interesa%20el%20Plan%20Premium%20Mensual"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-3 px-4 rounded-xl font-medium border border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5]/10 transition-colors text-center block"
    >
      Elegir Premium Mensual
    </a>
  </div>

  {/* 4. Plan Premium Anual */}
  <div className="border-2 border-amber-500 rounded-2xl p-6 md:p-8 bg-slate-900 text-white shadow-2xl relative flex flex-col justify-between">
    <span className="absolute -top-3 right-6 bg-amber-500 text-slate-950 text-xs px-3 py-1 rounded-full font-bold shadow-sm z-10">
      Opción más completa
    </span>

    <div className="absolute top-0 right-0 w-32 h-32 bg-[#0077B5]/20 rounded-tr-2xl rounded-bl-full blur-2xl pointer-events-none" />

    <div>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
        Premium Anual
      </h3>
      <p className="text-slate-300 mb-6 text-sm leading-relaxed">
        Herramientas avanzadas con cobertura de un año.
      </p>

      <div className="mb-6 flex flex-col">
        <div className="text-3xl font-extrabold text-white">
          $950.000
        </div>
        <div className="text-xs font-normal text-slate-400 mt-1">
          pago único
        </div>
      </div>

      <ul className="space-y-3 text-sm text-slate-200 mb-8">
        <li className="flex items-start gap-2 font-medium text-slate-100">
          <span className="shrink-0 text-white font-bold">✓</span>
          <span>Todo lo incluido en el Plan Estándar</span>
        </li>
        <li className="flex items-start gap-2 text-[#2cb2fa] font-semibold">
          <span className="shrink-0 font-bold">✓</span>
          <span>Panel estadísticas con Google Analytics</span>
        </li>
        <li className="flex items-start gap-2 text-[#2cb2fa] font-semibold">
          <span className="shrink-0 font-bold">✓</span>
          <span>SEO Técnico para posicionamiento</span>
        </li>
        <li className="flex items-start gap-2 text-[#2cb2fa] font-semibold">
          <span className="shrink-0 font-bold">✓</span>
          <span>Exclusividad en diseños</span>
        </li>
        <li className="flex items-start gap-2 text-emerald-400 font-semibold">
          <span className="shrink-0 font-bold">✓</span>
          <span>Ahorro equivalente a 2 meses</span>
        </li>
      </ul>
    </div>

    <a
      href="https://wa.me/5493513207202?text=Hola!%20Nos%20interesa%20el%20Plan%20Premium%20Anual"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-3 px-4 rounded-xl font-semibold bg-[#0077B5] text-white hover:bg-[#006093] transition-colors shadow-md text-center block"
    >
      Elegir Plan Premium
    </a>
  </div>
</div>

      {/* Nota aclaratoria minimalista */}
      <div className="w-full max-w-3xl mt-8 text-center space-y-2">
        <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
          <span className="font-semibold text-slate-500 dark:text-slate-400">1. Condiciones de Pago (Planes Anuales):</span> El inicio de los trabajos de desarrollo está sujeto a la recepción de un anticipo de $100.000 en concepto de seña. El monto restante en función del plan contratado deberá ser liquidado previo a la entrega final de la plataforma.
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
          <span className="font-semibold text-slate-500 dark:text-slate-400">2. Condiciones de Pago (Planes Mensuales):</span> El inicio de los trabajos de desarrollo requiere del abono de la primera cuota mensual en concepto de anticipo.
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
          <span className="font-semibold text-slate-500 dark:text-slate-400">3. Propiedad Intelectual y Derechos:</span> En los planes anuales, la titularidad y los derechos de uso sobre el sitio web pertenecen a {storeName} desde el inicio del servicio. En los planes mensuales, dicha titularidad será transferida íntegramente una vez cumplido el período mínimo de permanencia de doce (12) meses consecutivos de pago.
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
          <span className="font-semibold text-slate-500 dark:text-slate-400">4. Alcance del Proyecto:</span> Los precios indicados corresponden exclusivamente a las funcionalidades y necesidades relevadas y acordadas previamente con el cliente. Cualquier modificación que implique el desarrollo de nuevas funcionalidades, módulos o integraciones será presupuestada por separado.
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">
          <span className="font-semibold text-slate-500 dark:text-slate-400">5. Dominio:</span>{" "}
          El cliente dispone de un dominio propio.
          Su costo de compra y renovación no está incluido en los planes. La configuración y vinculación del mismo sí se encuentra incluida dentro del despliegue.
        </p>
      </div>
    </div>
  )
}
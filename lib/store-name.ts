export const STORE_NAME_STORAGE_KEY = "reports-ui:store-name"

export const STORE_NAME_MAX_LENGTH = 50

export function normalizeStoreName(value: string) {
  return value.trim()
}

export function validateStoreName(value: string): string | null {
  const normalized = normalizeStoreName(value)

  if (!normalized) {
    return "Ingresá el nombre de tu local para continuar."
  }

  if (normalized.length > STORE_NAME_MAX_LENGTH) {
    return `El nombre no puede superar los ${STORE_NAME_MAX_LENGTH} caracteres.`
  }

  return null
}

/**
 * El nombre del local NO se persiste: vive solo en el estado de React y se
 * pierde al recargar o cerrar la página, que es el comportamiento buscado.
 *
 * Esta función existe únicamente para limpiar el valor que versiones
 * anteriores dejaron guardado en el navegador de quienes ya visitaron la
 * página. Se puede eliminar más adelante.
 */
export function clearStoredStoreName() {
  if (typeof window === "undefined") {
    return
  }

  try {
    window.localStorage.removeItem(STORE_NAME_STORAGE_KEY)
    window.sessionStorage.removeItem(STORE_NAME_STORAGE_KEY)
  } catch {
    // El almacenamiento puede no estar disponible; no afecta al flujo.
  }
}
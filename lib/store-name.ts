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

export function readStoredStoreName(): string | null {
  if (typeof window === "undefined") {
    return null
  }

  try {
    const stored = window.localStorage.getItem(STORE_NAME_STORAGE_KEY)
    if (!stored) {
      return null
    }

    return validateStoreName(stored) ? null : stored
  } catch {
    return null
  }
}

export function persistStoreName(storeName: string) {
  try {
    window.localStorage.setItem(STORE_NAME_STORAGE_KEY, storeName)
  } catch {
    // Storage may be unavailable; the name still lives in React state.
  }
}

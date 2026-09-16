"use client"

export function EntryStagePlaceholder() {
  return (
    <div
      className="fixed inset-0 z-50"
      style={{
        background: "linear-gradient(135deg, #0077B5 0%, #000000 50%, #ffffff 100%)",
        backgroundSize: "200% 200%",
      }}
      aria-hidden="true"
    />
  )
}

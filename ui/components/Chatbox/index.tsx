"use client"

import React from "react"

export default function ResponseEditor({
  value,
  onValueChange,
  placeholder = "Type your response here...",
  readOnly = false,
}: {
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
  readOnly?: boolean
}) {
  const latexToGreekMap = {
    "\\epsilon": "ε",
    "\\delta": "δ",
    "\\Delta": "Δ",
    "\\alpha": "α",
    "\\beta": "β",
    "\\gamma": "γ",
    "\\Gamma": "Γ",
    "\\theta": "θ",
    "\\Theta": "Θ",
    "\\lambda": "λ",
    "\\Lambda": "Λ",
    "\\mu": "μ",
    "\\pi": "π",
    "\\Pi": "Π",
    "\\sigma": "σ",
    "\\Sigma": "Σ",
    "\\tau": "τ",
    "\\phi": "φ",
    "\\Phi": "Φ",
    "\\psi": "ψ",
    "\\Psi": "Ψ",
    "\\omega": "ω",
    "\\Omega": "Ω",
    "\\zeta": "ζ",
    "\\eta": "η",
    "\\kappa": "κ",
    "\\rho": "ρ",
    "\\xi": "ξ",
    "\\Xi": "Ξ",
    "\\chi": "χ",
    "\\upsilon": "υ",
    "\\Upsilon": "Υ",
    "\\nu": "ν",
    "\\iota": "ι",
    "\\omicron": "ο",
  }

  const handleChange = (e: any) => {
    let t = e.target.value

    for (const [latex, greek] of Object.entries(latexToGreekMap)) {
      t = t.replace(latex + " ", greek + " ")
    }

    onValueChange(t)
  }

  return (
    <textarea
      className={`max`}
      placeholder={placeholder}
      style={{
        borderBottom: "0.01vw solid var(--light-grey)",
        border: "none",
        outline: "none",
      }}
      spellCheck={false}
      value={value}
      onChange={handleChange}
      readOnly={readOnly}
    />
  )
}

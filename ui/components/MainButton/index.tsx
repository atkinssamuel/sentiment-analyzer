"use client"

import { motion } from "framer-motion"
import React from "react"

export default function MainButton({
  text,
  onClick,
  enabled = true,
  color = "var(--grey)",
  backgroundColor = "var(--white)",
}: {
  text: string
  onClick: () => void
  enabled?: boolean
  color?: string
  backgroundColor?: string
}) {
  return (
    <motion.div
      className={`max row-flex center`}
      style={{
        border: `0.05vw solid ${color}`,
        color: color,
        borderRadius: "0.2vw",
        backgroundColor: backgroundColor,
      }}
      whileHover={{
        cursor: enabled ? "pointer" : "not-allowed",
        scale: enabled ? 1.03 : 1,
      }}
      onClick={() => {
        if (enabled) {
          onClick()
        }
      }}
    >
      {text}
    </motion.div>
  )
}

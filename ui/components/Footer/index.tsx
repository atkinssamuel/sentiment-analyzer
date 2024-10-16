import { Sizes } from "@/types/Fonts"
import React from "react"

export default function Footer() {
  return (
    <div
      className={`row-flex center`}
      style={{
        fontSize: Sizes.Paragraph,
        fontWeight: 300,
        paddingBottom: "2vh",
      }}
    >
      Made by Samuel Atkins
    </div>
  )
}

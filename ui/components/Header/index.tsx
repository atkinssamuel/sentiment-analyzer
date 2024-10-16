import { Sizes } from "@/types/Fonts"
import React from "react"

export default function Header() {
  return (
    <div className={`max-width row-flex space-between`}>
      <div
        style={{
          fontWeight: 200,
          fontSize: Sizes.Header,
          paddingLeft: "1vw",
          paddingTop: "1vh",
        }}
      >
        Sentiment Analyzer
      </div>
    </div>
  )
}

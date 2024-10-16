import React from "react"

export default function Colorbox({ zeroOneTwo }: { zeroOneTwo: 0 | 1 | 2 }) {
  const colorLookup = {
    0: "red",
    1: "orange",
    2: "green",
  }

  return (
    <div
      style={{
        height: "3vw",
        width: "3vw",
        backgroundColor: colorLookup[zeroOneTwo],
        borderRadius: "50%",
      }}
    />
  )
}

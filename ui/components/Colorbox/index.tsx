import React from "react"

export default function Colorbox({ zeroOneTwo }: { zeroOneTwo: 0 | 1 | 2 }) {
  const colorLookup = {
    0: "red",
    1: "orange",
    2: "green",
  }

  const sentimentLookup = {
    0: "Negative",
    1: "Neutral",
    2: "Positive",
  }

  return (
    <div
      className={`row-flex center`}
      style={{
        height: "3vw",
        width: "3vw",
        backgroundColor: colorLookup[zeroOneTwo],
        borderRadius: "50%",
        color: "white",
        fontSize: "0.5vw",
      }}
    >
      {sentimentLookup[zeroOneTwo]}
    </div>
  )
}

"use client"

import React, { useEffect, useState } from "react"
import ResponseEditor from "../Chatbox"
import MainButton from "../MainButton"
import { Sizes } from "@/types/Fonts"

type Message = {
  text: string
  male: boolean
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([])

  const [maleScore, setMaleScore] = useState(null)
  const [maleMessage, setMaleMessage] = useState("")

  const [femaleScore, setFemaleScore] = useState(null)
  const [femaleMessage, setFemaleMessage] = useState("")

  const [fullMaleMessage, setFullMaleMessage] = useState("")
  const [fullFemaleMessage, setFullFemaleMessage] = useState("")

  const borderStyles: React.CSSProperties = {
    border: "1px solid var(--grey)",
    borderRadius: "4px",
    padding: "10px",
    marginTop: "10px",
    marginBottom: "10px",
  }

  const onSubmit = () => {
    if (maleMessage == "" && femaleMessage == "") return

    if (maleMessage != "") {
      messages.push({ text: maleMessage, male: true })
      setMaleMessage("")
    }

    if (femaleMessage != "") {
      messages.push({ text: femaleMessage, male: false })
      setFemaleMessage("")
    }

    setMessages([...messages])
  }

  const onRefresh = () => {
    setMessages([])
    setMaleMessage("")
    setFemaleMessage("")
  }

  useEffect(() => {
    setFullMaleMessage(
      messages
        .filter((m) => m.male)
        .map((m) => m.text)
        .join(" ")
    )

    setFullFemaleMessage(
      messages
        .filter((m) => !m.male)
        .map((m) => m.text)
        .join(" ")
    )
  }, [messages])

  useEffect(() => {
    if (fullFemaleMessage == "") return

    fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: fullFemaleMessage }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }, [fullFemaleMessage])

  useEffect(() => {
    if (fullMaleMessage == "") return

    fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: fullMaleMessage }),
    })
      .then((res) => res.json())
      .then((data) => {})
  }, [fullMaleMessage])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "Enter") {
        onSubmit()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [maleMessage, femaleMessage])

  return (
    <div
      className={`column-flex align-center space-between relative`}
      style={{
        height: "60vh",
        backgroundColor: "white",
        boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.3)",
        paddingBottom: "2vh",
      }}
    >
      <div
        className={`column-flex`}
        style={{ width: "90%", marginTop: "2vh", overflowY: "auto" }}
      >
        <div
          className={`row-flex space-between`}
          style={{ width: "90%", marginBottom: "2vh" }}
        >
          <div
            style={{
              color: "var(--blue)",
              fontSize: `calc(${Sizes.Paragraph} + 0.5vh)`,
            }}
          >
            {maleScore == null ? 0 : maleScore} / 1
          </div>

          <div
            style={{
              color: "var(--pink)",
              fontSize: `calc(${Sizes.Paragraph} + 0.5vh)`,
            }}
          >
            {femaleScore == null ? 0 : femaleScore} / 1
          </div>
        </div>

        {messages.map((m, idx) => {
          return (
            <div
              key={idx}
              style={{
                width: "60%",
                paddingLeft: "20px",
                ...borderStyles,
                marginLeft: m.male ? 0 : "37.5%",
                color: m.male ? "var(--blue)" : "var(--pink)",
                wordWrap: "break-word", // This will ensure long words wrap properly
                whiteSpace: "normal", // Ensures the text will break into multiple lines
              }}
            >
              {m.text}
            </div>
          )
        })}
      </div>

      <div className={`max-width column-flex align-center`}>
        <div className={`row-flex space-between`} style={{ width: "90%" }}>
          <div style={{ width: "48%", ...borderStyles, color: "var(--blue)" }}>
            <ResponseEditor
              value={maleMessage}
              onValueChange={setMaleMessage}
              placeholder={`Enter dialogue from male user...`}
            />
          </div>

          <div style={{ width: "48%", ...borderStyles, color: "var(--pink)" }}>
            <ResponseEditor
              value={femaleMessage}
              onValueChange={setFemaleMessage}
              placeholder={`Enter dialogue from female user...`}
            />
          </div>
        </div>

        <div className={`row-flex space-between`} style={{ width: "90%" }}>
          <div style={{ height: "2vh", width: "10vw" }}>
            <MainButton
              text={`REFRESH`}
              onClick={onRefresh}
              color={"var(--red)"}
            />
          </div>

          <div style={{ height: "2vh", width: "10vw" }}>
            <MainButton
              text={`SUBMIT`}
              onClick={onSubmit}
              color={"var(--green)"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

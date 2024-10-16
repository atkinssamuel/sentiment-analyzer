import Chat from "@/components/Chat"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React from "react"

export default function Home() {
  return (
    <div
      className={`max column-flex space-between align-center`}
      style={{ position: "absolute" }}
    >
      <div className={`max-width`}>
        <Header />
      </div>

      <div style={{ width: "60%" }}>
        <Chat />
      </div>
      <div className={`max-width`}>
        <Footer />
      </div>
    </div>
  )
}

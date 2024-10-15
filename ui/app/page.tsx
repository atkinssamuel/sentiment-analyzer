import Chat from "@/components/Chat"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React from "react"

export default function Home() {
  return (
    <div className={`max colum-flex`} style={{ position: "absolute" }}>
      <div
        className={`max-width`}
        style={{
          width: "100%",
        }}
      >
        <Header />
      </div>

      <div className={``}>
        <Chat />
      </div>
      <Footer />
    </div>
  )
}

"use server"

export async function Infer({
  message,
  charLim = 200,
}: {
  message: string
  charLim?: number
}): Promise<0 | 1 | 2> {
  const data = await fetch("http://localhost:5000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: message.slice(Math.min(message.length - charLim, 0)),
    }),
  }).then((res) => res.json())

  return data.result as 0 | 1 | 2
}

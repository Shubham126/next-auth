"use client"

import { useState } from "react"

export default function LoginForm() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">
        Login
      </button>

    </form>
  )
}
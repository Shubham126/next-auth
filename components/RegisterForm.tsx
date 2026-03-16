"use client"

import { useState } from "react"

export default function RegisterForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(form),
    })
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        placeholder="Name"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button type="submit">
        Register
      </button>

    </form>
  )
}
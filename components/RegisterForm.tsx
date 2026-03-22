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

    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(form),
    })

    const data = await response.json()

    if (response.ok && data.message === "User created") {
      alert("User created successfully! You can now log in.")
      window.location.href = "/login"
    } else {
      alert(data.message || "Something went wrong")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full mt-8">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5 ml-1">Name</label>
          <input
            className="w-full px-4 py-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600 shadow-sm"
            placeholder="John Doe"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div>
           <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5 ml-1">Email address</label>
          <input
            type="email"
            className="w-full px-4 py-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600 shadow-sm"
            placeholder="you@example.com"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        <div>
           <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5 ml-1">Password</label>
          <input
            type="password"
            className="w-full px-4 py-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600 shadow-sm"
            placeholder="••••••••"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
            minLength={6}
          />
        </div>
      </div>

      <button 
        type="submit"
        className="mt-4 w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-lg shadow-indigo-500/20 text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 transition-all hover:-translate-y-0.5 active:translate-y-0"
      >
        Create Account
      </button>
    </form>
  )
}
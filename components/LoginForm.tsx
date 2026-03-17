"use client"

import { useState } from "react"

export default function LoginForm() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })

    const data = await response.json()

    if (response.ok && data.message === "Login successful") {
      alert("Login successful!")
      window.location.href = "/" // Redirect to dashboard
    } else {
      alert(data.message || "Invalid credentials")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full mt-8">
      <div className="space-y-4">
        <div>
           <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5 ml-1">Email address</label>
          <input
            type="email"
            className="w-full px-4 py-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600 shadow-sm"
            placeholder="you@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
           <div className="flex items-center justify-between mb-1.5 mx-1">
             <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300">Password</label>
             <a href="#" className="font-medium text-sm text-indigo-600 hover:text-indigo-500 transition-colors">Forgot password?</a>
           </div>
          <input
            type="password"
            className="w-full px-4 py-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600 shadow-sm"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>

      <button 
        type="submit"
        className="mt-4 w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-lg shadow-indigo-500/20 text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 transition-all hover:-translate-y-0.5 active:translate-y-0"
      >
        Sign in
      </button>
    </form>
  )
}
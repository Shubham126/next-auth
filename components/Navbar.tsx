"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Navbar({ isLoggedInServer }: { isLoggedInServer: boolean }) {
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInServer)
  const router = useRouter()

  useEffect(() => {
    // Sync state if server prop changes (e.g., on navigation)
    setIsLoggedIn(isLoggedInServer)
  }, [isLoggedInServer])

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" })
    setIsLoggedIn(false)
    router.push("/login")
  }

  return (
    <nav className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-2xl tracking-tighter bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          MyApp.
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="/" className="text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Dashboard
          </Link>

          {!isLoggedIn ? (
            <>
              <Link href="/login" className="text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Login
              </Link>
              <Link href="/register" className="text-sm font-bold px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-transform hover:scale-105 active:scale-95 shadow-md">
                Register
              </Link>
            </>
          ) : (
            <button 
              onClick={handleLogout}
              className="text-sm font-bold px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white transition-transform hover:scale-105 active:scale-95 shadow-md"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

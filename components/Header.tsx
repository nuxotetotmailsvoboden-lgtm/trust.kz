'use client'

import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Header() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    const getSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession()
      if (error) {
        console.error('Ошибка получения сессии:', error)
      }
      setUser(session?.user ?? null)
      setLoading(false)
    }
    getSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase.auth])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  if (loading) {
    return (
      <header className="border-b border-gray-200 bg-white py-4">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/" className="text-2xl font-bold text-trust-orange">TRUST</a>
          </div>
          <div className="h-6 w-20 animate-pulse rounded bg-gray-200"></div>
        </div>
      </header>
    )
  }

  return (
    <header className="border-b border-gray-200 bg-white py-4">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="text-2xl font-bold text-trust-orange">TRUST</a>
          <span className="hidden text-sm text-gray-500 sm:inline">Платформа доверия Казахстана</span>
        </div>
        <nav className="flex items-center gap-4 text-sm font-medium text-gray-700">
          {user ? (
            <>
              <a href="/profile" className="hover:text-trust-orange transition">Профиль</a>
              <button
                onClick={handleLogout}
                className="hover:text-trust-orange transition"
              >
                Выйти
              </button>
            </>
          ) : (
            <>
              <a href="/auth/login" className="hover:text-trust-orange transition">Вход</a>
              <a
                href="/auth/register"
                className="rounded-lg bg-trust-orange px-4 py-2 text-white hover:bg-orange-600 transition"
              >
                Регистрация
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

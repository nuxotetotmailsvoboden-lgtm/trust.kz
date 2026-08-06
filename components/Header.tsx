'use client'

import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Header() {
  const [user, setUser] = useState<any>(null)
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => listener.subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
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
              <a href="/profile" className="hover:text-trust-orange">Профиль</a>
              <button onClick={handleLogout} className="hover:text-trust-orange">Выйти</button>
            </>
          ) : (
            <>
              <a href="/auth/login" className="hover:text-trust-orange">Вход</a>
              <a href="/auth/register" className="rounded-lg bg-trust-orange px-4 py-2 text-white hover:bg-orange-600">
                Регистрация
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

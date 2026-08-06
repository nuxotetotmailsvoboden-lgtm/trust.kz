'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    else router.push('/profile')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center">Вход</h2>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 mt-4"
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 mt-4"
          required
        />
        <button type="submit" className="w-full bg-trust-orange text-white py-2 rounded-lg mt-6 hover:bg-orange-600">
          Войти
        </button>
        <p className="text-sm text-center mt-4">
          Нет аккаунта? <a href="/auth/register" className="text-trust-orange">Регистрация</a>
        </p>
      </form>
    </div>
  )
}

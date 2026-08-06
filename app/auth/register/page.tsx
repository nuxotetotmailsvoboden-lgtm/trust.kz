'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName }
      }
    })
    if (error) setError(error.message)
    else router.push('/auth/login?message=Проверьте почту для подтверждения')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center">Регистрация</h2>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <input
          type="text"
          placeholder="Полное имя"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 mt-4"
          required
        />
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
          Зарегистрироваться
        </button>
        <p className="text-sm text-center mt-4">
          Уже есть аккаунт? <a href="/auth/login" className="text-trust-orange">Войти</a>
        </p>
      </form>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export default function CreateListing() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [city, setCity] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [categories, setCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await supabase.from('categories').select('*').order('name')
      if (data) setCategories(data)
    }
    fetchCategories()
  }, [supabase])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      alert('Войдите в аккаунт')
      setLoading(false)
      return
    }

    const { error } = await supabase.from('listings').insert({
      title,
      description,
      price: parseFloat(price),
      city,
      category_id: parseInt(categoryId),
      user_id: session.user.id,
      extra: {},
    })

    setLoading(false)
    if (error) alert('Ошибка: ' + error.message)
    else router.push('/profile')
  }

  return (
    <div className="container-custom py-8 max-w-2xl">
      <h1 className="text-2xl font-bold">Новое объявление</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input
          type="text"
          placeholder="Название"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
          required
        />
        <textarea
          placeholder="Описание"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
          rows={4}
        />
        <input
          type="number"
          placeholder="Цена (₸)"
          value={price}
          onChange={e => setPrice(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
          required
        />
        <input
          type="text"
          placeholder="Город"
          value={city}
          onChange={e => setCity(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
        />
        <select
          value={categoryId}
          onChange={e => setCategoryId(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
          required
        >
          <option value="">Выберите категорию</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-trust-orange text-white py-2 rounded-lg hover:bg-orange-600 disabled:opacity-50"
        >
          {loading ? 'Сохранение...' : 'Опубликовать'}
        </button>
      </form>
    </div>
  )
}

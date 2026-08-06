import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function Profile() {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) redirect('/auth/login')

  // Получаем профиль из таблицы profiles
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', session.user.id)
    .single()

  // Получаем объявления пользователя
  const { data: listings } = await supabase
    .from('listings')
    .select('*')
    .eq('user_id', session.user.id)
    .order('created_at', { ascending: false })

  return (
    <div className="container-custom py-8">
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-3xl">
          {profile?.avatar_url ? <img src={profile.avatar_url} alt="avatar" className="rounded-full" /> : '👤'}
        </div>
        <div>
          <h1 className="text-2xl font-bold">{profile?.full_name || 'Пользователь'}</h1>
          <div className="flex items-center gap-4 text-sm">
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">
              {profile?.is_verified ? '✅ VERIFIED' : '⏳ На проверке'}
            </span>
            <span className="text-trust-orange font-bold">TRUST SCORE: {profile?.trust_score || 0}</span>
          </div>
          <p className="text-gray-500">{profile?.city || 'Город не указан'}</p>
        </div>
        <Link href="/create" className="ml-auto bg-trust-orange text-white px-6 py-2 rounded-full hover:bg-orange-600">
          + Добавить объявление
        </Link>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold">Мои объявления</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {listings?.map((listing: any) => (
            <div key={listing.id} className="border rounded-lg p-4">
              <h3 className="font-bold">{listing.title}</h3>
              <p className="text-sm text-gray-500">{listing.price} ₸</p>
              <p className="text-xs text-gray-400">{listing.city}</p>
            </div>
          ))}
          {!listings?.length && <p className="text-gray-400">У вас пока нет объявлений.</p>}
        </div>
      </div>
    </div>
  )
}

import { createClient } from '@/utils/supabase/server'

export default async function VerifiedProfiles() {
  const supabase = await createClient()
  const { data: profiles } = await supabase
    .from('profiles')
    .select('*')
    .eq('is_verified', true)
    .order('trust_score', { ascending: false })
    .limit(4)

  return (
    <section className="bg-gray-50 py-16">
      <div className="container-custom">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Проверенные профили</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profiles?.map((p) => (
            <div key={p.id} className="card-hover rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                      ✅ VERIFIED
                    </span>
                  </div>
                  <h3 className="mt-2 font-bold">{p.full_name || 'Пользователь'}</h3>
                </div>
                <div className="text-right">
                  <div className="text-xl font-black text-trust-orange">{p.trust_score || 0}</div>
                  <div className="text-xs text-gray-400">TRUST SCORE</div>
                </div>
              </div>
              <p className="text-sm text-gray-500">{p.city || 'Город'}</p>
              <div className="mt-3 flex items-center gap-1 text-sm">
                <span className="text-yellow-500">★</span>
                <span className="font-medium">{p.rating || 0}</span>
                <span className="text-gray-400">(отзывы)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

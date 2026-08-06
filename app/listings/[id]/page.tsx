import { createClient } from '@/utils/supabase/server'
import { notFound } from 'next/navigation'

export default async function ListingPage({ params }: { params: { id: string } }) {
  const supabase = createClient()
  const { data: listing } = await supabase
    .from('listings')
    .select('*, profiles(full_name, phone, trust_score, is_verified)')
    .eq('id', parseInt(params.id))
    .single()

  if (!listing) notFound()

  // Получаем отзывы
  const { data: reviews } = await supabase
    .from('reviews')
    .select('*, profiles(full_name)')
    .eq('listing_id', listing.id)
    .order('created_at', { ascending: false })

  return (
    <div className="container-custom py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold">{listing.title}</h1>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-2xl font-bold text-trust-orange">{listing.price} ₸</span>
            <span className="text-sm bg-gray-100 px-3 py-1 rounded">{listing.city}</span>
          </div>
          <p className="mt-4">{listing.description}</p>
          {listing.images?.length > 0 && (
            <div className="flex gap-2 mt-4">
              {listing.images.map((img: string, idx: number) => (
                <img key={idx} src={img} alt="photo" className="w-24 h-24 object-cover rounded" />
              ))}
            </div>
          )}
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl">
          <h3 className="font-bold">Продавец</h3>
          <p className="text-xl">{listing.profiles?.full_name}</p>
          <div className="flex items-center gap-2 mt-1">
            {listing.profiles?.is_verified && <span className="text-green-600">✅ VERIFIED</span>}
            <span className="text-trust-orange">TRUST SCORE: {listing.profiles?.trust_score}</span>
          </div>
          <p className="mt-2">📞 {listing.profiles?.phone || 'Не указан'}</p>
          <a
            href={`https://wa.me/7${listing.profiles?.phone}`}
            target="_blank"
            className="block mt-4 text-center bg-green-500 text-white py-2 rounded-lg"
          >
            Написать в WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold">Отзывы ({reviews?.length || 0})</h2>
        {reviews?.map((r: any) => (
          <div key={r.id} className="border-t py-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold">{r.profiles?.full_name}</span>
              <span className="text-yellow-500">{'★'.repeat(r.rating)}</span>
            </div>
            <p className="text-gray-600">{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

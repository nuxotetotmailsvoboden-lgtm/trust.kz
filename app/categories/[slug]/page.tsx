import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const supabase = createClient()
  const { data: category } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', params.slug)
    .single()

  if (!category) return <div className="container-custom py-8">Категория не найдена</div>

  const { data: listings } = await supabase
    .from('listings')
    .select('*, profiles(full_name, trust_score)')
    .eq('category_id', category.id)
    .eq('is_active', true)
    .order('created_at', { ascending: false })

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold">{category.name}</h1>
      <p className="text-gray-500 mt-2">{category.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {listings?.map((listing: any) => (
          <Link key={listing.id} href={`/listings/${listing.id}`}>
            <div className="border rounded-xl p-4 hover:shadow-md transition">
              <h3 className="font-bold">{listing.title}</h3>
              <p className="text-trust-orange font-semibold">{listing.price} ₸</p>
              <p className="text-sm text-gray-500">{listing.city}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">{listing.profiles?.full_name}</span>
                <span className="text-xs text-trust-orange">{listing.profiles?.trust_score || 0}</span>
              </div>
            </div>
          </Link>
        ))}
        {!listings?.length && <p className="text-gray-400">В этой категории пока нет объявлений.</p>}
      </div>
    </div>
  )
}

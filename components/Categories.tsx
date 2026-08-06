import { createClient } from '@/utils/supabase/server'

export default async function Categories() {
  const supabase = await createClient()
  const { data: categories } = await supabase
    .from('categories')
    .select('*')
    .order('name')

  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Популярные категории</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories?.map((cat) => (
            <a
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="group rounded-2xl border border-gray-200 p-5 transition hover:border-trust-orange hover:shadow-md"
            >
              <div className="text-3xl">{cat.icon || '📌'}</div>
              <h3 className="mt-2 font-semibold">{cat.name}</h3>
              <p className="text-sm text-gray-500">{cat.description}</p>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="inline-block rounded-full bg-trust-orange px-6 py-2 text-sm font-medium text-white hover:bg-orange-600">
            Реклама в Instagram от 2 000 ₸ за сторис
          </a>
          <span className="ml-3 text-sm text-gray-500">
            <a href="#" className="text-trust-orange hover:underline">Смотреть площадки</a>
          </span>
        </div>
      </div>
    </section>
  )
}

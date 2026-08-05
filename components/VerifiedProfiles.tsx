const profiles = [
  {
    name: 'Мебельный салон "Comfort"',
    category: 'Мебель',
    rating: 4.9,
    reviews: 128,
    city: 'Алматы',
    score: 9.1,
  },
  {
    name: 'СТО "Drive Service"',
    category: 'Автосервис',
    rating: 4.8,
    reviews: 96,
    city: 'Алматы',
    score: 8.6,
  },
  {
    name: 'Ремонт квартир под ключ',
    category: 'Строительство',
    rating: 5.0,
    reviews: 75,
    city: 'Алматы',
    score: 9.3,
  },
  {
    name: 'Стоматология "Dental Plus"',
    category: 'Стоматология',
    rating: 4.9,
    reviews: 113,
    city: 'Алматы',
    score: 9.0,
  },
];

export default function VerifiedProfiles() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container-custom">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Проверенные профили</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((p) => (
            <div
              key={p.name}
              className="card-hover rounded-2xl bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                      ✅ VERIFIED
                    </span>
                  </div>
                  <h3 className="mt-2 font-bold">{p.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-xl font-black text-trust-orange">{p.score}</div>
                  <div className="text-xs text-gray-400">TRUST SCORE</div>
                </div>
              </div>
              <p className="text-sm text-gray-500">{p.category}</p>
              <div className="mt-3 flex items-center gap-1 text-sm">
                <span className="text-yellow-500">★</span>
                <span className="font-medium">{p.rating}</span>
                <span className="text-gray-400">({p.reviews} отзывов)</span>
              </div>
              <p className="mt-1 text-xs text-gray-400">{p.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

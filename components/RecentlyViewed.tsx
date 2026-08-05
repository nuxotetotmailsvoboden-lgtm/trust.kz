const items = [
  'Мебельный салон "Comfort"',
  'СТО "Drive Service"',
  'Ремонт квартир под ключ',
];

export default function RecentlyViewed() {
  return (
    <section className="border-t border-gray-200 py-12">
      <div className="container-custom">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
          Недавно просмотренные
        </h3>
        <div className="mt-4 flex flex-wrap gap-4">
          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-full bg-gray-100 px-5 py-2 text-sm text-gray-700 transition hover:bg-gray-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

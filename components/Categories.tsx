const categories = [
  { name: 'Услуги', desc: 'От строительства до юриста', icon: '🔧' },
  { name: 'Маркет', desc: 'Мебель, техника, товары', icon: '🛍️' },
  { name: 'Реклама', desc: 'Instagram, Telegram, TikTok, YouTube', icon: '📱' },
  { name: 'Автомобили', desc: 'Продажа авто от владельцев', icon: '🚗' },
  { name: 'Недвижимость', desc: 'Продажа и аренда без посредников', icon: '🏠' },
  { name: 'Обучение', desc: 'Курсы, школы, репетиторы', icon: '📚' },
  { name: 'Работа', desc: 'Вакансии и поиск сотрудников', icon: '💼' },
  { name: 'Компании', desc: 'Проверенные организации', icon: '🏢' },
];

export default function Categories() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Популярные категории</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="group rounded-2xl border border-gray-200 p-5 transition hover:border-trust-orange hover:shadow-md"
            >
              <div className="text-3xl">{cat.icon}</div>
              <h3 className="mt-2 font-semibold">{cat.name}</h3>
              <p className="text-sm text-gray-500">{cat.desc}</p>
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
  );
}

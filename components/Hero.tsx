export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-12 md:py-20">
      <div className="container-custom text-center">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          Найдите проверенного специалиста в Казахстане
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600 md:text-lg">
          TRUST VERIFIED профили • Честные отзывы • Безопасные сделки
        </p>

        {/* Поиск */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Что вы хотите найти?"
            className="flex-1 rounded-xl border border-gray-300 px-5 py-3 text-base shadow-sm focus:border-trust-orange focus:outline-none focus:ring-2 focus:ring-trust-orange/30"
          />
          <select className="rounded-xl border border-gray-300 px-5 py-3 text-base shadow-sm focus:border-trust-orange focus:outline-none focus:ring-2 focus:ring-trust-orange/30">
            <option>Категория</option>
            <option>Услуги</option>
            <option>Маркет</option>
            <option>Реклама</option>
            <option>Автомобили</option>
            <option>Недвижимость</option>
            <option>Обучение</option>
            <option>Работа</option>
            <option>Компании</option>
          </select>
          <select className="rounded-xl border border-gray-300 px-5 py-3 text-base shadow-sm focus:border-trust-orange focus:outline-none focus:ring-2 focus:ring-trust-orange/30">
            <option>Алматы</option>
            <option>Астана</option>
            <option>Шымкент</option>
            <option>Караганда</option>
          </select>
          <button className="rounded-xl bg-trust-orange px-8 py-3 font-semibold text-white shadow-md hover:bg-orange-600">
            Найти
          </button>
        </div>

        {/* Популярное */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600">
          <span className="font-medium">Популярное:</span>
          <a href="#" className="rounded-full bg-gray-100 px-3 py-1 hover:bg-gray-200">Ремонт квартир</a>
          <a href="#" className="rounded-full bg-gray-100 px-3 py-1 hover:bg-gray-200">Стоматология</a>
          <a href="#" className="rounded-full bg-gray-100 px-3 py-1 hover:bg-gray-200">Маникюр</a>
          <a href="#" className="rounded-full bg-gray-100 px-3 py-1 hover:bg-gray-200">Мебель на заказ</a>
          <a href="#" className="rounded-full bg-gray-100 px-3 py-1 hover:bg-gray-200">Авто с пробегом</a>
        </div>
      </div>
    </section>
  );
}

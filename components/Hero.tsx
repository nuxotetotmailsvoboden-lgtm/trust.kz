'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.append('q', searchQuery);
    if (category && category !== 'Категория') params.append('category', category);
    if (city && city !== 'Город') params.append('city', city);
    router.push(`/search?${params.toString()}`);
  };

  const handlePopularTag = (tag: string) => {
    // Можно либо заполнить поле и дать пользователю нажать кнопку,
    // либо сразу перейти на поиск с этим тегом
    setSearchQuery(tag);
    router.push(`/search?q=${encodeURIComponent(tag)}`);
  };

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
        <form onSubmit={handleSearch} className="mx-auto mt-8 flex max-w-3xl flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Что вы хотите найти?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 rounded-xl border border-gray-300 px-5 py-3 text-base shadow-sm focus:border-trust-orange focus:outline-none focus:ring-2 focus:ring-trust-orange/30"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-xl border border-gray-300 px-5 py-3 text-base shadow-sm focus:border-trust-orange focus:outline-none focus:ring-2 focus:ring-trust-orange/30"
          >
            <option value="">Категория</option>
            <option value="Услуги">Услуги</option>
            <option value="Маркет">Маркет</option>
            <option value="Реклама">Реклама</option>
            <option value="Автомобили">Автомобили</option>
            <option value="Недвижимость">Недвижимость</option>
            <option value="Обучение">Обучение</option>
            <option value="Работа">Работа</option>
            <option value="Компании">Компании</option>
          </select>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="rounded-xl border border-gray-300 px-5 py-3 text-base shadow-sm focus:border-trust-orange focus:outline-none focus:ring-2 focus:ring-trust-orange/30"
          >
            <option value="">Город</option>
            <option>Алматы</option>
            <option>Астана</option>
            <option>Шымкент</option>
            <option>Караганда</option>
            <option>Актобе</option>
            <option>Атырау</option>
            <option>Тараз</option>
            <option>Усть-Каменогорск</option>
            <option>Павлодар</option>
            <option>Семей</option>
            <option>Уральск</option>
            <option>Костанай</option>
            <option>Кызылорда</option>
            <option>Петропавловск</option>
            <option>Талдыкорган</option>
          </select>
          <button
            type="submit"
            className="rounded-xl bg-trust-orange px-8 py-3 font-semibold text-white shadow-md hover:bg-orange-600 transition-colors"
          >
            Найти
          </button>
        </form>

        {/* Популярное */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600">
          <span className="font-medium">Популярное:</span>
          {['Ремонт квартир', 'Стоматология', 'Маникюр', 'Мебель на заказ', 'Авто с пробегом'].map((tag) => (
            <button
              key={tag}
              onClick={() => handlePopularTag(tag)}
              className="rounded-full bg-gray-100 px-3 py-1 hover:bg-gray-200 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

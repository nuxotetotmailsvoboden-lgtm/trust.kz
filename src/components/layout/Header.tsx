"use client";

import Link from "next/link";

const menu = [
  {
    title: "Услуги",
    href: "/services",
  },
  {
    title: "Маркет",
    href: "/market",
  },
  {
    title: "Реклама",
    href: "/advertising",
  },
  {
    title: "Авто",
    href: "/cars",
  },
  {
    title: "Недвижимость",
    href: "/real-estate",
  },
  {
    title: "Обучение",
    href: "/education",
  },
  {
    title: "Работа",
    href: "/jobs",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-bold text-white shadow-lg">
            T
          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              TRUST
            </h1>

            <p className="text-xs text-gray-500">
              Платформа доверия Казахстана
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {menu.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-semibold text-gray-700 transition hover:text-emerald-600"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-xl border border-gray-300 px-5 py-2.5 font-semibold transition hover:bg-gray-100 lg:block">
            Войти
          </button>

          <button className="rounded-xl bg-emerald-600 px-5 py-2.5 font-semibold text-white shadow-lg transition hover:bg-emerald-700">
            Добавить профиль
          </button>
        </div>
      </div>
    </header>
  );
}

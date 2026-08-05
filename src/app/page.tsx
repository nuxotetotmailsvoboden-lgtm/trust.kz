export default function HomePage() {
  const categories = [
    {
      icon: "👨‍🔧",
      title: "Услуги",
      desc: "Строители, СТО, юристы, стоматологи, маникюр и другие",
    },
    {
      icon: "🛒",
      title: "Маркет",
      desc: "Мебель, техника, товары и магазины",
    },
    {
      icon: "📢",
      title: "Реклама",
      desc: "Instagram, Telegram, TikTok, YouTube",
    },
    {
      icon: "🚗",
      title: "Автомобили",
      desc: "Продажа автомобилей от владельцев",
    },
    {
      icon: "🏠",
      title: "Недвижимость",
      desc: "Продажа и аренда без посредников",
    },
    {
      icon: "🎓",
      title: "Обучение",
      desc: "Курсы, репетиторы, школы, обучение",
    },
    {
      icon: "💼",
      title: "Работа",
      desc: "Вакансии и поиск сотрудников",
    },
    {
      icon: "🏢",
      title: "Компании",
      desc: "Проверенные организации Казахстана",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100">
      {/* Header */}

      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-2xl text-white">
              ✔
            </div>

            <div>
              <h1 className="text-2xl font-bold">TRUST</h1>

              <p className="text-sm text-gray-500">
                Платформа доверия Казахстана
              </p>
            </div>
          </div>

          <div className="hidden gap-6 lg:flex">
            <button className="font-medium hover:text-emerald-600">
              Категории
            </button>

            <button className="font-medium hover:text-emerald-600">
              Компании
            </button>

            <button className="font-medium hover:text-emerald-600">
              Реклама
            </button>

            <button className="font-medium hover:text-emerald-600">
              Обучение
            </button>
          </div>

          <button className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700">
            Войти
          </button>
        </div>
      </header>

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[40px] bg-gradient-to-r from-emerald-600 to-emerald-500 p-12 text-white shadow-xl">
          <h1 className="text-5xl font-black">
            Найдите проверенного специалиста
          </h1>

          <p className="mt-5 max-w-3xl text-xl text-emerald-50">
            Услуги • Магазины • Реклама • Авто • Недвижимость • Обучение
          </p>

          <div className="mt-10 flex flex-col gap-4 lg:flex-row">
            <input
              placeholder="Что вы хотите найти?"
              className="h-16 flex-1 rounded-2xl px-6 text-lg text-black outline-none"
            />

            <button className="h-16 rounded-2xl bg-black px-10 text-lg font-bold text-white transition hover:bg-neutral-800">
              Найти
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="mb-8 text-3xl font-bold">
          Популярные категории
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((item) => (
            <div
              key={item.title}
              className="cursor-pointer rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST */}

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[40px] bg-white p-10 shadow-sm">
          <h2 className="text-3xl font-bold">
            Почему выбирают TRUST?
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <div>
              <div className="text-4xl">🟢</div>

              <h3 className="mt-4 text-xl font-bold">
                TRUST VERIFIED
              </h3>

              <p className="mt-3 text-gray-600">
                Только проверенные специалисты,
                магазины и компании.
              </p>
            </div>

            <div>
              <div className="text-4xl">⭐</div>

              <h3 className="mt-4 text-xl font-bold">
                TRUST SCORE
              </h3>

              <p className="mt-3 text-gray-600">
                Собственная система оценки
                надежности пользователей.
              </p>
            </div>

            <div>
              <div className="text-4xl">🚀</div>

              <h3 className="mt-4 text-xl font-bold">
                Всё в одном месте
              </h3>

              <p className="mt-3 text-gray-600">
                Услуги, реклама, мебель,
                недвижимость, автомобили,
                обучение и многое другое.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Subscription() {
  return (
    <section className="bg-trust-dark py-16 text-white">
      <div className="container-custom flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">
            Разместите профиль и получите клиентов
          </h2>
          <p className="mt-2 text-gray-300">Подписка от 10 000 ₸ / месяц</p>
        </div>
        <a
          href="#"
          className="rounded-full bg-trust-orange px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-orange-600"
        >
          Подробнее →
        </a>
      </div>
    </section>
  );
}

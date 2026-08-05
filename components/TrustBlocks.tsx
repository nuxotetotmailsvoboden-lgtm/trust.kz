export default function TrustBlocks() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 p-8 text-center shadow-sm">
            <div className="text-5xl">🛡️</div>
            <h3 className="mt-4 text-2xl font-bold text-green-800">TRUST VERIFIED</h3>
            <p className="mt-2 text-green-700">
              Только проверенные специалисты, магазины и компании
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-amber-100 p-8 text-center shadow-sm">
            <div className="text-5xl">📊</div>
            <h3 className="mt-4 text-2xl font-bold text-amber-800">TRUST SCORE</h3>
            <p className="mt-2 text-amber-700">
              Собственная система оценки надежности пользователей
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

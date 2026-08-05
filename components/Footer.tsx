export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8">
      <div className="container-custom flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
        <div className="flex items-center gap-4">
          <span className="font-bold text-trust-orange">TRUST</span>
          <span>© 2025</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1">
            <span className="text-green-500">🔒</span> Безопасность
          </span>
          <span>Ваши данные защищены.</span>
          <span>Безопасные сделки и платежи</span>
        </div>
      </div>
    </footer>
  );
}

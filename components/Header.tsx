export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white py-4">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-trust-orange">TRUST</span>
          <span className="hidden text-sm text-gray-500 sm:inline">
            Платформа доверия Казахстана
          </span>
        </div>
        <nav className="flex items-center gap-4 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-trust-orange">Вход</a>
          <a href="#" className="rounded-lg bg-trust-orange px-4 py-2 text-white hover:bg-orange-600">
            Регистрация
          </a>
        </nav>
      </div>
    </header>
  );
}

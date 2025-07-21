import { Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Layout = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/services", label: "Услуги и цены" },
    { path: "/brands", label: "Бренды" },
    { path: "/promotions", label: "Акции" },
    { path: "/reviews", label: "Отзывы" },
    { path: "/blog", label: "Блог" },
    { path: "/contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">HybridTech</div>
                <div className="text-sm text-gray-600">Автосервис будущего</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === item.path
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-right">
                <div className="text-lg font-bold text-gray-900">+7 (495) 123-45-67</div>
                <div className="text-sm text-gray-600">Круглосуточно</div>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                <Icon name="Calendar" size={16} className="mr-2" />
                Записаться
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="lg:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden mt-4 pt-4 border-t">
            <div className="grid grid-cols-2 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium p-2 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-col space-y-2">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">+7 (495) 123-45-67</div>
                <div className="text-sm text-gray-600">Круглосуточно</div>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                <Icon name="Calendar" size={16} className="mr-2" />
                Записаться
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">HybridTech</div>
                  <div className="text-sm text-gray-400">Автосервис будущего</div>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Профессиональный ремонт и обслуживание гибридных и электрических автомобилей 
                с использованием передовых технологий и оригинальных запчастей.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Диагностика батареи</li>
                <li>Ремонт двигателя</li>
                <li>Зарядные системы</li>
                <li>Техобслуживание</li>
                <li>Экодиагностика</li>
                <li>Эвакуатор 24/7</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <Icon name="Phone" size={16} className="text-blue-400 mt-1" />
                  <div>
                    <div className="text-white font-medium">+7 (495) 123-45-67</div>
                    <div className="text-gray-400">Круглосуточно</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={16} className="text-green-400 mt-1" />
                  <div>
                    <div className="text-white">г. Москва, ул. Электрическая, 24</div>
                    <div className="text-gray-400">Пн-Пт: 8:00-20:00, Сб-Вс: 9:00-18:00</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Mail" size={16} className="text-blue-400 mt-1" />
                  <div>
                    <div className="text-white">info@hybridtech.ru</div>
                    <div className="text-gray-400">Ответим в течение часа</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 HybridTech. Все права защищены.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
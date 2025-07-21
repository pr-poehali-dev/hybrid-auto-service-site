import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-2xl md:text-4xl block mb-4">HEVSR</span>
                Сервис будущего для 
                <span className="block bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                  электромобилей
                </span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Профессиональный ремонт и обслуживание гибридных и электрических автомобилей
                с использованием передовых технологий и оригинальных запчастей
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на диагностику
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Вызвать эвакуатор
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/4b46578e-839f-445d-ae69-e9f9930f1b58.jpg" 
                alt="Современная станция зарядки электромобилей"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">1000+ клиентов</div>
                    <div className="text-sm text-gray-600">довольны нашим сервисом</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500">
              <CardContent className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="Battery" size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Диагностика батареи</h3>
                  <p className="text-gray-600 text-sm">Полная проверка за 30 минут</p>
                  <div className="text-blue-600 font-semibold mt-1">от 3 500 ₽</div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-green-500">
              <CardContent className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="Zap" size={32} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Зарядные системы</h3>
                  <p className="text-gray-600 text-sm">Установка и ремонт</p>
                  <div className="text-green-600 font-semibold mt-1">от 8 000 ₽</div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500">
              <CardContent className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="Truck" size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Эвакуатор 24/7</h3>
                  <p className="text-gray-600 text-sm">Быстрый выезд по городу</p>
                  <div className="text-blue-600 font-semibold mt-1">от 1 500 ₽</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Полный спектр услуг</h2>
            <p className="text-xl text-gray-600 mb-8">Для электрических и гибридных автомобилей</p>
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                Смотреть все услуги
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "Wrench", title: "Ремонт двигателя", desc: "Электродвигатели и гибридные установки", price: "от 15 000 ₽" },
              { icon: "Settings", title: "Техобслуживание", desc: "Регулярное ТО по регламенту", price: "от 5 500 ₽" },
              { icon: "Leaf", title: "Экодиагностика", desc: "Проверка экологических параметров", price: "от 2 800 ₽" },
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white">
                <CardContent className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <div className="text-green-600 font-semibold">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Работаем с ведущими брендами</h2>
            <p className="text-xl text-gray-600 mb-8">Специализируемся на всех популярных марках</p>
            <Link to="/brands">
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                Все бренды
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Tesla', 'BMW', 'Nissan', 'Toyota', 'Volkswagen', 'Audi'].map((brand) => (
              <div key={brand} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Car" size={24} className="text-blue-600" />
                </div>
                <span className="font-semibold text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-400">Преимущества работы с профессионалами</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">5+ лет опыта</h3>
              <p className="text-gray-400">Работаем с электромобилями с первых дней их появления в России</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1000+ довольных клиентов</h3>
              <p className="text-gray-400">Высокие оценки и положительные отзывы наших клиентов</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Быстрый сервис</h3>
              <p className="text-gray-400">Диагностика за 30 минут, ремонт в кратчайшие сроки</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={40} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Гарантия 2 года</h3>
              <p className="text-gray-400">Расширенная гарантия на все виды выполненных работ</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы доверить нам свой автомобиль?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Запишитесь на диагностику или вызовите эвакуатор прямо сейчас
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на диагностику
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
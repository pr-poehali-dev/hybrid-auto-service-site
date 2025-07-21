import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-electric-blue via-electric-light to-electric-green">
      
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Zap" size={32} className="text-electric-dark" />
            <span className="text-2xl font-bold text-electric-dark">HybridTech</span>
          </div>
          <div className="hidden md:flex space-x-8 text-electric-dark">
            <a href="#services" className="hover:text-electric-blue transition-colors">Услуги</a>
            <a href="#brands" className="hover:text-electric-blue transition-colors">Бренды</a>
            <a href="#reviews" className="hover:text-electric-blue transition-colors">Отзывы</a>
            <a href="#blog" className="hover:text-electric-blue transition-colors">Блог</a>
            <a href="#contact" className="hover:text-electric-blue transition-colors">Контакты</a>
          </div>
          <Button className="bg-electric-green hover:bg-electric-green/90 text-white">
            Записаться
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-electric-dark mb-6 animate-fade-in">
            Сервис будущего для 
            <span className="bg-gradient-to-r from-electric-blue to-electric-green bg-clip-text text-transparent">
              {" "}электромобилей
            </span>
          </h1>
          <p className="text-xl text-electric-dark/80 mb-8 animate-fade-in">
            Профессиональный ремонт и обслуживание гибридных и электрических автомобилей
            с использованием передовых технологий
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-3">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на диагностику
            </Button>
            <Button variant="outline" size="lg" className="border-electric-dark text-electric-dark hover:bg-electric-dark hover:text-white px-8 py-3">
              <Icon name="Phone" size={20} className="mr-2" />
              Вызвать эвакуатор
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="mt-16 relative">
          <img 
            src="/img/2a995929-6ad3-48ff-bcfb-ab5759c6d2ad.jpg" 
            alt="Современная станция зарядки электромобилей"
            className="mx-auto rounded-2xl shadow-2xl max-w-4xl w-full animate-scale-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-electric-dark/20 to-transparent rounded-2xl"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-electric-dark mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр услуг для электрического транспорта</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Battery" size={32} className="text-electric-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-electric-dark">Диагностика батареи</h3>
                <p className="text-gray-600 mb-4">Полная диагностика высоковольтной батареи с детальным отчетом</p>
                <div className="text-electric-green font-semibold">от 3 500 ₽</div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-electric-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wrench" size={32} className="text-electric-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-electric-dark">Ремонт двигателя</h3>
                <p className="text-gray-600 mb-4">Ремонт электродвигателей и гибридных силовых установок</p>
                <div className="text-electric-green font-semibold">от 15 000 ₽</div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-electric-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-electric-dark">Зарядные системы</h3>
                <p className="text-gray-600 mb-4">Установка и ремонт зарядных устройств любой мощности</p>
                <div className="text-electric-green font-semibold">от 8 000 ₽</div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-electric-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Settings" size={32} className="text-electric-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-electric-dark">Техобслуживание</h3>
                <p className="text-gray-600 mb-4">Регулярное техническое обслуживание по регламенту</p>
                <div className="text-electric-green font-semibold">от 5 500 ₽</div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Leaf" size={32} className="text-electric-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-electric-dark">Экодиагностика</h3>
                <p className="text-gray-600 mb-4">Проверка экологических параметров и выбросов</p>
                <div className="text-electric-green font-semibold">от 2 800 ₽</div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-electric-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={32} className="text-electric-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-electric-dark">Эвакуатор 24/7</h3>
                <p className="text-gray-600 mb-4">Круглосуточная эвакуация электромобилей по городу</p>
                <div className="text-electric-green font-semibold">от 1 500 ₽</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="bg-electric-light py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-electric-dark mb-4">Работаем с ведущими брендами</h2>
            <p className="text-xl text-gray-600">Специализируемся на всех популярных марках электромобилей</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Tesla', 'BMW', 'Nissan', 'Toyota', 'Volkswagen', 'Audi', 'Mercedes', 'Hyundai', 'Volvo', 'Jaguar', 'Porsche', 'Ford'].map((brand) => (
              <div key={brand} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Car" size={24} className="text-electric-blue" />
                </div>
                <span className="font-semibold text-electric-dark">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-electric-dark mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600">Преимущества работы с профессионалами</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-electric-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={40} className="text-electric-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-electric-dark">5+ лет опыта</h3>
              <p className="text-gray-600">Работаем с электромобилями с первых дней их появления</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={40} className="text-electric-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-electric-dark">1000+ довольных клиентов</h3>
              <p className="text-gray-600">Высокие оценки и положительные отзывы наших клиентов</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-electric-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={40} className="text-electric-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-electric-dark">Быстрый сервис</h3>
              <p className="text-gray-600">Диагностика за 30 минут, ремонт в кратчайшие сроки</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={40} className="text-electric-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-electric-dark">Гарантия 2 года</h3>
              <p className="text-gray-600">Расширенная гарантия на все виды выполненных работ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-electric-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl mb-8 text-electric-light">
                Готовы помочь с любыми вопросами по обслуживанию вашего электромобиля
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">+7 (495) 123-45-67</div>
                    <div className="text-electric-light">Круглосуточно</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-electric-green rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">г. Москва, ул. Электрическая, 24</div>
                    <div className="text-electric-light">Пн-Пт: 8:00-20:00, Сб-Вс: 9:00-18:00</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">info@hybridtech.ru</div>
                    <div className="text-electric-light">Ответим в течение часа</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6">Записаться на сервис</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-electric-blue"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-electric-blue"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Марка и модель автомобиля"
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-electric-blue"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Описание проблемы"
                    rows={4}
                    className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-electric-blue resize-none"
                  />
                </div>
                <Button className="w-full bg-electric-green hover:bg-electric-green/90 text-white py-3">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-electric-dark/90 text-white py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Zap" size={24} className="text-electric-blue" />
              <span className="text-xl font-bold">HybridTech</span>
            </div>
            <div className="text-electric-light">
              © 2024 HybridTech. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
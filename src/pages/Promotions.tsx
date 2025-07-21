import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Promotions = () => {
  const promotions = [
    {
      title: "Комплексная диагностика со скидкой",
      description: "Полная диагностика автомобиля + проверка высоковольтной батареи",
      originalPrice: "5 500 ₽",
      discountPrice: "4 500 ₽",
      discount: "18%",
      validUntil: "31 июля 2024",
      features: [
        "Компьютерная диагностика всех систем",
        "Проверка состояния батареи",
        "Анализ зарядной системы",
        "Детальный отчет с рекомендациями"
      ],
      popular: true,
      icon: "Search"
    },
    {
      title: "ТО + Диагностика",
      description: "Техническое обслуживание с комплексной диагностикой",
      originalPrice: "8 000 ₽",
      discountPrice: "7 000 ₽",
      discount: "12%",
      validUntil: "15 августа 2024",
      features: [
        "Полное техническое обслуживание",
        "Замена фильтров и жидкостей",
        "Диагностика всех систем",
        "Проверка тормозной системы"
      ],
      icon: "Settings"
    },
    {
      title: "Первое посещение",
      description: "Специальная цена для новых клиентов на диагностику",
      originalPrice: "3 500 ₽",
      discountPrice: "2 500 ₽",
      discount: "28%",
      validUntil: "Постоянно",
      features: [
        "Диагностика высоковольтной батареи",
        "Общий осмотр автомобиля",
        "Консультация специалиста",
        "План дальнейшего обслуживания"
      ],
      icon: "UserPlus",
      newClient: true
    },
    {
      title: "Установка домашней зарядки",
      description: "Монтаж зарядной станции для дома с материалами",
      originalPrice: "15 000 ₽",
      discountPrice: "12 000 ₽",
      discount: "20%",
      validUntil: "31 августа 2024",
      features: [
        "Зарядная станция 7kW",
        "Монтаж и подключение",
        "Настройка и тестирование",
        "Гарантия 2 года"
      ],
      icon: "Home"
    },
    {
      title: "Летняя подготовка",
      description: "Комплексная подготовка к летнему сезону",
      originalPrice: "6 500 ₽",
      discountPrice: "5 200 ₽",
      discount: "20%",
      validUntil: "30 июля 2024",
      features: [
        "Проверка системы охлаждения",
        "Диагностика кондиционера",
        "Проверка летних настроек ЭБУ",
        "Рекомендации по эксплуатации"
      ],
      seasonal: true,
      icon: "Sun"
    },
    {
      title: "Экспресс-диагностика",
      description: "Быстрая проверка основных систем за 20 минут",
      originalPrice: "2 500 ₽",
      discountPrice: "1 800 ₽",
      discount: "28%",
      validUntil: "Весь месяц",
      features: [
        "Проверка основных систем",
        "Считывание ошибок",
        "Состояние батареи",
        "Краткий отчет"
      ],
      icon: "Zap"
    }
  ];

  const seasonalOffers = [
    {
      title: "Подготовка к зиме",
      description: "Комплекс услуг для подготовки электромобиля к холодному сезону",
      price: "от 4 500 ₽",
      features: [
        "Проверка системы отопления",
        "Диагностика батареи в условиях холода",
        "Настройка предпускового подогрева",
        "Рекомендации по зимней эксплуатации"
      ],
      comingSoon: true
    },
    {
      title: "Весенний чек-ап",
      description: "Проверка автомобиля после зимнего периода",
      price: "от 3 800 ₽",
      features: [
        "Диагностика после зимы",
        "Проверка влияния реагентов",
        "Состояние уплотнителей",
        "Калибровка систем"
      ],
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Акции и специальные предложения</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Выгодные предложения на диагностику, ремонт и обслуживание электромобилей. 
              Экономьте с нами до 30% на качественном сервисе.
            </p>
          </div>
        </div>
      </section>

      {/* Current Promotions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Действующие акции</h2>
            <p className="text-xl text-gray-600">Успейте воспользоваться выгодными предложениями</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow relative overflow-hidden">
                {promo.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      Популярно
                    </Badge>
                  </div>
                )}
                {promo.newClient && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                      Новым клиентам
                    </Badge>
                  </div>
                )}
                {promo.seasonal && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                      Сезонная
                    </Badge>
                  </div>
                )}
                
                <div className="absolute top-0 left-0 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-br-lg">
                  <span className="text-sm font-bold">-{promo.discount}</span>
                </div>
                
                <CardHeader className="pt-12">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                      <Icon name={promo.icon as any} size={24} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900 mb-2">{promo.title}</CardTitle>
                      <p className="text-gray-600 text-sm leading-relaxed">{promo.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="text-3xl font-bold text-green-600">{promo.discountPrice}</div>
                      <div className="text-lg text-gray-500 line-through">{promo.originalPrice}</div>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Icon name="Clock" size={16} className="mr-1" />
                      Действует до {promo.validUntil}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900 text-sm">В акцию входит:</h4>
                    <ul className="space-y-1">
                      {promo.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <Icon name="Check" size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                    Воспользоваться акцией
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Offers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Сезонные предложения</h2>
            <p className="text-xl text-gray-600">Готовимся к смене сезонов заранее</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {seasonalOffers.map((offer, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="border-blue-500 text-blue-600">
                    Скоро
                  </Badge>
                </div>
                
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl flex items-center justify-center">
                      <Icon name="Calendar" size={32} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{offer.description}</p>
                      <div className="text-2xl font-bold text-green-600 mt-3">{offer.price}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {offer.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-green-500 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full mt-6 bg-gray-100 text-gray-500 cursor-not-allowed" 
                    disabled
                  >
                    Скоро будет доступно
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Программа лояльности HybridTech</h2>
              <p className="text-xl text-gray-400 mb-8">
                Становитесь постоянным клиентом и получайте дополнительные скидки 
                и привилегии при каждом обращении.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Star" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Накопительная скидка</h3>
                    <p className="text-gray-400 text-sm">До 15% скидки для постоянных клиентов</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Icon name="Gift" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Бонусные услуги</h3>
                    <p className="text-gray-400 text-sm">Бесплатная диагностика каждое 5-е посещение</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Bell" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Персональные уведомления</h3>
                    <p className="text-gray-400 text-sm">О новых акциях и необходимости ТО</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900 to-green-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Присоединиться к программе</h3>
              <p className="text-gray-300 mb-6">
                Регистрация в программе лояльности абсолютно бесплатна. 
                Начните экономить уже с первого визита!
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white">3-5 посещений</span>
                    <Badge className="bg-blue-500">5% скидка</Badge>
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white">6-10 посещений</span>
                    <Badge className="bg-green-500">10% скидка</Badge>
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white">10+ посещений</span>
                    <Badge className="bg-orange-500">15% скидка</Badge>
                  </div>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-white text-gray-900 hover:bg-gray-100">
                Присоединиться бесплатно
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Не упустите выгодные предложения!</h2>
          <p className="text-xl text-blue-100 mb-8">
            Запишитесь сейчас и воспользуйтесь одной из наших акций. 
            Количество мест ограничено.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться по акции
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Узнать подробности
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promotions;
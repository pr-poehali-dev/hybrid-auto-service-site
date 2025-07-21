import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      category: "Диагностика",
      items: [
        {
          title: "Диагностика высоковольтной батареи",
          description: "Полная проверка состояния батареи, анализ ячеек, замер емкости и внутреннего сопротивления",
          price: "от 3 500 ₽",
          duration: "30-60 мин",
          icon: "Battery",
          popular: true
        },
        {
          title: "Компьютерная диагностика",
          description: "Сканирование всех систем автомобиля, чтение и расшифровка ошибок",
          price: "от 2 000 ₽",
          duration: "20-30 мин",
          icon: "Monitor"
        },
        {
          title: "Диагностика зарядной системы",
          description: "Проверка работы зарядного устройства, кабелей и разъемов",
          price: "от 2 500 ₽",
          duration: "30-45 мин",
          icon: "Zap"
        }
      ]
    },
    {
      category: "Ремонт и обслуживание",
      items: [
        {
          title: "Ремонт электродвигателя",
          description: "Ремонт тяговых электродвигателей, замена подшипников, обмоток",
          price: "от 15 000 ₽",
          duration: "1-3 дня",
          icon: "Wrench",
          popular: true
        },
        {
          title: "Техническое обслуживание",
          description: "Регулярное ТО согласно регламенту производителя, замена фильтров, жидкостей",
          price: "от 5 500 ₽",
          duration: "2-4 часа",
          icon: "Settings"
        },
        {
          title: "Ремонт инвертора",
          description: "Диагностика и ремонт силового инвертора, замена модулей IGBT",
          price: "от 25 000 ₽",
          duration: "2-5 дней",
          icon: "Cpu"
        },
        {
          title: "Ремонт системы охлаждения",
          description: "Обслуживание системы охлаждения батареи и силовой электроники",
          price: "от 8 000 ₽",
          duration: "3-6 часов",
          icon: "Thermometer"
        }
      ]
    },
    {
      category: "Зарядные системы",
      items: [
        {
          title: "Установка домашней зарядки",
          description: "Установка и настройка зарядной станции для дома или офиса",
          price: "от 12 000 ₽",
          duration: "4-8 часов",
          icon: "Home"
        },
        {
          title: "Ремонт зарядного порта",
          description: "Ремонт или замена зарядного разъема, восстановление контактов",
          price: "от 8 000 ₽",
          duration: "2-4 часа",
          icon: "Plug"
        },
        {
          title: "Установка быстрой зарядки",
          description: "Монтаж быстрых зарядных станций DC для коммерческого использования",
          price: "от 150 000 ₽",
          duration: "1-2 дня",
          icon: "Zap"
        }
      ]
    },
    {
      category: "Дополнительные услуги",
      items: [
        {
          title: "Экологическая диагностика",
          description: "Проверка соответствия экологическим нормам, измерение выбросов",
          price: "от 2 800 ₽",
          duration: "45-60 мин",
          icon: "Leaf"
        },
        {
          title: "Эвакуатор 24/7",
          description: "Круглосуточная эвакуация электромобилей специализированным эвакуатором",
          price: "от 1 500 ₽",
          duration: "20-40 мин",
          icon: "Truck",
          popular: true
        },
        {
          title: "Выездная диагностика",
          description: "Диагностика на месте с выездом специалиста к клиенту",
          price: "от 4 500 ₽",
          duration: "1-2 часа",
          icon: "MapPin"
        },
        {
          title: "Предпродажная подготовка",
          description: "Полная диагностика и подготовка автомобиля перед продажей",
          price: "от 6 000 ₽",
          duration: "2-4 часа",
          icon: "FileCheck"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Услуги и цены</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Полный спектр услуг для электрических и гибридных автомобилей. 
              Профессиональное обслуживание с гарантией качества.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.category}</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {category.items.map((service, serviceIndex) => (
                    <Card key={serviceIndex} className="hover:shadow-lg transition-shadow relative overflow-hidden">
                      {service.popular && (
                        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                          Популярно
                        </Badge>
                      )}
                      
                      <CardHeader>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                            <Icon name={service.icon as any} size={24} className="text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl text-gray-900 mb-2">{service.title}</CardTitle>
                            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-2xl font-bold text-green-600 mb-1">{service.price}</div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Icon name="Clock" size={16} className="mr-1" />
                              {service.duration}
                            </div>
                          </div>
                          <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                            Заказать
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Почему наши цены справедливы?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Прозрачное ценообразование</h3>
                    <p className="text-gray-600 text-sm">Никаких скрытых доплат, все расходы обсуждаются заранее</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Оригинальные запчасти</h3>
                    <p className="text-gray-600 text-sm">Работаем только с проверенными поставщиками</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Гарантия на работы</h3>
                    <p className="text-gray-600 text-sm">2 года гарантии на все виды ремонтных работ</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Профессиональное оборудование</h3>
                    <p className="text-gray-600 text-sm">Современное диагностическое и ремонтное оборудование</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Специальные предложения</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">Комплексная диагностика</h4>
                      <p className="text-sm text-gray-600">Диагностика + проверка батареи</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">4 500 ₽</div>
                      <div className="text-sm text-gray-500 line-through">5 500 ₽</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">ТО + диагностика</h4>
                      <p className="text-sm text-gray-600">Полное техобслуживание</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">7 000 ₽</div>
                      <div className="text-sm text-gray-500 line-through">8 000 ₽</div>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                Записаться по акции
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Нужна консультация по услугам?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Наши специалисты помогут выбрать оптимальный пакет услуг для вашего автомобиля
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-4">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const contactInfo = [
    {
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      description: "Звонки принимаем с 9:00 до 21:00",
      icon: "Phone",
      action: "tel:+74951234567"
    },
    {
      title: "WhatsApp",
      value: "+7 (495) 123-45-67",
      description: "Быстрая связь в мессенджере",
      icon: "MessageCircle",
      action: "https://wa.me/74951234567"
    },
    {
      title: "Email",
      value: "info@hevsr.ru",
      description: "Ответим в течение часа",
      icon: "Mail",
      action: "mailto:info@hevsr.ru"
    },
    {
      title: "Адрес",
      value: "Москва, ул. Электромобильная, 15",
      description: "Удобное расположение в центре",
      icon: "MapPin",
      action: "#"
    }
  ];

  const workingHours = [
    { day: "Понедельник - Пятница", hours: "9:00 - 21:00" },
    { day: "Суббота", hours: "10:00 - 18:00" },
    { day: "Воскресенье", hours: "Выходной" }
  ];

  const services = [
    "Экстренная диагностика",
    "Эвакуатор 24/7",
    "Выездная диагностика",
    "Консультации по телефону"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Контакты</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь 
              с обслуживанием вашего электромобиля.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Обратная связь</CardTitle>
                <p className="text-gray-600">
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Марка автомобиля
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Выберите марку</option>
                        <option value="tesla">Tesla</option>
                        <option value="bmw">BMW</option>
                        <option value="nissan">Nissan</option>
                        <option value="audi">Audi</option>
                        <option value="mercedes">Mercedes-Benz</option>
                        <option value="other">Другая</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Тип обращения
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Выберите тип</option>
                        <option value="diagnostics">Диагностика</option>
                        <option value="repair">Ремонт</option>
                        <option value="maintenance">ТО</option>
                        <option value="charging">Зарядка</option>
                        <option value="consultation">Консультация</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение *
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Опишите вашу проблему или вопрос..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="consent"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-700">
                      Согласен на обработку персональных данных
                    </label>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Наши контакты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                      <Icon name={contact.icon as any} size={20} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{contact.title}</h3>
                      <p className="font-medium text-blue-600">{contact.value}</p>
                      <p className="text-sm text-gray-600">{contact.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Часы работы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="font-medium text-gray-900">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center space-x-2 text-green-600">
                    <Icon name="Clock" size={16} />
                    <span className="text-sm font-medium">Сейчас открыто</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Services */}
            <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-700">Экстренные услуги</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="AlertCircle" size={16} className="text-red-600" />
                      <span className="text-sm text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Экстренный вызов
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Написать в WhatsApp
              </Button>
              <Button variant="outline" className="w-full">
                <Icon name="Calendar" size={16} className="mr-2" />
                Записаться онлайн
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как нас найти</h2>
            <p className="text-xl text-gray-600">Удобное расположение в центре Москвы</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Icon name="MapPin" size={48} className="mx-auto mb-4" />
                  <p className="text-lg font-medium">Интерактивная карта</p>
                  <p className="text-sm">Москва, ул. Электромобильная, 15</p>
                </div>
              </div>
            </div>
            
            {/* Location Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Как добраться</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Icon name="Car" size={20} className="text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium">На автомобиле</p>
                        <p className="text-sm text-gray-600">Парковка для клиентов бесплатная</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="Bus" size={20} className="text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium">На общественном транспорте</p>
                        <p className="text-sm text-gray-600">Метро "Технопарк", 5 минут пешком</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Ориентиры</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• Рядом с ТЦ "Электрон Плаза"</p>
                    <p>• Напротив заправки Tesla Supercharger</p>
                    <p>• Красное здание с белой вывеской</p>
                    <p>• Вход со двора</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Приезжайте к нам!</h2>
          <p className="text-xl text-blue-100 mb-8">
            Наш сервисный центр оборудован всем необходимым для качественного 
            обслуживания любых электромобилей.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
              <Icon name="Navigation" size={20} className="mr-2" />
              Построить маршрут
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на визит
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
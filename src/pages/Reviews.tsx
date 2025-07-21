import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      name: "Александр К.",
      car: "Tesla Model 3",
      rating: 5,
      date: "15 июля 2024",
      text: "Отличный сервис! Быстро диагностировали проблему с батареей и качественно отремонтировали. Персонал очень компетентный, цены адекватные. Рекомендую!",
      service: "Ремонт батареи",
      avatar: "🧑‍💼"
    },
    {
      name: "Мария С.",
      car: "BMW i4",
      rating: 5,
      date: "8 июля 2024",
      text: "Первый раз обслуживала электромобиль в HEVSR. Очень довольна результатом! Сделали полную диагностику, объяснили все нюансы. Буду обращаться еще.",
      service: "Комплексная диагностика",
      avatar: "👩‍💼"
    },
    {
      name: "Дмитрий Р.",
      car: "Nissan Leaf",
      rating: 5,
      date: "2 июля 2024",
      text: "Установили домашнюю зарядную станцию. Работа выполнена профессионально, в срок. Ребята знают свое дело! Спасибо за качественный сервис.",
      service: "Установка зарядки",
      avatar: "👨‍🔧"
    },
    {
      name: "Елена В.",
      car: "Hyundai IONIQ 5",
      rating: 5,
      date: "28 июня 2024",
      text: "Отличная диагностика! Нашли проблему, которую не могли найти в другом сервисе. Решили быстро и по разумной цене. Очень благодарна команде!",
      service: "Диагностика инвертора",
      avatar: "👩‍💻"
    },
    {
      name: "Игорь М.",
      car: "Audi e-tron",
      rating: 4,
      date: "22 июня 2024",
      text: "Хороший сервис, качественно делают ТО. Единственный минус - пришлось ждать немного дольше запланированного времени. В остальном все отлично.",
      service: "Техническое обслуживание",
      avatar: "👨‍💼"
    },
    {
      name: "Анна Л.",
      car: "Volkswagen ID.4",
      rating: 5,
      date: "18 июня 2024",
      text: "Воспользовалась акцией для новых клиентов. Сервис превзошел ожидания! Подробная консультация, честные цены, качественная работа. Рекомендую всем!",
      service: "Первое посещение",
      avatar: "👩‍🦰"
    },
    {
      name: "Сергей Н.",
      car: "Tesla Model Y",
      rating: 5,
      date: "12 июня 2024",
      text: "Отремонтировали систему охлаждения. Работа выполнена качественно, использовали оригинальные запчасти. Цена оправдана качеством. Спасибо!",
      service: "Ремонт системы охлаждения",
      avatar: "👨‍🏭"
    },
    {
      name: "Ольга К.",
      car: "Mercedes EQC",
      rating: 5,
      date: "5 июня 2024",
      text: "Лучший сервис для электромобилей в городе! Профессиональная команда, современное оборудование, справедливые цены. Всегда обращаюсь только сюда.",
      service: "Премиум сервис",
      avatar: "👩‍💼"
    }
  ];

  const stats = [
    { label: "Довольных клиентов", value: "98%", icon: "ThumbsUp" },
    { label: "Средний рейтинг", value: "4.9", icon: "Star" },
    { label: "Отзывов за месяц", value: "45+", icon: "MessageCircle" },
    { label: "Рекомендаций", value: "95%", icon: "Users" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Отзывы клиентов</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Мы гордимся доверием наших клиентов и стремимся обеспечить 
              максимальное качество обслуживания каждого электромобиля.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon as any} size={28} className="text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Что говорят наши клиенты</h2>
            <p className="text-xl text-gray-600">Честные отзывы от реальных владельцев электромобилей</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="text-3xl">{review.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{review.name}</h3>
                        <div className="flex space-x-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">{review.car}</div>
                      <div className="text-xs text-gray-500 mt-1">{review.date}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Badge variant="outline" className="text-xs">
                      {review.service}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">
                    "{review.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Review Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Оставить отзыв</h2>
              <p className="text-xl text-gray-600">Поделитесь своим опытом обслуживания в HEVSR</p>
            </div>
            
            <Card>
              <CardContent className="p-8">
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
                        Модель автомобиля *
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tesla Model 3, BMW i4..."
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Оценка *
                    </label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          className="p-1 hover:scale-110 transition-transform"
                        >
                          <Icon name="Star" size={24} className="text-gray-300 hover:text-yellow-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Какую услугу вы получили? *
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Выберите услугу</option>
                      <option value="diagnostics">Диагностика</option>
                      <option value="repair">Ремонт</option>
                      <option value="maintenance">Техническое обслуживание</option>
                      <option value="charging">Установка зарядки</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ваш отзыв *
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Расскажите о своем опыте обслуживания..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="consent"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-700">
                      Согласен на публикацию отзыва на сайте
                    </label>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить отзыв
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Присоединяйтесь к довольным клиентам!</h2>
          <p className="text-xl text-gray-400 mb-8">
            Доверьте обслуживание вашего электромобиля профессионалам. 
            Убедитесь в качестве нашего сервиса сами.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-4 text-lg">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на диагностику
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Blog = () => {
  const articles = [
    {
      title: "Как продлить срок службы батареи электромобиля",
      excerpt: "Практические советы по эксплуатации и обслуживанию высоковольтной батареи для максимальной долговечности",
      category: "Обслуживание",
      readTime: "5 мин",
      date: "20 июля 2024",
      featured: true,
      image: "🔋"
    },
    {
      title: "Tesla Model 3: особенности диагностики и ремонта",
      excerpt: "Разбираем наиболее частые проблемы популярного электромобиля и способы их решения",
      category: "Tesla",
      readTime: "7 мин",
      date: "18 июля 2024",
      image: "⚡"
    },
    {
      title: "Зарядные станции: типы и совместимость",
      excerpt: "Полный гид по зарядным разъемам, мощности и совместимости с различными моделями электромобилей",
      category: "Зарядка",
      readTime: "6 мин",
      date: "15 июля 2024",
      image: "🔌"
    },
    {
      title: "Подготовка электромобиля к зиме",
      excerpt: "Что нужно знать о эксплуатации электромобиля в холодное время года",
      category: "Сезонность",
      readTime: "4 мин",
      date: "12 июля 2024",
      image: "❄️"
    },
    {
      title: "BMW i-серия: инновации немецкого автопрома",
      excerpt: "Обзор технологий и особенностей обслуживания электромобилей BMW",
      category: "BMW",
      readTime: "8 мин",
      date: "10 июля 2024",
      image: "🏁"
    },
    {
      title: "Экономия на обслуживании электромобиля",
      excerpt: "Как снизить расходы на техническое обслуживание без ущерба для надежности",
      category: "Экономия",
      readTime: "5 мин",
      date: "8 июля 2024",
      image: "💰"
    }
  ];

  const categories = [
    { name: "Все статьи", count: 24, active: true },
    { name: "Обслуживание", count: 8 },
    { name: "Tesla", count: 5 },
    { name: "BMW", count: 3 },
    { name: "Зарядка", count: 6 },
    { name: "Экономия", count: 2 }
  ];

  const popularArticles = [
    "Топ-5 ошибок при зарядке электромобиля",
    "Сравнение стоимости владения: Tesla vs BMW i4",
    "Диагностика своими руками: что можно проверить",
    "Выбор сервиса для электромобиля: на что обратить внимание"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Блог HybridTech</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Экспертные статьи, советы и новости из мира электромобилей. 
              Полезная информация для владельцев и будущих покупателей.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Категории</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          category.active 
                            ? 'bg-blue-500 text-white' 
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{category.name}</span>
                          <span className="text-xs">{category.count}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Popular Articles */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Популярные статьи</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {popularArticles.map((article, index) => (
                      <button
                        key={index}
                        className="w-full text-left text-sm text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        {article}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-gradient-to-br from-blue-50 to-green-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Icon name="Mail" size={32} className="text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">Подписка на новости</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Получайте новые статьи и советы по электромобилям
                    </p>
                    <input
                      type="email"
                      placeholder="Ваш email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm mb-3"
                    />
                    <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                      Подписаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            {articles.filter(article => article.featured).map((article, index) => (
              <Card key={index} className="mb-8 overflow-hidden">
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      Рекомендуем
                    </Badge>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 p-8 flex items-center justify-center">
                    <div className="text-8xl">{article.image}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Icon name="Clock" size={16} className="mr-1" />
                      {article.readTime}
                    </span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{article.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{article.excerpt}</p>
                  <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                    Читать полностью
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {articles.filter(article => !article.featured).map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 flex items-center justify-center">
                    <div className="text-5xl">{article.image}</div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Badge variant="outline" className="text-xs">{article.category}</Badge>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Icon name="Clock" size={14} className="mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{article.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{article.date}</span>
                      <Button variant="outline" size="sm">
                        Читать
                        <Icon name="ArrowRight" size={14} className="ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="px-8">
                Загрузить еще статьи
                <Icon name="RotateCcw" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Есть вопросы об электромобилях?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Наши эксперты всегда готовы помочь и проконсультировать 
            по любым вопросам эксплуатации и обслуживания.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Задать вопрос эксперту
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
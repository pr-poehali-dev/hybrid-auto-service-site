import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Brands = () => {
  const brands = [
    {
      name: "Tesla",
      logo: "⚡",
      description: "Пионер в области электромобилей. Полный спектр услуг по Model S, 3, X, Y, Cybertruck",
      services: ["Диагностика батареи", "Ремонт двигателя", "Зарядные системы", "ТО"],
      specialty: true,
      popular: true
    },
    {
      name: "BMW",
      logo: "🏁",
      description: "BMW i3, i4, iX, i7 - немецкое качество и инновации в электромобилях",
      services: ["Диагностика", "Ремонт", "ТО", "Зарядка"],
      specialty: true
    },
    {
      name: "Nissan",
      logo: "🚗",
      description: "Leaf, Ariya - одни из самых популярных электромобилей в мире",
      services: ["Диагностика батареи", "ТО", "Ремонт"],
      popular: true
    },
    {
      name: "Toyota",
      logo: "🌱",
      description: "Prius, bZ4X - гибридные и электрические технологии от японского лидера",
      services: ["Гибридные системы", "ТО", "Диагностика"]
    },
    {
      name: "Volkswagen",
      logo: "🔧",
      description: "ID.3, ID.4, e-Golf - европейская надежность в электромобилях",
      services: ["Диагностика", "ТО", "Ремонт"]
    },
    {
      name: "Audi",
      logo: "⭕",
      description: "e-tron, Q4 e-tron - премиальные электромобили с передовыми технологиями",
      services: ["Премиум ТО", "Диагностика", "Ремонт"],
      specialty: true
    },
    {
      name: "Mercedes-Benz",
      logo: "⭐",
      description: "EQS, EQC, EQA - роскошные электромобили с инновационными решениями",
      services: ["Премиум сервис", "Диагностика", "ТО"],
      specialty: true
    },
    {
      name: "Hyundai",
      logo: "🔋",
      description: "IONIQ 5, Kona Electric - корейские инновации в электромобилях",
      services: ["Диагностика", "ТО", "Зарядка"]
    },
    {
      name: "Volvo",
      logo: "🛡️",
      description: "XC40 Recharge, C40 - безопасность и экологичность",
      services: ["Диагностика", "ТО", "Ремонт"]
    },
    {
      name: "Jaguar",
      logo: "🐆",
      description: "I-PACE - британская элегантность в электромобилях",
      services: ["Премиум сервис", "Диагностика"]
    },
    {
      name: "Porsche",
      logo: "🏎️",
      description: "Taycan - спортивные электромобили премиум-класса",
      services: ["Спорт-сервис", "Диагностика"],
      specialty: true
    },
    {
      name: "Ford",
      logo: "🦅",
      description: "Mustang Mach-E, F-150 Lightning - американские электромобили",
      services: ["Диагностика", "ТО", "Ремонт"]
    }
  ];

  const specialtyBrands = brands.filter(brand => brand.specialty);
  const otherBrands = brands.filter(brand => !brand.specialty);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Поддерживаемые бренды</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Мы специализируемся на обслуживании всех популярных марок электрических 
              и гибридных автомобилей с использованием оригинального оборудования.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">12+</div>
              <div className="text-gray-600">Поддерживаемых брендов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Моделей автомобилей</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Обслуженных авто</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Brands */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша специализация</h2>
            <p className="text-xl text-gray-600">Бренды, с которыми мы работаем особенно глубоко</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialtyBrands.map((brand, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    Специализация
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-3">{brand.logo}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{brand.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{brand.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Доступные услуги:</h4>
                    <div className="flex flex-wrap gap-2">
                      {brand.services.map((service, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Brands */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Все поддерживаемые бренды</h2>
            <p className="text-xl text-gray-600">Качественное обслуживание для всех марок</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherBrands.map((brand, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow relative">
                {brand.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-500 text-white">
                      Популярно
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{brand.logo}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{brand.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{brand.description}</p>
                      
                      <div className="flex flex-wrap gap-1">
                        {brand.services.map((service, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы обслужить ваш автомобиль?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Независимо от марки, мы обеспечим профессиональное обслуживание 
            с использованием оригинального оборудования
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
            <Icon name="Calendar" size={20} className="mr-2" />
            Записаться на диагностику
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Brands;
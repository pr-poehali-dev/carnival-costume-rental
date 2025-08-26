import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'Все костюмы', icon: 'Sparkles' },
    { id: 'children', name: 'Детские костюмы', icon: 'Heart' },
    { id: 'adult', name: 'Взрослые костюмы', icon: 'User' },
    { id: 'animators', name: 'Аниматоры', icon: 'Star' },
  ];

  const costumes = [
    {
      id: 1,
      name: 'Принцесса (6-8 лет)',
      category: 'children',
      price: '1 800 ₽ / 3 дня',
      image: '/img/24827beb-e3a1-4657-8dd3-06d0bbab64b9.jpg',
      description: 'Роскошное платье принцессы в театральном стиле'
    },
    {
      id: 2,
      name: 'Супергерой взрослый',
      category: 'adult', 
      price: '2 900 ₽ / 3 дня',
      image: '/img/6d5dc951-9ab0-49c2-a700-473ffce87393.jpg',
      description: 'Профессиональный костюм супергероя'
    },
    {
      id: 3,
      name: 'Мушкетёр',
      category: 'adult',
      price: '2 500 ₽ / 3 дня', 
      image: '/img/24827beb-e3a1-4657-8dd3-06d0bbab64b9.jpg',
      description: 'Исторический костюм мушкетёра'
    },
    {
      id: 4,
      name: 'Фея (4-6 лет)',
      category: 'children',
      price: '1 500 ₽ / 3 дня',
      image: '/img/6d5dc951-9ab0-49c2-a700-473ffce87393.jpg', 
      description: 'Воздушный костюм феи с крылышками'
    }
  ];

  const testimonials = [
    {
      name: 'Екатерина М.',
      role: 'мама двух детей',
      text: 'Стоимость аренды и качество костюмов превзошли ожидания! Дети были в восторге от костюмов принцесс.'
    },
    {
      name: 'Алексей П.',
      role: 'организатор корпоратива', 
      text: 'Быстрая доставка и профессиональные костюмы сделали наш корпоративный праздник незабываемым.'
    }
  ];

  const filteredCostumes = selectedCategory === 'all' 
    ? costumes 
    : costumes.filter(costume => costume.category === selectedCategory);

  return (
    <div className="min-h-screen bg-theatrical-cream">
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      {/* Navigation */}
      <nav className="bg-theatrical-burgundy shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-cormorant font-bold text-theatrical-gold">
                🎭 ArtStudio Карнавал
              </h1>
            </div>
            <div className="flex items-center space-x-8">
              <a href="#catalog" className="text-theatrical-cream hover:text-theatrical-gold transition-colors font-open-sans">
                Каталог
              </a>
              <a href="#about" className="text-theatrical-cream hover:text-theatrical-gold transition-colors font-open-sans">
                О нас
              </a>
              <a href="#contact" className="text-theatrical-cream hover:text-theatrical-gold transition-colors font-open-sans">
                Контакты
              </a>
              <Button variant="outline" className="border-theatrical-gold text-theatrical-gold hover:bg-theatrical-gold hover:text-theatrical-burgundy">
                <Icon name="Phone" size={16} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(/img/da40422f-3cc7-46e1-aa2d-a6282cbb711f.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-theatrical-burgundy/80 to-theatrical-darkBrown/60" />
        
        {/* Театральные занавески */}
        <div className="absolute top-0 left-0 w-32 h-full bg-theatrical-burgundy animate-curtain origin-left opacity-90" />
        <div className="absolute top-0 right-0 w-32 h-full bg-theatrical-burgundy animate-curtain origin-right opacity-90" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="animate-spotlight">
            <h1 className="text-6xl md:text-7xl font-cormorant font-bold text-theatrical-gold mb-6 drop-shadow-2xl">
              Прокат костюмов для праздников
            </h1>
            <p className="text-xl md:text-2xl text-theatrical-cream mb-8 font-open-sans max-w-2xl mx-auto leading-relaxed">
              Более 500 образов — от сказочных принцесс до грозных супергероев. 
              Создайте незабываемый образ!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-theatrical-gold text-theatrical-burgundy hover:bg-yellow-400 font-open-sans px-8 py-4 text-lg">
                <Icon name="Search" size={20} className="mr-2" />
                Выбрать костюм
              </Button>
              <Button variant="outline" size="lg" className="border-theatrical-cream text-theatrical-cream hover:bg-theatrical-cream hover:text-theatrical-burgundy font-open-sans px-8 py-4 text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-theatrical-gold/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-theatrical-burgundy rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={32} className="text-theatrical-gold" />
                </div>
                <CardTitle className="font-cormorant text-2xl text-theatrical-burgundy">
                  Гибкие сроки аренды
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-open-sans">
                  От одного дня до месяца — вы сами выбираете продолжительность аренды
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-theatrical-gold/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-theatrical-burgundy rounded-full flex items-center justify-center">
                  <Icon name="Truck" size={32} className="text-theatrical-gold" />
                </div>
                <CardTitle className="font-cormorant text-2xl text-theatrical-burgundy">
                  Доставка по Приморью
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-open-sans">
                  Бесплатная доставка по Владивостоку при заказе от 3 000 ₽
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-theatrical-gold/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-theatrical-burgundy rounded-full flex items-center justify-center">
                  <Icon name="Shield" size={32} className="text-theatrical-gold" />
                </div>
                <CardTitle className="font-cormorant text-2xl text-theatrical-burgundy">
                  Гарантия качества
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-open-sans">
                  Все костюмы профессионально очищены и готовы к использованию
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-theatrical-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-cormorant font-bold text-theatrical-burgundy mb-4">
              Каталог костюмов
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
              Откройте для себя волшебный мир театральных образов
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`font-open-sans ${
                  selectedCategory === category.id 
                    ? 'bg-theatrical-burgundy text-white hover:bg-theatrical-velvet' 
                    : 'border-theatrical-burgundy text-theatrical-burgundy hover:bg-theatrical-burgundy hover:text-white'
                }`}
              >
                <Icon name={category.icon as any} size={16} className="mr-2" />
                {category.name}
              </Button>
            ))}
          </div>

          {/* Costume Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredCostumes.map(costume => (
              <Card key={costume.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-theatrical-gold/20">
                <div className="relative overflow-hidden">
                  <img
                    src={costume.image}
                    alt={costume.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-theatrical-gold text-theatrical-burgundy">
                      Хит
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-cormorant text-xl text-theatrical-burgundy">
                    {costume.name}
                  </CardTitle>
                  <p className="text-gray-600 font-open-sans text-sm">
                    {costume.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-theatrical-burgundy font-open-sans">
                      {costume.price}
                    </span>
                    <Button size="sm" className="bg-theatrical-burgundy hover:bg-theatrical-velvet">
                      <Icon name="ShoppingCart" size={16} className="mr-1" />
                      Арендовать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-cormorant font-bold text-theatrical-burgundy mb-6">
                Почему выбирают нас
              </h2>
              <p className="text-lg text-gray-600 font-open-sans mb-6 leading-relaxed">
                ArtStudio Карнавал работает с 2015 года. Наш склад насчитывает более 500 
                костюмов, а опытная команда гарантирует безупречный сервис и помощь 
                в создании идеального образа для любого мероприятия.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Award" size={24} className="text-theatrical-gold mr-3" />
                  <span className="font-open-sans">10+ лет опыта в сфере проката костюмов</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Users" size={24} className="text-theatrical-gold mr-3" />
                  <span className="font-open-sans">Более 5000 довольных клиентов</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Sparkles" size={24} className="text-theatrical-gold mr-3" />
                  <span className="font-open-sans">500+ уникальных костюмов в наличии</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/da40422f-3cc7-46e1-aa2d-a6282cbb711f.jpg"
                alt="Театральный зал"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-theatrical-gold rounded-full opacity-20 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-theatrical-burgundy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-cormorant font-bold text-theatrical-gold mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-theatrical-cream font-open-sans">
              Что говорят о нас наши клиенты
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-theatrical-gold/30 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-theatrical-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="User" size={24} className="text-theatrical-burgundy" />
                    </div>
                    <div>
                      <p className="text-theatrical-cream font-open-sans mb-4 leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <p className="text-theatrical-gold font-semibold font-cormorant">
                          {testimonial.name}
                        </p>
                        <p className="text-theatrical-cream/80 text-sm font-open-sans">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-theatrical-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-cormorant font-bold text-theatrical-burgundy mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Готовы помочь создать ваш идеальный образ
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-theatrical-burgundy rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-theatrical-gold" />
                </div>
                <div>
                  <h3 className="font-cormorant text-xl text-theatrical-burgundy font-semibold">Адрес</h3>
                  <p className="text-gray-600 font-open-sans">Владивосток, ул. Светланская, 100</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-theatrical-burgundy rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-theatrical-gold" />
                </div>
                <div>
                  <h3 className="font-cormorant text-xl text-theatrical-burgundy font-semibold">Телефон</h3>
                  <p className="text-gray-600 font-open-sans">+7 (423) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-theatrical-burgundy rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-theatrical-gold" />
                </div>
                <div>
                  <h3 className="font-cormorant text-xl text-theatrical-burgundy font-semibold">Email</h3>
                  <p className="text-gray-600 font-open-sans">info@karnaval-vl.ru</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-theatrical-burgundy rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-theatrical-gold" />
                </div>
                <div>
                  <h3 className="font-cormorant text-xl text-theatrical-burgundy font-semibold">Режим работы</h3>
                  <p className="text-gray-600 font-open-sans">Ежедневно с 10:00 до 20:00</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-theatrical-gold/20">
              <CardHeader>
                <CardTitle className="font-cormorant text-2xl text-theatrical-burgundy">
                  Оставить заявку
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-open-sans mb-2">
                      Имя *
                    </label>
                    <Input placeholder="Ваше имя" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-open-sans mb-2">
                      Телефон *
                    </label>
                    <Input type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 font-open-sans mb-2">
                      Сообщение
                    </label>
                    <Textarea 
                      placeholder="Расскажите о вашем мероприятии и предпочтениях по костюмам"
                      rows={4}
                    />
                  </div>
                  <Button className="w-full bg-theatrical-burgundy hover:bg-theatrical-velvet font-open-sans">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-theatrical-burgundy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-cormorant font-bold text-theatrical-gold mb-4">
                🎭 ArtStudio Карнавал
              </h3>
              <p className="text-theatrical-cream font-open-sans mb-4">
                Более 10 лет создаём незабываемые образы для ваших праздников
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="outline" className="border-theatrical-gold text-theatrical-gold hover:bg-theatrical-gold hover:text-theatrical-burgundy">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-theatrical-gold text-theatrical-gold hover:bg-theatrical-gold hover:text-theatrical-burgundy">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-cormorant text-xl text-theatrical-gold mb-4">Услуги</h4>
              <ul className="space-y-2 text-theatrical-cream font-open-sans">
                <li>Аренда детских костюмов</li>
                <li>Аренда взрослых костюмов</li>
                <li>Костюмы аниматоров</li>
                <li>Тематические образы</li>
              </ul>
            </div>

            <div>
              <h4 className="font-cormorant text-xl text-theatrical-gold mb-4">Контакты</h4>
              <ul className="space-y-2 text-theatrical-cream font-open-sans">
                <li>г. Владивосток</li>
                <li>ул. Светланская, 100</li>
                <li>+7 (423) 123-45-67</li>
                <li>info@karnaval-vl.ru</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-theatrical-gold/20 mt-8 pt-8 text-center">
            <p className="text-theatrical-cream/80 font-open-sans">
              © 2024 ArtStudio Карнавал. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  const services = [
    {
      icon: "Rocket",
      title: "Разработка курса",
      description: "Создаём структуру, сценарии и контент вашего онлайн-курса с нуля"
    },
    {
      icon: "BookOpen",
      title: "Учебная платформа",
      description: "Настраиваем удобную платформу для обучения ваших студентов"
    },
    {
      icon: "Users",
      title: "Продвижение",
      description: "Разрабатываем стратегию запуска и продвижения курса"
    },
    {
      icon: "BarChart",
      title: "Аналитика",
      description: "Отслеживаем метрики и оптимизируем результаты обучения"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Анализ",
      description: "Изучаем вашу экспертизу и целевую аудиторию"
    },
    {
      number: "02",
      title: "Стратегия",
      description: "Разрабатываем концепцию и структуру курса"
    },
    {
      number: "03",
      title: "Производство",
      description: "Создаём контент и настраиваем платформу"
    },
    {
      number: "04",
      title: "Запуск",
      description: "Выводим курс на рынок и масштабируем"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">IPGA</div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
            <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">Процесс</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90" asChild>
            <a href="https://t.me/nmagalin" target="_blank" rel="noopener noreferrer">
              Начать проект
            </a>
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-left space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight uppercase">
              <span className="text-primary">IPGA</span> - БОЛЬШЕ ЧЕМ МАРКЕТИНГ
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Полный цикл разработки и запуска онлайн-курсов. От идеи до первых продаж.
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="https://t.me/nmagalin" target="_blank" rel="noopener noreferrer">
                  Обсудить проект
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">О нас</h2>
            <p className="text-lg text-foreground leading-relaxed">
              IPGA — это специализированное маркетинговое агентство, которое помогает экспертам создавать и запускать эффективные онлайн-курсы. Мы объединяем глубокое понимание рынка, современные технологии и креативный подход, чтобы ваши знания стали востребованными и приносили реальную пользу.
            </p>
            <div className="space-y-4 pt-4">
              <p className="text-lg font-semibold text-foreground">В IPGA вы получаете:</p>
              <ul className="space-y-3 text-muted-foreground text-lg">
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Разработку уникального курса под ваши цели и аудиторию</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Создание привлекательного контента и структуры обучения</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Полное сопровождение запуска и продвижения онлайн-курса на рынке</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">•</span>
                  <span>Аналитику и настройку маркетинговых стратегий для максимального результата</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">Комплексный подход к созданию онлайн-образования</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Процесс работы</h2>
            <p className="text-muted-foreground text-lg">Четыре этапа до запуска вашего курса</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold uppercase">ОНЛАЙН КОНСУЛЬТАЦИЯ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Запишитесь на бесплатную консультацию, и мы обсудим, как создать и запустить ваш онлайн-курс
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="https://t.me/nmagalin" target="_blank" rel="noopener noreferrer">
                Записаться на консультацию
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы на разработку курса</h2>
            <p className="text-muted-foreground text-lg">Выберите оптимальный вариант для запуска вашего инфопродукта</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-6 right-6 text-4xl">📦</div>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2">Базовый тариф</h3>
                  <p className="text-lg text-muted-foreground">Разработка и запуск онлайн курса</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex gap-3 items-start">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Создание полного курса под ключ</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Структурирование и наполнение контентом</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Настройка платформы и техническая поддержка</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Запуск и старт первых продаж</span>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <div className="text-sm text-muted-foreground mb-1">Цена</div>
                  <div className="text-3xl font-bold text-primary">20.000₽</div>
                  <div className="text-sm text-muted-foreground mt-1">+ 15% от продаж курса</div>
                </div>

                <div className="bg-primary/10 rounded-lg p-4 mb-6">
                  <div className="text-sm font-semibold text-foreground mb-1">Кому подходит</div>
                  <p className="text-sm text-muted-foreground">Экспертам, которые хотят быстро и качественно запустить курс без масштабирования</p>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90" size="lg" asChild>
                  <a href="https://t.me/nmagalin" target="_blank" rel="noopener noreferrer">
                    Заказать сейчас
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-primary hover:border-primary transition-all duration-300 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold">
                Рекомендуем
              </div>
              <div className="absolute top-6 right-6 text-4xl">🚀</div>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2">Премиум тариф</h3>
                  <p className="text-lg text-muted-foreground">Полное продюсирование, масштабирование и реклама</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  <div className="flex gap-3 items-start">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground font-semibold">Всё из базового тарифа +</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Масштабирование проекта и оптимизация</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Комплексная аналитика продаж и поведения пользователей</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Настройка и ведение рекламных кампаний (таргетинг, контекст)</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Продюсирование команды и управление процессом</span>
                  </div>
                </div>

                <div className="bg-primary/20 rounded-lg p-4 mb-6">
                  <div className="text-sm text-muted-foreground mb-1">Цена</div>
                  <div className="text-3xl font-bold text-primary">50.000₽</div>
                  <div className="text-sm text-muted-foreground mt-1">+ 15% от продаж курса</div>
                </div>

                <div className="bg-primary/10 rounded-lg p-4 mb-6">
                  <div className="text-sm font-semibold text-foreground mb-1">Кому подходит</div>
                  <p className="text-sm text-muted-foreground">Экспертам, которые хотят максимальный результат: рост продаж, автоматизацию и продвижение</p>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90" size="lg" asChild>
                  <a href="https://t.me/nmagalin" target="_blank" rel="noopener noreferrer">
                    Получить консультацию
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground text-lg">Обсудим ваш проект и подберём оптимальное решение</p>
          </div>
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Телефон" 
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте"
                    className="bg-background border-border min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg" asChild>
                  <a href="https://t.me/nmagalin" target="_blank" rel="noopener noreferrer">
                    Отправить заявку
                  </a>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold text-primary">IPGA</div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Telegram</a>
              <a href="#" className="hover:text-foreground transition-colors">WhatsApp</a>
              <a href="#" className="hover:text-foreground transition-colors">Email</a>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 IPGA. Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
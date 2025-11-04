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
          <Button className="bg-primary hover:bg-primary/90">
            Начать проект
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
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Обсудить проект
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
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши курсы</h2>
            <p className="text-muted-foreground text-lg">Готовые образовательные продукты для вашего развития</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              image="https://cdn.poehali.dev/projects/38711f3a-caae-4060-868e-d0da9e327fdd/files/3a8d2037-61fc-4d31-971e-5362bffe250f.jpg"
              title="Создание онлайн-курса"
              description="Полный курс по разработке и запуску вашего онлайн-курса с нуля. Все этапы от идеи до первых продаж."
              price="29.990₽"
              oldPrice="49.990₽"
              badge="ХИТ"
            />
            <ProductCard
              image="https://cdn.poehali.dev/projects/38711f3a-caae-4060-868e-d0da9e327fdd/files/3a8d2037-61fc-4d31-971e-5362bffe250f.jpg"
              title="Маркетинг для экспертов"
              description="Узнайте, как продвигать свою экспертизу и привлекать учеников для онлайн-курсов."
              price="19.990₽"
            />
            <ProductCard
              image="https://cdn.poehali.dev/projects/38711f3a-caae-4060-868e-d0da9e327fdd/files/3a8d2037-61fc-4d31-971e-5362bffe250f.jpg"
              title="Продажи образования"
              description="Эффективные стратегии продаж онлайн-курсов и увеличения конверсии."
              price="24.990₽"
              badge="НОВИНКА"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold uppercase">Бесплатная онлайн консультация</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Запишитесь на бесплатную консультацию, и мы обсудим, как создать и запустить ваш онлайн-курс
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
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
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Отправить заявку
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
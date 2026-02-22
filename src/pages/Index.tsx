import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/e4f2bbfb-0d7f-4535-8e96-b1b86288102a/files/b31c4407-682a-4f08-b84c-03090dd122e6.jpg";

const services = [
  {
    icon: "Truck",
    title: "Грузоперевозки",
    desc: "Перевезём всё — от небольшой посылки до целого офиса. Работаем по городу и между городами, быстро и аккуратно.",
    color: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: "Hammer",
    title: "Демонтаж конструкций",
    desc: "Профессиональный снос стен, перегородок, старых конструкций. Убираем мусор за собой — вы получаете чистое пространство.",
    color: "from-blue-600 to-blue-800",
    bg: "bg-blue-50",
  },
  {
    icon: "Sofa",
    title: "Сборка мебели",
    desc: "Соберём мебель любой сложности — от простой полки до кухонного гарнитура. Гарантия качества на каждый заказ.",
    color: "from-violet-600 to-violet-800",
    bg: "bg-violet-50",
  },
];

const stats = [
  { value: "1 200+", label: "Выполненных заказов" },
  { value: "340+", label: "Проверенных исполнителей" },
  { value: "4.9", label: "Средний рейтинг" },
  { value: "24/7", label: "Поддержка клиентов" },
];

const steps = [
  { num: "01", title: "Оставьте заявку", desc: "Опишите задачу и выберите нужную услугу из каталога" },
  { num: "02", title: "Выберите исполнителя", desc: "Изучите рейтинги, отзывы и выберите лучшего специалиста" },
  { num: "03", title: "Получите результат", desc: "Следите за заказом в чате и оплатите после выполнения" },
];

const Index = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen font-golos bg-white text-gray-900 overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <span className="font-montserrat font-900 text-xl tracking-tight">
            Мастер<span className="text-orange-500">Про</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-orange-500 transition-colors">Услуги</a>
            <a href="#how" className="hover:text-orange-500 transition-colors">Как работает</a>
            <a href="#stats" className="hover:text-orange-500 transition-colors">О нас</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors px-4 py-2">
              Войти
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:scale-105 active:scale-95">
              Начать
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#0F1523]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1523] via-[#0F1523]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div
            className="max-w-2xl"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(32px)', transition: 'all 0.8s ease-out' }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <Icon name="Zap" size={14} />
              Платформа проверенных специалистов
            </div>

            <h1 className="font-montserrat font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
              Надёжные<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                мастера
              </span>
              <br />рядом с вами
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
              Грузоперевозки, демонтаж конструкций, сборка мебели — находим проверенных исполнителей для любой задачи. Быстро, безопасно, с гарантией.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/30">
                Найти исполнителя
                <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 border border-white/20 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all backdrop-blur-sm">
                <Icon name="PlayCircle" size={20} />
                Как это работает
              </button>
            </div>
          </div>
        </div>

        {/* Floating badge */}
        <div
          className="absolute bottom-10 right-8 hidden lg:flex flex-col gap-3"
          style={{ opacity: visible ? 1 : 0, transition: 'all 1s ease-out 0.4s' }}
        >
          {[
            { icon: "Star", text: "Рейтинг исполнителей", sub: "Только проверенные мастера" },
            { icon: "Shield", text: "Гарантия качества", sub: "Оплата после выполнения" },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3">
              <div className="w-9 h-9 bg-orange-500 rounded-xl flex items-center justify-center shrink-0">
                <Icon name={b.icon} size={16} className="text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{b.text}</p>
                <p className="text-gray-400 text-xs">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section id="stats" className="bg-orange-500 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-montserrat font-black text-4xl sm:text-5xl text-white mb-1">{s.value}</p>
                <p className="text-orange-100 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Что мы делаем</p>
            <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Три ключевых направления — каждое выполняется командой опытных специалистов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon name={s.icon} size={26} className="text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{s.desc}</p>
                <div className="mt-6 flex items-center gap-1 text-orange-500 font-semibold text-sm group-hover:gap-2 transition-all">
                  Подробнее <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 bg-[#0F1523]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Просто и понятно</p>
            <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-white mb-4">
              Как это работает
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Три шага до выполненного заказа
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
                  <span className="font-montserrat font-black text-2xl text-white">{step.num}</span>
                </div>
                <h3 className="font-montserrat font-bold text-xl text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-black text-4xl sm:text-5xl text-white mb-6">
            Готовы начать?
          </h2>
          <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto">
            Зарегистрируйтесь как заказчик или исполнитель — и начните работать уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 font-bold text-lg px-10 py-4 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl">
              Я заказчик
            </button>
            <button className="border-2 border-white/60 text-white font-bold text-lg px-10 py-4 rounded-2xl hover:bg-white/10 hover:scale-105 active:scale-95 transition-all">
              Я исполнитель
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F1523] border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-montserrat font-black text-xl text-white">
            Мастер<span className="text-orange-500">Про</span>
          </span>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-orange-400 transition-colors">Условия использования</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Правила платформы</a>
          </div>
          <p className="text-gray-600 text-sm">© 2026 МастерПро. Все права защищены.</p>
        </div>
      </footer>

    </div>
  );
};

export default Index;
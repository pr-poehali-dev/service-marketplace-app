import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

type Category = "all" | "moving" | "demolition" | "furniture" | "cleaning" | "repair" | "garden";

interface Service {
  id: number;
  title: string;
  category: Category;
  icon: string;
  price: number;
  unit: string;
  rating: number;
  reviews: number;
  description: string;
  badge?: string;
  badgeColor?: string;
  executors: number;
}

const CATEGORIES: { id: Category; label: string; icon: string }[] = [
  { id: "all", label: "Все услуги", icon: "LayoutGrid" },
  { id: "moving", label: "Грузоперевозки", icon: "Truck" },
  { id: "demolition", label: "Демонтаж", icon: "Hammer" },
  { id: "furniture", label: "Мебель", icon: "Sofa" },
  { id: "cleaning", label: "Уборка", icon: "Sparkles" },
  { id: "repair", label: "Ремонт", icon: "Wrench" },
  { id: "garden", label: "Сад и участок", icon: "Trees" },
];

const SERVICES: Service[] = [
  {
    id: 1,
    title: "Перевозка мебели по городу",
    category: "moving",
    icon: "Truck",
    price: 1500,
    unit: "от /час",
    rating: 4.9,
    reviews: 214,
    description: "Газель или грузовик с грузчиками. Упаковываем, перевозим, разгружаем аккуратно.",
    badge: "Хит",
    badgeColor: "bg-orange-500",
    executors: 28,
  },
  {
    id: 2,
    title: "Переезд квартиры под ключ",
    category: "moving",
    icon: "PackageOpen",
    price: 4500,
    unit: "от /заявка",
    rating: 4.8,
    reviews: 97,
    description: "Полный цикл: упаковка, погрузка, транспортировка, расстановка на новом месте.",
    executors: 14,
  },
  {
    id: 3,
    title: "Перевозка пианино и сейфов",
    category: "moving",
    icon: "Weight",
    price: 3000,
    unit: "от /объект",
    rating: 5.0,
    reviews: 43,
    description: "Специализированная техника и опыт работы с тяжёлыми и нестандартными грузами.",
    badge: "Топ",
    badgeColor: "bg-violet-600",
    executors: 6,
  },
  {
    id: 4,
    title: "Снос перегородок и стен",
    category: "demolition",
    icon: "Hammer",
    price: 800,
    unit: "от /м²",
    rating: 4.7,
    reviews: 158,
    description: "Демонтаж ненесущих и несущих стен с вывозом мусора. Работаем с разными материалами.",
    executors: 19,
  },
  {
    id: 5,
    title: "Демонтаж плитки и стяжки",
    category: "demolition",
    icon: "Layers",
    price: 500,
    unit: "от /м²",
    rating: 4.6,
    reviews: 87,
    description: "Аккуратный снос покрытий с минимальным шумом и пылью. Уборка включена.",
    executors: 11,
  },
  {
    id: 6,
    title: "Вывоз строительного мусора",
    category: "demolition",
    icon: "Trash2",
    price: 2500,
    unit: "от /машина",
    rating: 4.8,
    reviews: 312,
    description: "Быстро вывезем мусор после ремонта или стройки. Газель или Камаз — на выбор.",
    badge: "Быстро",
    badgeColor: "bg-green-600",
    executors: 34,
  },
  {
    id: 7,
    title: "Сборка шкафа-купе",
    category: "furniture",
    icon: "DoorOpen",
    price: 1200,
    unit: "от /шкаф",
    rating: 4.9,
    reviews: 189,
    description: "Соберём любой шкаф-купе по инструкции или схеме. Гарантия на сборку 1 год.",
    badge: "Хит",
    badgeColor: "bg-orange-500",
    executors: 22,
  },
  {
    id: 8,
    title: "Сборка кухни",
    category: "furniture",
    icon: "ChefHat",
    price: 3500,
    unit: "от /кухня",
    rating: 4.8,
    reviews: 76,
    description: "Полная сборка и монтаж кухонного гарнитура. Подключение к коммуникациям — дополнительно.",
    executors: 9,
  },
  {
    id: 9,
    title: "Сборка детской мебели",
    category: "furniture",
    icon: "Baby",
    price: 800,
    unit: "от /предмет",
    rating: 5.0,
    reviews: 134,
    description: "Аккуратная и безопасная сборка детских кроватей, шкафов, горок и игровых комплексов.",
    executors: 17,
  },
  {
    id: 10,
    title: "Генеральная уборка квартиры",
    category: "cleaning",
    icon: "Sparkles",
    price: 2000,
    unit: "от /квартира",
    rating: 4.9,
    reviews: 421,
    description: "Полная уборка с чисткой поверхностей, окон, сантехники. Профессиональная химия.",
    badge: "Популярно",
    badgeColor: "bg-blue-600",
    executors: 41,
  },
  {
    id: 11,
    title: "Уборка после ремонта",
    category: "cleaning",
    icon: "Brush",
    price: 3000,
    unit: "от /помещение",
    rating: 4.7,
    reviews: 98,
    description: "Смываем строительную пыль, цемент, краску. Оставляем блестящую чистоту.",
    executors: 16,
  },
  {
    id: 12,
    title: "Установка розеток и выключателей",
    category: "repair",
    icon: "Zap",
    price: 500,
    unit: "от /точка",
    rating: 4.8,
    reviews: 267,
    description: "Электрик выедет в удобное время. Быстро, безопасно, с гарантией.",
    badge: "Хит",
    badgeColor: "bg-orange-500",
    executors: 29,
  },
];

const SORT_OPTIONS = [
  { value: "popular", label: "По популярности" },
  { value: "price_asc", label: "Сначала дешевле" },
  { value: "price_desc", label: "Сначала дороже" },
  { value: "rating", label: "По рейтингу" },
];

const Catalog = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("popular");
  const [priceMin, setPriceMin] = useState(500);
  const [orderModal, setOrderModal] = useState<Service | null>(null);
  const [customPrice, setCustomPrice] = useState(500);

  const filtered = SERVICES
    .filter((s) => activeCategory === "all" || s.category === activeCategory)
    .filter((s) => s.title.toLowerCase().includes(search.toLowerCase()) || s.description.toLowerCase().includes(search.toLowerCase()))
    .filter((s) => s.price >= priceMin)
    .sort((a, b) => {
      if (sort === "price_asc") return a.price - b.price;
      if (sort === "price_desc") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return b.reviews - a.reviews;
    });

  return (
    <div className="min-h-screen font-golos bg-gray-50">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <button onClick={() => navigate("/")} className="font-montserrat font-black text-xl tracking-tight hover:opacity-80 transition-opacity">
            Мастер<span className="text-orange-500">Про</span>
          </button>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <button onClick={() => navigate("/")} className="hover:text-orange-500 transition-colors">Главная</button>
            <span className="text-orange-500 font-semibold">Каталог</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors px-4 py-2">Войти</button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:scale-105">
              Начать
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* HEADER */}
        <div className="bg-gradient-to-br from-[#0F1523] to-[#1a2540] py-14 px-4">
          <div className="max-w-7xl mx-auto">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Все услуги</p>
            <h1 className="font-montserrat font-black text-4xl sm:text-5xl text-white mb-4">
              Каталог услуг
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              {SERVICES.length} услуг от проверенных исполнителей — с ценами и отзывами
            </p>
            {/* SEARCH */}
            <div className="relative max-w-xl">
              <Icon name="Search" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск услуги..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/10 border border-white/10 text-white placeholder-gray-500 rounded-2xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-orange-500/50 focus:bg-white/15 transition-all"
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* SIDEBAR */}
            <aside className="lg:w-72 shrink-0">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-24">
                <h3 className="font-montserrat font-bold text-base text-gray-900 mb-4">Категории</h3>
                <div className="flex flex-col gap-1 mb-6">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        activeCategory === cat.id
                          ? "bg-orange-500 text-white shadow-md shadow-orange-200"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <Icon name={cat.icon} size={16} />
                      {cat.label}
                    </button>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-5">
                  <h3 className="font-montserrat font-bold text-base text-gray-900 mb-4">Ценовой диапазон</h3>
                  <div className="mb-4">
                    <label className="text-xs text-gray-400 mb-1 block">От, ₽</label>
                    <input
                      type="number"
                      min={500}
                      value={priceMin}
                      onChange={(e) => setPriceMin(Number(e.target.value))}
                      className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                  <button
                    onClick={() => { setPriceMin(500); }}
                    className="text-xs text-orange-500 hover:underline"
                  >
                    Сбросить фильтры
                  </button>
                </div>
              </div>
            </aside>

            {/* MAIN */}
            <div className="flex-1 min-w-0">
              {/* Sort + count */}
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <p className="text-gray-500 text-sm">
                  Найдено: <span className="font-semibold text-gray-900">{filtered.length}</span> услуг
                </p>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-700 focus:outline-none focus:border-orange-400 bg-white transition-colors"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>

              {/* GRID */}
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <Icon name="SearchX" size={48} className="text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg font-medium">Ничего не найдено</p>
                  <p className="text-gray-400 text-sm mt-1">Попробуйте изменить фильтры или поисковый запрос</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filtered.map((service) => (
                    <div
                      key={service.id}
                      className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col"
                    >
                      {/* top */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                          <Icon name={service.icon} size={22} className="text-orange-500 group-hover:text-white transition-colors" />
                        </div>
                        {service.badge && (
                          <span className={`${service.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-lg`}>
                            {service.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="font-montserrat font-bold text-base text-gray-900 mb-2 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                        {service.description}
                      </p>

                      {/* meta */}
                      <div className="flex items-center gap-3 mb-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Icon name="Star" size={12} className="text-yellow-400 fill-yellow-400" />
                          <span className="font-semibold text-gray-700">{service.rating}</span>
                          ({service.reviews})
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Users" size={12} />
                          {service.executors} исполнителей
                        </span>
                      </div>

                      {/* price + button */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <p className="text-xs text-gray-400">Стоимость</p>
                          <p className="font-montserrat font-black text-xl text-gray-900">
                            {service.price.toLocaleString("ru-RU")} ₽
                            <span className="text-xs font-normal text-gray-400 ml-1">{service.unit}</span>
                          </p>
                        </div>
                        <button
                          onClick={() => { setOrderModal(service); setCustomPrice(service.price); }}
                          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-4 py-2.5 rounded-xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                        >
                          Заказать
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ORDER MODAL */}
      {orderModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setOrderModal(null)}
        >
          <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl animate-scale-in">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-orange-500 text-xs font-semibold uppercase tracking-widest mb-1">Оформление заказа</p>
                <h3 className="font-montserrat font-black text-xl text-gray-900">{orderModal.title}</h3>
              </div>
              <button onClick={() => setOrderModal(null)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <Icon name="X" size={22} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Ваш бюджет, ₽</label>
                <input
                  type="number"
                  min={500}
                  value={customPrice}
                  onChange={(e) => setCustomPrice(Math.max(500, Number(e.target.value)))}
                  className="w-full border-2 border-gray-200 focus:border-orange-500 rounded-2xl px-4 py-3 text-lg font-bold text-gray-900 focus:outline-none transition-colors"
                />
                {customPrice < 500 && (
                  <p className="text-red-500 text-xs mt-1">Минимальная сумма — 500 ₽</p>
                )}
                <p className="text-gray-400 text-xs mt-1">Рекомендуемая цена: {orderModal.price.toLocaleString("ru-RU")} ₽ {orderModal.unit}</p>
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Описание задачи</label>
                <textarea
                  rows={3}
                  placeholder="Опишите подробности — адрес, объём работ, пожелания..."
                  className="w-full border-2 border-gray-200 focus:border-orange-500 rounded-2xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none transition-colors resize-none"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Ваш телефон</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full border-2 border-gray-200 focus:border-orange-500 rounded-2xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 rounded-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-orange-200">
              Отправить заявку за {customPrice.toLocaleString("ru-RU")} ₽
            </button>
            <p className="text-center text-gray-400 text-xs mt-3">Исполнители откликнутся в течение 15 минут</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalog;
export const priceRanges = [
    { id: "all", label: "Все" },
    { id: "46-100", label: "46 000–100 000 ₽", min: 46000, max: 100000 },
    { id: "100-250", label: "100 000–250 000 ₽", min: 100000, max: 250000 },
    { id: "250-400", label: "250 000–400 000 ₽", min: 250000, max: 400000 },
    { id: "400-600", label: "400 000–600 000 ₽", min: 400000, max: 600000 },
];

export type Service = { image: string; title: string; items: string[]; accent?: string };
export const services: Service[] = [
    {
        image: "/PC.png",
        title: "Индивидуальная сборка",
        items: [
            "Подбор конфигурации под задачи и бюджет",
            "Аккуратный кабель‑менеджмент",
            "Настройка BIOS, XMP/EXPO",
            "Стресс‑тесты: стабильность, температуры, шум",
        ],
    },
    {
        image: "/GPU.png",
        title: "Ремонт",
        items: [
            "Диагностика неисправностей",
            "Согласование стоимости и сроков",
            "Замена комплектующих",
            "Профилактика и рекомендации по уходу",
        ],
    },
    {
        image: "/CPU.png",
        title: "Апгрейд",
        items: [
            "Оценка совместимости и целесообразности",
            "Оптимальные комплектующие под бюджет",
            "Установка и проверка",
            "Отчет о приросте производительности",
        ],
    },
    {
        image: "/Monitor.png",
        title: "Личная консультация",
        items: [
            "Игры, монтаж, 3D, ИИ — подберем варианты",
            "План апгрейда на будущее",
            "Помощь в настройке ПО",
            "Рекомендации по периферии и размещению",
        ],
    },
];


export type Advantage = { title: string; desc: string; icon: string };
export const advantages: Advantage[] = [
    { title: "Профессиональная сборка", desc: "Сбалансированные конфигурации без «узких мест»", icon: "/Goblet.png" },
    { title: "Гарантия до 3 лет", desc: "На работу и комплектующие. Прозрачные условия", icon: "/Shield.png" },
    { title: "Тесты и верификация", desc: "Stress/thermals/noise, бенчмарки по запросу", icon: "/Graph.png" },
    { title: "Доставка по РФ", desc: "Надежная упаковка, страховка, самовывоз", icon: "/Delivery.png" },
    { title: "Сертифицированные компоненты", desc: "Только новые и «белые» поставки", icon: "/Done.png" },
    { title: "Поддержка", desc: "Оперативные ответы, помощь в настройке", icon: "/Message.png" },
];

export type Review = { name: string; text: string; build?: string };
export const reviews: Review[] = [
    { name: "Александр", text: "Подобрали сборку под монтаж. Тихо, холодно, рендер ускорился в 2.3 раза.", build: "Workstation Pro" },
    { name: "Ирина", text: "Игровой ПК за 3 дня, аккуратная сборка, сделали перенос данных.", build: "Gaming FHD" },
    { name: "Михаил", text: "Апгрейд без переплаты. Отличная коммуникация и тесты после.", build: "Upgrade 2025" },
];

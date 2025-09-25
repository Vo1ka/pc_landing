export function Guarantee() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="text-3xl font-bold mb-6">Вместе с ПК вы получите</h2>

            <div
                className="
                    relative overflow-hidden rounded-3xl
                    border border-white/15
                    bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))]
                    backdrop-blur
                    p-6 md:p-8
                    shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_0_0_1px_rgba(255,255,255,0.06)]
                "
            >
                {/* Оранжевая верхняя лента-акцент */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-orange-400 via-orange-500 to-transparent opacity-90" />

                <ul className="grid gap-5 md:grid-cols-3 text-neutral-100">
                    <li className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
                            1
                        </span>
                        <div>
                            <div className="font-semibold">Фирменная гарантия до 3 лет</div>
                            <div className="text-sm text-neutral-300">На работу и комплектующие</div>
                        </div>
                    </li>

                    <li className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
                            2
                        </span>
                        <div>
                            <div className="font-semibold">Чеки и коробки от комплектующих</div>
                            <div className="text-sm text-neutral-300">Полный комплект поставки</div>
                        </div>
                    </li>

                    <li className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
                            3
                        </span>
                        <div>
                            <div className="font-semibold">Отчёт о тестах и настройках</div>
                            <div className="text-sm text-neutral-300">Температуры, стабильность, шум</div>
                        </div>
                    </li>
                </ul>

                {/* Разделитель и доп. текст */}
                <div className="mt-6 h-px bg-gradient-to-r from-orange-400/50 via-white/10 to-transparent" />
                <p className="mt-4 text-neutral-200">
                    Обращение по гарантии — без проволочек. Поможем оперативно.
                </p>
            </div>
        </section>

    );
}

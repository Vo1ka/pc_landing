export function Steps() {
    const steps = [
        "Оставьте заявку на сайте или свяжитесь с менеджером",
        "Обсудим задачи и подберем конфигурацию под бюджет",
        "Сборка, тесты, тщательная упаковка и доставка",
    ];
    return (
        <section className="mx-auto max-w-6xl px-4 py-14">
    <h2 className="text-3xl font-bold mb-8">Этапы работы</h2>

    <div className="grid gap-6 md:grid-cols-3 items-stretch">
        {steps.map((t, i) => {
            const isFirst = i === 0;
            const isLast = i === steps.length - 1;

            return (
                <div
                    key={i}
                    className={[
                        "group relative flex h-full flex-col rounded-3xl p-6 md:p-7 transition",
                        "bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] backdrop-blur",
                        "border border-white/15",
                        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_0_0_1px_rgba(255,255,255,0.06)]",
                        "hover:-translate-y-0.5",
                        "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_0_1px_rgba(249,115,22,0.45),0_12px_26px_-12px_rgba(249,115,22,0.45)]",
                    ].join(" ")}
                >
                    {/* Линия прогресса в единой высоте, внутри карточки */}
                    <div className="absolute left-0 right-0 top-[76px] hidden md:block">
                        {/* Левая половина линии */}
                        {!isFirst && (
                            <div className="absolute right-1/2 h-[2px] w-1/2 bg-gradient-to-l from-orange-500/60 via-white/10 to-transparent" />
                        )}
                        {/* Правая половина линии */}
                        {!isLast && (
                            <div className="absolute left-1/2 h-[2px] w-1/2 bg-gradient-to-r from-orange-500/60 via-white/10 to-transparent" />
                        )}
                        {/* Точка-шаг */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <span className="block h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_0_3px_rgba(249,115,22,0.25)]" />
                        </div>
                    </div>

                   {/* Номер шага — идеально по центру круга */}
                    <div className="relative h-14">
                        {/* Круг с мягким оранжевым свечением */}
                        <div
                            className="
                                absolute left-0 top-0 -z-10 h-14 w-14 rounded-full
                                bg-[radial-gradient(40px_40px_at_50%_40%,rgba(249,115,22,0.35),transparent_70%)]
                            "
                        />
                        {/* Сам номер ровно по центру круга */}
                        <div
                            className="
                                flex h-14 w-14 items-center justify-center
                                text-3xl font-extrabold
                                text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]
                            "
                            aria-hidden
                        >
                            {i + 1}
                        </div>
                    </div>


                    {/* Текст */}
                    <p className="mt-2 text-base leading-relaxed text-white">{t}</p>

                    {/* Низ карточки */}
                    <div className="mt-5 h-px w-1/2 bg-gradient-to-r from-orange-400/60 via-white/10 to-transparent" />
                </div>
            );
        })}
    </div>
</section>



    );
}

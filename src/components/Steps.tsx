export function Steps() {
    const steps = [
        "Оставьте заявку на сайте или свяжитесь с менеджером",
        "Обсудим задачи и подберем конфигурацию под бюджет",
        "Сборка, тесты, тщательная упаковка и доставка",
    ];
    return (
        <section className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="text-3xl font-bold mb-8">Этапы работы</h2>
            <div className="grid gap-6 md:grid-cols-3">
                {steps.map((t, i) => (
                    <div key={i} className="rounded-xl border border-white/10 bg-neutral-900 p-5">
                        <div className="text-5xl font-black text-white/20">{i + 1}</div>
                        <p className="mt-3">{t}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

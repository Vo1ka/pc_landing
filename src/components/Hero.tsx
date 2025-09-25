import Link from "next/link";
import { Glow } from "./Glow";

export function Hero() {
    return (
        <section className="relative overflow-hidden">
            <Glow className="-top-24 -left-24" size={520} />
            <Glow className="top-1/3 -right-32" size={420} color="rgba(14,165,233,0.22)" />
            <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
                <div className="max-w-3xl">
                    <p className="mb-4 inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                        Сборка ПК на заказ · Доставка по РФ
                    </p>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Соберём ПК под ваши задачи за 1–3 дня. Гарантия до 3 лет.
                    </h1>
                    <p className="mt-4 text-neutral-300">
                        Подбор комплектующих, стресс‑тесты, тихая и аккуратная сборка, установка ПО и драйверов.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="/builds" className="rounded-md bg-violet-600 px-5 py-3 font-medium hover:bg-violet-500">
                            Выбрать готовую сборку
                        </Link>
                        <Link href="/contacts" className="rounded-md border border-white/10 px-5 py-3 font-medium hover:bg-white/10">
                            Бесплатная консультация
                        </Link>
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-6 text-center sm:max-w-xl">
                        <div>
                            <div className="text-2xl font-bold">1 000+</div>
                            <div className="text-sm text-neutral-400">собранных ПК</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">1–3 дня</div>
                            <div className="text-sm text-neutral-400">срок сборки</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">24/7</div>
                            <div className="text-sm text-neutral-400">поддержка</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

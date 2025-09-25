"use client";
import Image from "next/image";
import { services } from "@/lib/data/home";

function ServiceCard({ image, title, items }: { image: string; title: string; items: string[] }) {
    return (
        <div className="relative h-full">
            {/* Иконка — одинаковое позиционирование для всех карточек */}
            <div className="pointer-events-none absolute left-1/2 -top-8 z-10 -translate-x-1/2">
                <div className="rounded-xl border border-white/10 bg-black/55 backdrop-blur px-2 py-2 shadow-[0_12px_36px_-12px_rgba(124,58,237,0.45)]">
                    <Image src={image} alt={title} width={72} height={72} className="h-18 w-18 object-contain" />
                </div>
            </div>

            {/* Карточка */}
            <div
                className="
                    group relative flex h-full flex-col justify-between
                    rounded-3xl border border-white/10 bg-neutral-950
                    p-6 pt-16 md:p-7 md:pt-20
                    shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]
                    transition hover:shadow-[0_10px_30px_-10px_rgba(124,58,237,0.35)]
                "
            >
                {/* Подсветка по hover */}
                <div
                    className="
                        pointer-events-none absolute inset-0 rounded-3xl
                        bg-[radial-gradient(700px_140px_at_50%_-10%,rgba(124,58,237,0.18),transparent)]
                        opacity-0 transition-opacity duration-300 group-hover:opacity-100
                    "
                />

                {/* Верх: заголовок */}
                <div>
                    <h3 className="mx-auto max-w-[18ch] text-center text-xl md:text-2xl font-extrabold uppercase tracking-wide">
                        {title}
                    </h3>
                    <div className="mx-auto mt-4 h-px w-3/4 bg-gradient-to-r from-violet-600/40 via-white/5 to-transparent" />
                </div>

                {/* Контент: список — растёт, но не ломает низ */}
                <ul className="mt-5 space-y-3 text-neutral-200">
                    {items.map((t) => {
                        const [head, rest] = t.split(/—|:/);
                        return (
                            <li key={t} className="leading-relaxed">
                                <span className="text-gray">{head.trim()}</span>
                                {t.match(/—|:/) ? <span className="text-neutral-300"> — {t.replace(/^.*?[—:]\s?/, "")}</span> : null}
                            </li>
                        );
                    })}
                </ul>

                {/* Низ: пустой отступ для ровного дыхания */}
                <div className="mt-6" />
            </div>
        </div>
    );
}

export function Services() {
    return (
        <section id="services" className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Наши услуги</h2>
            <div className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-4">
                {services.map((s) => (
                    <ServiceCard key={s.title} image={s.image} title={s.title} items={s.items} />
                ))}
            </div>
        </section>
    );
}

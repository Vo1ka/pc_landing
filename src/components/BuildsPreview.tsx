"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { priceRanges } from "@/lib/data/home";
import { builds } from "@/lib/data/builds";

export function BuildsPreview() {
    const [range, setRange] = useState("all");
    const filtered = useMemo(() => {
        const r = priceRanges.find((x) => x.id === range);
        if (!r || r.id === "all") return builds;
        return builds.filter((b) => (r.min ? b.price >= r.min : true) && (r.max ? b.price <= r.max : true));
    }, [range]);

    return (
        <section id="builds" className="mx-auto max-w-6xl px-4 py-14">
            <div className="mb-6 flex items-end justify-between gap-4">
                <h2 className="text-3xl font-bold">Лучшее решение для вас</h2>
                <Link href="/builds" className="text-orange-400 hover:text-orange-300">Все сборки →</Link>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
                {priceRanges.map((r) => (
                    <button
                        key={r.id}
                        onClick={() => setRange(r.id)}
                        className={`rounded-full px-3 py-1 text-sm border ${range === r.id ? "bg-orange-600 border-orange-600" : "border-white/10 hover:bg-white/10"}`}
                    >
                        {r.label}
                    </button>
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {filtered.map((b) => (
                    <article key={b.slug} className="rounded-xl border border-white/10 bg-neutral-900 p-4">
                        <Image src={b.image} alt={b.name} width={640} height={480} className="w-full h-auto rounded-lg object-cover" />
                        <h3 className="mt-3 text-xl font-semibold">{b.name}</h3>
                        <ul className="mt-2 text-sm text-neutral-300 space-y-1">
                            <li>CPU: {b.cpu}</li>
                            <li>GPU: {b.gpu}</li>
                            <li>RAM: {b.ram}</li>
                            <li>Storage: {b.storage}</li>
                        </ul>
                        <div className="mt-3 flex items-center justify-between">
                            <span className="text-lg font-bold">{b.price.toLocaleString("ru-RU")} ₽</span>
                            <Link href={`/builds/${b.slug}`} className="px-3 py-2 rounded-md bg-orange-600 hover:bg-orange-500">Подробнее</Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

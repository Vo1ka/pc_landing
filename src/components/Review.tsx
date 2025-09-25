import { reviews } from "@/lib/data/home";

export function Reviews() {
    return (
        <section id="reviews" className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="text-3xl font-bold mb-6">Отзывы и кейсы</h2>
            <div className="grid gap-6 md:grid-cols-3">
                {reviews.map((r) => (
                    <figure key={r.name} className="rounded-xl border border-white/10 bg-neutral-900 p-5">
                        <blockquote className="text-neutral-200">“{r.text}”</blockquote>
                        <figcaption className="mt-3 text-sm text-neutral-400">
                            — {r.name}{r.build ? `, ${r.build}` : ""}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}

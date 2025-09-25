import { advantages } from "@/lib/data/home";

export function Advantages() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="text-3xl font-bold mb-8">Наши преимущества</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {advantages.map((a) => (
                    <div key={a.title} className="rounded-xl border border-white/10 bg-neutral-900 p-5">
                        <div className="text-2xl">{a.icon}</div>
                        <h3 className="mt-2 text-lg font-semibold">{a.title}</h3>
                        <p className="mt-1 text-neutral-300 text-sm">{a.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

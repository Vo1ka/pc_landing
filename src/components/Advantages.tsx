import { advantages } from "@/lib/data/home";
import Image from "next/image";

export function Advantages() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-14">
    <h2 className="text-3xl font-bold mb-8">Наши преимущества</h2>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {advantages.map((a, i) => {
            const theme = {
                glow: "bg-[radial-gradient(120px_60px_at_50%_20%,rgba(249,115,22,0.30),transparent)]",
                divider: "from-orange-400/60", // или from-[#F97316]/60
                ringHover:
                    "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.30),0_0_0_1px_rgba(249,115,22,0.45),0_12px_26px_-12px_rgba(249,115,22,0.45)]",
            };

            return (
                <div
                    key={a.title}
                    className={[
                        "group relative flex h-full flex-col rounded-3xl p-6 md:p-7 transition",
                        "bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))]",
                        "backdrop-blur",
                        "border border-white/15",
                        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_0_0_1px_rgba(255,255,255,0.06)]",
                        "hover:-translate-y-0.5",
                        theme.ringHover,
                    ].join(" ")}
                >
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_35%)]" />

                    <div className="relative mb-4 w-fit">
                        <div className={`absolute -inset-2 -z-10 rounded-xl opacity-80 ${theme.glow}`} />
                        <div className="rounded-xl border border-white/20 bg-white/5 p-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]">
                            <Image src={a.icon} alt="icon" width={64} height={64} className="h-16 w-16 object-contain" />
                        </div>
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold text-white">{a.title}</h3>
                    <div className={`mt-3 h-px w-2/3 bg-gradient-to-r ${theme.divider} via-white/10 to-transparent`} />
                    <p className="mt-3 text-sm text-neutral-200">{a.desc}</p>
                </div>
            );
        })}
    </div>
</section>

    );
}

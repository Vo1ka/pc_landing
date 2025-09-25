import { BuildCard } from "@/components/BuildCard";
import { builds } from "@/lib/data/builds";

export const metadata = { title: "Каталог сборок — Ваш бренд" };

export default function Page() {
    return (
        <main className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Каталог сборок</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {builds.map(b => <BuildCard key={b.slug} build={b} />)}
            </div>
        </main>
    );
}

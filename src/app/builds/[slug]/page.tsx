import { builds } from "@/lib/data/builds";
import { notFound } from "next/navigation";
import Image from "next/image";


export function generateStaticParams() {
    return builds.map(b => ({ slug: b.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
    const build = builds.find(b => b.slug === params.slug);
    if (!build) return notFound();
    return (
        <main className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">{build.name}</h1>
            <Image src={build.image} alt={build.name} width={960} height={720} className="rounded-lg" />
            <div className="mt-6 space-y-2">
                <p><strong>CPU:</strong> {build.cpu}</p>
                <p><strong>GPU:</strong> {build.gpu}</p>
                <p><strong>RAM:</strong> {build.ram}</p>
                <p><strong>Storage:</strong> {build.storage}</p>
                <p><strong>Цена:</strong> {build.price.toLocaleString("ru-RU")} ₽</p>
            </div>
        </main>
    );
}

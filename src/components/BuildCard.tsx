import Link from "next/link";
import Image from "next/image";
import { Build } from "@/lib/data/builds";

export function BuildCard({ build }: { build: Build }) {
    return (
        <article className="rounded-xl border border-white/10 p-4 bg-neutral-900">
            <Image src={build.image} alt={build.name} width={640} height={480} className="rounded-lg object-cover w-full h-auto" />
            <h3 className="mt-4 text-xl font-semibold">{build.name}</h3>
            <ul className="mt-2 text-sm text-neutral-300 space-y-1">
                <li>CPU: {build.cpu}</li>
                <li>GPU: {build.gpu}</li>
                <li>RAM: {build.ram}</li>
                <li>Storage: {build.storage}</li>
            </ul>
            <div className="mt-3 flex items-center justify-between">
                <span className="text-lg font-bold">{build.price.toLocaleString("ru-RU")} ₽</span>
                <Link href={`/builds/${build.slug}`} className="px-3 py-2 rounded-md bg-violet-600 hover:bg-violet-500 transition">
                    Подробнее
                </Link>
            </div>
        </article>
    );
}

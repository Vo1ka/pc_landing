import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin","cyrillic"], weight: ["400","500","700"] });

export const metadata: Metadata = {
    title: "Сборка ПК на заказ — Ваш бренд",
    description: "Подбор комплектующих, стресс‑тесты, гарантия до 3 лет. Доставка по РФ.",
    metadataBase: new URL("https://example.ru"),
    openGraph: { type: "website", url: "https://example.ru" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body className={roboto.className}>{children}</body>
        </html>
    );
}

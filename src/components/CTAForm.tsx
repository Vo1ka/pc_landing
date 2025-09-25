"use client";
import { useState } from "react";

export function CTAForm() {
    const [sent, setSent] = useState(false);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget) as any);
        // TODO: отправить в ваш бэкенд/почту/Telegram
        console.log("lead", data);
        setSent(true);
    }

    return (
        <section id="contact" className="mx-auto max-w-3xl px-4 py-14">
            <div className="rounded-2xl border border-violet-600/30 bg-violet-600/10 p-6">
                <h2 className="text-2xl font-semibold">Подберём сборку бесплатно</h2>
                <p className="mt-1 text-neutral-200">Ответим в течение 15 минут в рабочее время.</p>
                {!sent ? (
                    <form onSubmit={onSubmit} className="mt-4 grid gap-3 sm:grid-cols-2">
                        <input name="name" required placeholder="Ваше имя" className="rounded-md bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-violet-500 sm:col-span-1" />
                        <input name="contact" required placeholder="Телеграм или телефон" className="rounded-md bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-violet-500 sm:col-span-1" />
                        <input name="budget" placeholder="Бюджет (₽)" className="rounded-md bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-violet-500 sm:col-span-1" />
                        <input name="task" placeholder="Задачи (игры/монтаж/3D/ИИ…)" className="rounded-md bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-violet-500 sm:col-span-2" />
                        <button className="mt-1 rounded-md bg-violet-600 px-5 py-2 font-medium hover:bg-violet-500 sm:col-span-2">Отправить</button>
                    </form>
                ) : (
                    <p className="mt-4 text-green-300">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
                )}
            </div>
        </section>
    );
}

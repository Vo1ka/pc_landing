"use client";
import { useState } from "react";

type LeadForm = {
    name: string;
    contact: string;
    budget?: string;
    task?: string;
};

export function CTAForm() {
    const [sent, setSent] = useState(false);

    function toObject(form: HTMLFormElement): LeadForm {
        const fd = new FormData(form);
        // FormData.get возвращает FormDataEntryValue | null
        return {
            name: (fd.get("name") as string) ?? "",
            contact: (fd.get("contact") as string) ?? "",
            budget: (fd.get("budget") as string) ?? undefined,
            task: (fd.get("task") as string) ?? undefined,
        };
    }

     async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = toObject(form);

        // Пример простой валидации
        if (!data.name.trim() || !data.contact.trim()) {
            alert("Заполните имя и контакт");
            return;
        }

        console.log("lead", data);
        // TODO: отправка в API/почту/Telegram
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

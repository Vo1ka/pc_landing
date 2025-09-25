import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { BuildsPreview } from "@/components/BuildsPreview";
import { Steps } from "@/components/Steps";
import { Advantages } from "@/components/Advantages";
import { Guarantee } from "@/components/Guarantee";
import { CTAForm } from "@/components/CTAForm";
import { Reviews } from "@/components/Review";

export default function HomePage() {
    return (
        <main className="bg-tech-grid text-white">
            <Hero />
            <Services />
            <BuildsPreview />
            <Steps />
            <Guarantee />
            <Advantages />
            <Reviews />
            <CTAForm />
        </main>
    );
}


import { Faq } from "@/app/components/landing-page/Faq";
import { Header } from "@/app/components/landing-page/Header";
import { Hero } from "@/app/components/landing-page/Hero";
import { Pricing } from "@/app/components/landing-page/Pricing";
import { VideoExplanation } from "@/app/components/landing-page/VideoExplanation";
import { getTextBySlug } from "@/app/server/get-texts-by-slug";

import { notFound } from "next/navigation";
export default async function LinkInBio({
    params,
}: {
    params: Promise<{ socialMediaSlug: string }>;
}) {
    const { socialMediaSlug } = await params;

    const texts = await getTextBySlug(socialMediaSlug);
    if (!texts) {
        return notFound();
    }
    return (
        <div className="max-w-7xl mx-auto">
            <Header />
            <Hero texts={texts} />
            <VideoExplanation />
            <Pricing />
            <Faq />
        </div>
    );
}
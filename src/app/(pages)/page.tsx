import { Metadata } from "next";
import { Faq } from "../components/landing-page/Faq";
import { Header } from "../components/landing-page/Header";
import { Hero } from "../components/landing-page/Hero";
import { Pricing } from "../components/landing-page/Pricing";
import { VideoExplanation } from "../components/landing-page/VideoExplanation";
import { trackServerEvent } from "../lib/mixpanel";
import { getSEOTags } from "../lib/seo";


export const metadata: Metadata = getSEOTags({
  appName: "ProjectInBio",
  appDescription:
    "ProjectInBio - Seus projetos e redes sociais em um único link",
  keywords: ["ProjectInBio", "projetos", "redes sociais", "link"],
  appDomain: "https://project-in-bio-henna.vercel.app/",
  canonicalUrlRelative: "/",
});

export default function Home() {

  trackServerEvent("page_view", {
    page: "home"
  })
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Hero />
      <VideoExplanation />
      <Pricing />
      <Faq />
    </div>
  );
}

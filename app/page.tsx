// The whole landing page, stitched together top to bottom.
// Order matters here, it is the story we walk a worried parent through.
import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import HowItWorks from "@/components/HowItWorks"
import WhyItWorks from "@/components/WhyItWorks"
import Security from "@/components/Security"
import Pricing from "@/components/Pricing"
import Faq from "@/components/Faq"
import FinalCta from "@/components/FinalCta"
import Footer from "@/components/Footer"
import ScrollReveal from "@/components/ScrollReveal"

export default function Home() {
  return (
    <>
      {/* little bar up top, keeps the free forever promise front and center */}
      <div className="announce">
        <span className="spark">&#9679;</span> Now onboarding our first families in private beta.{" "}
        <b>Free for families, forever.</b>
      </div>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <WhyItWorks />
        <Security />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      {/* turns on the gentle fade in as you scroll */}
      <ScrollReveal />
    </>
  )
}

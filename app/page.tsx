import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProofBar } from "@/components/ProofBar";
import { Stats } from "@/components/Stats";
import { Story } from "@/components/Story";
import { Timeline } from "@/components/Timeline";
import { Services } from "@/components/Services";
import { Advisory } from "@/components/Advisory";
import { Awards } from "@/components/Awards";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofBar />
        <Stats />
        <Story />
        <Timeline />
        <Services />
        <Advisory />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

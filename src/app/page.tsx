import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Contact from "@/components/Contact";
import { About, Skills, Projects, Services, Experience, Education, Testimonials } from "@/components/Sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Education />
      <Testimonials />
      <Contact />
    </main>
  );
}

import { Fira_Code } from "next/font/google";
import HeroSection from "@/components/home-component/HeroSection"; // Existing HeroSection
import WorksSection from "@/components/home-component/WorkSection";
import SkillSection from "@/components/home-component/SkillSection";
import AboutSection from "@/components/home-component/AboutSection";
import ContactSection from "@/components/home-component/ContactSection";

// Import Fira Code font
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fira-code",
});


export default function Home() {
  return (
    <div className={`${firaCode.className}`}>
      <section id="home">
        <HeroSection />
      </section>
      <section id="work">
        <WorksSection />
      </section>
      <section id="skills">
        <SkillSection />
      </section>
      <section id="about-me">
      <AboutSection />
      </section>
      <section id="contact">
      <ContactSection />
      </section>
    </div>
  );
}
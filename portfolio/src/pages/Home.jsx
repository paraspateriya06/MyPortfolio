import { Themetoggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar"; // ✅ FIXED
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Skills from "../components/SkillsSection";
import SkillsSection from "../components/SkillsSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle */}
      <Themetoggle />

      {/* Bg effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
<main>
  <HeroSection/>
  <AboutSection/>
  <SkillsSection/>
  <ProjectSection/>
  <ContactSection/>
</main>


      {/* Footer */}
    </div>
  );
};

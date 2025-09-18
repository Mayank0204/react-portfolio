import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementSection from "./components/AchievementSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-25 mx-auto px-5 py-4">
        <HeroSection />
        <AchievementSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
        <Footer />
    </main>
  );
}

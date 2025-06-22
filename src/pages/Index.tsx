import Header from "@/components/Header";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Analytics />
      <div className="relative">
        {/* Background pattern */}
        <div className="fixed inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ff6b35 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #f7931e 0%, transparent 50%)`,
            backgroundSize: '400px 400px'
          }}></div>
        </div>
        
        <Header />
        
        <main className="relative z-10">
          <ExperienceSection id="experience-section" />
          <ProjectsSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;

import Header from "@/components/Header";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { Helmet, HelmetProvider } from "react-helmet-async";

const Index = () => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Fabián Huervo De La Cruz | Ingeniero en Sistemas Computacionales</title>
          <meta name="description" content="Portafolio profesional de Fabián Huervo De La Cruz, Ingeniero en Sistemas Computacionales. Experiencia en desarrollo web, móvil, administración de redes y servidores." />
          <meta property="og:title" content="Fabián Huervo De La Cruz | Ingeniero en Sistemas Computacionales" />
          <meta property="og:description" content="Portafolio profesional de Fabián Huervo De La Cruz, Ingeniero en Sistemas Computacionales. Proyectos destacados y experiencia en tecnología." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/favicon.webp" />
          <meta property="og:locale" content="es_MX" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@fabianhuervo" />
          <meta name="twitter:title" content="Fabián Huervo De La Cruz | Ingeniero en Sistemas Computacionales" />
          <meta name="twitter:description" content="Portafolio profesional de Fabián Huervo De La Cruz, Ingeniero en Sistemas Computacionales." />
          <meta name="twitter:image" content="/favicon.webp" />
        </Helmet>
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
      </>
    </HelmetProvider>
  );
};

export default Index;

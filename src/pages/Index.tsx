import { Suspense, lazy } from "react";
import { Analytics } from "@vercel/analytics/react"
import { Helmet, HelmetProvider } from "react-helmet-async";

const Header = lazy(() => import("@/components/Header"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Fabián Huervo De La Cruz | Ingeniero en Sistemas Computacionales</title>
          <meta name="description" content="Portafolio profesional de Fabián Huervo De La Cruz, Ingeniero en Sistemas Computacionales. Experiencia en desarrollo web, móvil, administración de redes y servidores." />
         <meta name="google-site-verification" content="gisvqLxHG2GlVPyktUIdw9ybUuxSGQ-pwotoApMqNgg" />
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
            
            <Suspense fallback={<div className="w-full min-h-screen flex items-center justify-center text-gray-400">Cargando contenido...</div>}>
              <Header />
              <main className="relative z-10">
                <ExperienceSection id="experience-section" />
                <ProjectsSection />
              </main>
              <Footer />
            </Suspense>
          </div>
        </div>
      </>
    </HelmetProvider>
  );
};

export default Index;

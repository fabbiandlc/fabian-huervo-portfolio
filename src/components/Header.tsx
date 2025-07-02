import { Mail, Phone, MapPin, ArrowDown } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('experience-section');
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-8 px-2 md:px-8">
      {/* Fondo degradado simple sin animaciones */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-red-900/20"></div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,107,53,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-2 md:px-8 max-w-2xl mx-auto">
        {/* Fila: foto y nombre/título */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          {/* Foto a la izquierda */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-10 flex flex-col items-center w-full md:w-auto">
            <img
              src="/foto-de-perfil.webp"
              alt="Foto de perfil de Fabián Huervo De La Cruz"
              className="w-28 md:w-40 aspect-[1014/1309] object-cover rounded-md"
            />
            {/* Línea decorativa debajo de la imagen en mobile */}
            <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-red-500 mt-4 md:hidden"></div>
          </div>
          {/* Nombre y título a la derecha */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h1 className="text-3xl md:text-4xl font-black tracking-wider mb-2 text-white text-center md:text-left">
              FABIÁN HUERVO DE LA CRUZ
            </h1>
            <p className="text-base md:text-lg font-semibold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2 w-full text-center md:text-left">
              INGENIERO EN SISTEMAS COMPUTACIONALES
            </p>
            {/* Línea decorativa debajo del bloque principal en desktop */}
            <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-red-500 mt-4 hidden md:block"></div>
          </div>
        </div>
        {/* Resumen y botón de contacto siempre centrados debajo de la línea */}
        <div className="max-w-xl mx-auto mb-8 w-full mt-10 flex flex-col items-center justify-center">
          <p className="text-base md:text-lg text-gray-400 leading-relaxed text-center mb-6">
            Desarrollador de aplicaciones móviles y páginas web con 6 meses de experiencia en React Native, React, Javascript, y Node.js.
          
          </p>
          {/* Botón de contacto */}
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button className="px-6 py-3 text-base font-bold bg-gradient-to-r from-orange-500 to-red-500 text-black hover:from-orange-400 hover:to-red-400 transition-all duration-300 hover:scale-105 rounded-lg">
                CONTÁCTAME
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black/95 border border-gray-800 text-white max-w-md">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  CONTACTO
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-2">
                <div className="group cursor-pointer">
                  <div className="flex items-center gap-3 p-3 border border-gray-800 rounded-lg bg-black/30 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 hover:bg-black/50">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4 text-black" />
                    </div>
                    <a 
                      href="mailto:fahuervodelacruz@hotmail.com" 
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                      onClick={() => setIsModalOpen(false)}
                    >
                      fahuervodelacruz@hotmail.com
                    </a>
                  </div>
                </div>
                <div className="group cursor-pointer">
                  <div className="flex items-center gap-3 p-3 border border-gray-800 rounded-lg bg-black/30 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 hover:bg-black/50">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-gray-300 text-sm">+52 922 197 3362</span>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center gap-3 p-3 border border-gray-800 rounded-lg bg-black/30 backdrop-blur-sm">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-gray-300 text-sm">Jáltipan de Morelos, Veracruz, México</span>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {/* Indicador de scroll más pequeño */}
      <div 
        onClick={handleScroll} 
        className="absolute bottom-4 w-full flex justify-center items-center animate-bounce z-20 cursor-pointer"
      >
        <div className="relative">
          {/* Anillo exterior */}
          <div className="w-10 h-10 border border-orange-500/30 rounded-full flex items-center justify-center">
            {/* Anillo interior con brillo */}
            <div className="w-7 h-7 border border-orange-500/60 rounded-full flex items-center justify-center bg-orange-500/5 backdrop-blur-sm">
              <ArrowDown className="w-4 h-4 text-orange-400 animate-pulse" />
            </div>
          </div>
          {/* Anillo animado */}
          <div className="absolute inset-0 border border-orange-500/20 rounded-full animate-ping"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;

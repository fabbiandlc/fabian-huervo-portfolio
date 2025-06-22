
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-red-900/20"></div>
      
      {/* Animated lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
        <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transparent"></div>
        <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black tracking-wider mb-6 text-white">
            FABIÁN HUERVO
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              DE LA CRUZ
            </span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide mb-8">
            INGENIERO EN SISTEMAS COMPUTACIONALES
          </p>
          
          {/* Brief summary */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-400 leading-relaxed">
              Especialista en desarrollo de aplicaciones, administración de redes y gestión de servidores.
              Con experiencia en soporte técnico, sistemas ERP y tecnologías web modernas.
              Enfocado en automatización y optimización de procesos mediante inteligencia artificial.
            </p>
          </div>

          {/* Contact button */}
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-orange-500 to-red-500 text-black hover:from-orange-400 hover:to-red-400 transition-all duration-300 hover:scale-105 rounded-lg">
                CONTÁCTAME
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black/95 border border-gray-800 text-white max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  CONTACTO
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6 pt-4">
                <div className="group cursor-pointer">
                  <div className="flex items-center gap-4 p-4 border border-gray-800 rounded-lg bg-black/30 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 hover:bg-black/50">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-black" />
                    </div>
                    <a 
                      href="mailto:fahuervodelacruz@hotmail.com" 
                      className="text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsModalOpen(false)}
                    >
                      fahuervodelacruz@hotmail.com
                    </a>
                  </div>
                </div>
                
                <div className="group cursor-pointer">
                  <div className="flex items-center gap-4 p-4 border border-gray-800 rounded-lg bg-black/30 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 hover:bg-black/50">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-black" />
                    </div>
                    <span className="text-gray-300">+52 922 197 3362</span>
                  </div>
                </div>
                
                <div className="group">
                  <div className="flex items-center gap-4 p-4 border border-gray-800 rounded-lg bg-black/30 backdrop-blur-sm">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-black" />
                    </div>
                    <span className="text-gray-300">Veracruz, México</span>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;


import { Mail, Phone, MapPin, ArrowDown } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background with orange glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-red-900/20">
        {/* Floating orange orbs with animation */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Moving light streaks */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/15 to-transparent animate-pulse delay-500"></div>
        </div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,107,53,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Animated lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
        <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transparent"></div>
        <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-12">
          {/* Photo container */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-orange-500/30 flex items-center justify-center backdrop-blur-sm">
                {/* Photo placeholder - you can replace this with an actual image */}
                <div className="w-44 h-44 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/20 flex items-center justify-center">
                  <span className="text-orange-400 text-6xl font-bold">FH</span>
                </div>
              </div>
              {/* Glowing ring animation */}
              <div className="absolute inset-0 rounded-full border-2 border-orange-500/50 animate-ping"></div>
            </div>
          </div>

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
      
      {/* Futuristic scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="relative">
          {/* Outer ring */}
          <div className="w-16 h-16 border border-orange-500/30 rounded-full flex items-center justify-center">
            {/* Inner ring with glow */}
            <div className="w-12 h-12 border border-orange-500/60 rounded-full flex items-center justify-center bg-orange-500/5 backdrop-blur-sm">
              <ArrowDown className="w-6 h-6 text-orange-400 animate-pulse" />
            </div>
          </div>
          {/* Animated ring */}
          <div className="absolute inset-0 border border-orange-500/20 rounded-full animate-ping"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;


import { Mail, Phone, MapPin } from "lucide-react";

const Header = () => {
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
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-black tracking-wider mb-6 text-white">
            FABIÁN
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              HUERVO
            </span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
            INGENIERO EN SISTEMAS COMPUTACIONALES
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="group cursor-pointer">
            <div className="flex flex-col items-center p-6 border border-gray-800 rounded-lg bg-black/30 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 hover:bg-black/50">
              <Mail className="w-6 h-6 text-orange-400 mb-3 group-hover:scale-110 transition-transform" />
              <a href="mailto:fahuervodelacruz@hotmail.com" className="text-gray-300 text-sm hover:text-white transition-colors">
                fahuervodelacruz@hotmail.com
              </a>
            </div>
          </div>
          
          <div className="group cursor-pointer">
            <div className="flex flex-col items-center p-6 border border-gray-800 rounded-lg bg-black/30 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 hover:bg-black/50">
              <Phone className="w-6 h-6 text-orange-400 mb-3 group-hover:scale-110 transition-transform" />
              <a href="tel:+5292219733622" className="text-gray-300 text-sm hover:text-white transition-colors">
                +52 922 197 3362
              </a>
            </div>
          </div>
          
          <div className="group cursor-pointer">
            <div className="flex flex-col items-center p-6 border border-gray-800 rounded-lg bg-black/30 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300 hover:bg-black/50">
              <MapPin className="w-6 h-6 text-orange-400 mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-gray-300 text-sm">Veracruz, México</span>
            </div>
          </div>
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

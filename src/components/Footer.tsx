
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-white tracking-wider">CONTACTO</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <a href="mailto:fahuervodelacruz@hotmail.com" className="text-gray-300 hover:text-white transition-colors">
                  fahuervodelacruz@hotmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-black" />
                </div>
                <a href="tel:+5292219733622" className="text-gray-300 hover:text-white transition-colors">
                  +52 922 197 3362
                </a>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <span className="text-gray-300">Veracruz, México</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-white tracking-wider">ESPECIALIDADES</h3>
            <div className="space-y-3">
              {[
                "Desarrollo de Aplicaciones",
                "Administración de Redes",
                "Gestión de Servidores",
                "Soporte Técnico",
                "Bases de Datos",
                "Sistemas ERP"
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                  <span className="text-gray-400">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-white tracking-wider">COLABOREMOS</h3>
            <p className="text-gray-400 leading-relaxed">
              ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a llevarlo al siguiente nivel.
            </p>
            <a
              href="mailto:fahuervodelacruz@hotmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-black rounded-lg font-bold hover:from-orange-400 hover:to-red-400 transition-all duration-300 hover:scale-105"
            >
              INICIAR PROYECTO
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-black text-white tracking-wider mb-1">FABIÁN HUERVO DE LA CRUZ</h4>
              <p className="text-gray-500 text-sm">Ingeniero en Sistemas Computacionales</p>
            </div>
            
            <div className="text-gray-500 text-sm text-center md:text-right">
              <p>© 2025 Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"></div>
    </footer>
  );
};

export default Footer;

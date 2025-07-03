import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-8 px-4 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Contact info */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-4 h-4 text-black" />
              </div>
              <a href="mailto:fahuervodelacruz@hotmail.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                fahuervodelacruz@hotmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4 text-black" />
              </div>
              <a href="tel:+5292219733622" className="text-gray-300 hover:text-white transition-colors text-sm">
                +52 922 197 3362
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2025 Fabián Huervo De La Cruz. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

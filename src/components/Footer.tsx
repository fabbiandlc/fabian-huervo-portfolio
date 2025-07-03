import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-8 px-4 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-6 w-full">
          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-4 sm:gap-8 w-full md:w-auto">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-4 h-4 text-black" />
              </div>
              <a href="mailto:fahuervodelacruz@hotmail.com" className="text-gray-300 hover:text-white transition-colors text-base">
                fahuervodelacruz@hotmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4 text-black" />
              </div>
              <a href="tel:+5292219733622" className="text-gray-300 hover:text-white transition-colors text-base whitespace-nowrap">
                +52 922 197 3362
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="w-full md:w-auto text-center md:text-right pt-6 md:pt-0 border-t border-gray-800 md:border-0">
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

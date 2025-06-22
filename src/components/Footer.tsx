
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Fabián Huervo De La Cruz</h3>
          <p className="text-gray-300 mb-6">Ingeniero en Sistemas Computacionales</p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:fahuervodelacruz@hotmail.com" className="hover:text-blue-400 transition-colors">
                fahuervodelacruz@hotmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+5292219733622" className="hover:text-blue-400 transition-colors">
                +52 922 197 3362
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Veracruz, México</span>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4">
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

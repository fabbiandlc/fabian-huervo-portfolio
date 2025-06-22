
import { Mail, Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b-2 border-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
            Fabián Huervo De La Cruz
          </h1>
          <p className="text-xl text-gray-600 font-medium">
            Ingeniero en Sistemas Computacionales
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Mail className="w-5 h-5" />
              <a href="mailto:fahuervodelacruz@hotmail.com" className="hover:underline">
                fahuervodelacruz@hotmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
              <Phone className="w-5 h-5" />
              <a href="tel:+5292219733622" className="hover:underline">
                +52 922 197 3362
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-5 h-5" />
              <span>Veracruz, México</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

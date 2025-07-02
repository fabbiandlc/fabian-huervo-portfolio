import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Página no encontrada | Fabián Huervo De La Cruz</title>
        <meta name="description" content="La página que buscas no existe. Portafolio de Fabián Huervo De La Cruz." />
        <meta property="og:title" content="Página no encontrada | Fabián Huervo De La Cruz" />
        <meta property="og:description" content="La página que buscas no existe. Portafolio de Fabián Huervo De La Cruz." />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">¡Ups! Página no encontrada</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Volver al inicio
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;

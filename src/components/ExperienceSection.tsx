import { MapPin, Building2, Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "COBAEV – Oficinas Centrales",
    location: "Xalapa, Veracruz, México",
    period: "Enero 2025 - Junio 2025",
    responsibilities: [
      "Apoyé en el área de tecnología con la generación de reportes de inventario y control de activos",
      "Realicé altas y bajas de equipos en el sistema institucional",
      "Di mantenimiento preventivo y correctivo a equipos de cómputo",
      "Desarrollé una aplicación móvil para la generación automática de horarios escolares"
    ]
  },
  {
    company: "ITESCO – Área de Sistemas",
    location: "Coatzacoalcos, Veracruz, México",
    period: "Junio 2024 - Diciembre 2024",
    responsibilities: [
      "Realicé cableado estructurado RJ45 y apoyé en la configuración de switches y routers para la red interna",
      "Administré servidores físicos y virtuales, incluyendo la creación de máquinas virtuales y servidores NAS",
      "Instalé sistemas operativos, drivers, y brindé soporte técnico a equipos de cómputo",
      "Apoyé en la instalación y configuración de cámaras CCTV"
    ]
  },
  {
    company: "Antena 7",
    location: "Jáltipan, Veracruz, México",
    period: "Febrero 2022 - Junio 2023",
    responsibilities: [
      "Brindé soporte técnico a equipos de cómputo, incluyendo diagnóstico, mantenimiento y reparación",
      "Realicé actualizaciones de hardware, instalación de sistemas operativos y configuración de drivers",
      "Administré el sistema ERP para gestionar entradas y salidas de inventario",
      "Contacté y gestioné pedidos con proveedores para reabastecer productos fuera de stock"
    ]
  }
];

interface ExperienceSectionProps {
  id?: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wider">
            EXPERIENCIA
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              PROFESIONAL
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Trayectoria profesional en el campo de la tecnología y sistemas
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-red-500 to-gray-700"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full border-4 border-gray-900 z-10"></div>
                
                {/* Experience card */}
                <div className="ml-16 group relative overflow-hidden rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <div className="p-6">
                    {/* Date header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <time className="text-lg font-bold text-white">
                          {exp.period}
                        </time>
                      </div>
                    </div>
                    
                    {/* Experience content */}
                    <div className="flex items-start gap-4">
                      {/* Company Icon */}
                      <div className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 border border-gray-700">
                        <Building2 className="w-6 h-6 text-orange-400" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="mb-3">
                          <h3 className="text-xl font-black text-white mb-2">
                            {exp.company}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Responsibilities */}
                        <div className="space-y-2">
                          <h4 className="text-orange-400 text-xs font-bold tracking-widest uppercase">
                            RESPONSABILIDADES
                          </h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, respIndex) => (
                              <li key={respIndex} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                  {resp}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Experience badge */}
                        <div className="mt-4 flex items-center gap-2">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

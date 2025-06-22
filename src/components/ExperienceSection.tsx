
import { Calendar, MapPin, Building, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "COBAEV – Oficinas Centrales",
    position: "Residencia Profesional - Área de Tecnología",
    location: "Xalapa, Veracruz, México",
    period: "Ene 2025 - Jun 2025",
    responsibilities: [
      "Apoyé en el área de tecnología con la generación de reportes de inventario y control de activos",
      "Realicé altas y bajas de equipos en el sistema institucional",
      "Di mantenimiento preventivo y correctivo a equipos de cómputo",
      "Desarrollé una aplicación móvil para la generación automática de horarios escolares"
    ]
  },
  {
    company: "ITESCO – Área de Sistemas",
    position: "Especialista en Data Center",
    location: "Coatzacoalcos, Veracruz, México",
    period: "Jun 2024 - Dic 2024",
    responsibilities: [
      "Realicé cableado estructurado RJ45 y apoyé en la configuración de switches y routers para la red interna",
      "Administré servidores físicos y virtuales, incluyendo la creación de máquinas virtuales y servidores NAS",
      "Instalé sistemas operativos, drivers, y brindé soporte técnico a equipos de cómputo",
      "Apoyé en la instalación y configuración de cámaras CCTV"
    ]
  },
  {
    company: "Antena 7",
    position: "Técnico en Soporte y Sistemas",
    location: "Jáltipan, Veracruz, México",
    period: "Feb 2022 - Jun 2023",
    responsibilities: [
      "Brindé soporte técnico a equipos de cómputo, incluyendo diagnóstico, mantenimiento y reparación",
      "Realicé actualizaciones de hardware, instalación de sistemas operativos y configuración de drivers",
      "Administré el sistema ERP para gestionar entradas y salidas de inventario",
      "Contacté y gestioné pedidos con proveedores para reabastecer productos fuera de stock"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wider">
            EXPERIENCIA
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              PROFESIONAL
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-red-500 to-orange-500"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transform -translate-x-1/2 border-4 border-black z-10"></div>
                
                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-orange-500/50 transition-all duration-500 hover:bg-gray-900/70">
                    {/* Company header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Building className="w-5 h-5 text-orange-400" />
                          <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                            {exp.company}
                          </h3>
                        </div>
                        <p className="text-lg font-semibold text-orange-400 mb-3">{exp.position}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-gray-400 text-sm">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="font-mono">{exp.period}</span>
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-6 h-6 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-3">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <div key={respIndex} className="flex items-start gap-3 group/item">
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <p className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors">{resp}</p>
                        </div>
                      ))}
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

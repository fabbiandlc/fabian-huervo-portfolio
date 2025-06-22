
import { Calendar, MapPin, Building } from "lucide-react";

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
    <section id="experiencia" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Experiencia Profesional
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <div className="flex items-center gap-2 mb-2">
                  <Building className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                </div>
                <p className="text-lg font-semibold text-blue-600 mb-2">{exp.position}</p>
                <div className="flex items-center gap-4 text-gray-600 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {exp.responsibilities.map((resp, respIndex) => (
                <div key={respIndex} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{resp}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

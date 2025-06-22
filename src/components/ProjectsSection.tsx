
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Aplicación de Horarios Escolares",
    description: "Aplicación móvil desarrollada durante mi residencia profesional para la generación automática de horarios escolares, optimizando la asignación de recursos educativos.",
    technologies: ["React Native", "JavaScript", "SQL"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Sistema de Gestión ERP",
    description: "Administración y optimización del sistema ERP para control de inventarios, gestión de proveedores y automatización de procesos empresariales.",
    technologies: ["SQL", "Sistemas ERP", "Gestión de Inventarios"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Infraestructura de Red y Servidores",
    description: "Implementación de cableado estructurado, configuración de switches/routers, administración de servidores virtuales y físicos en Data Center.",
    technologies: ["Redes", "Virtualización", "Windows Server", "Linux"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Sistema de Control de Activos",
    description: "Desarrollo de herramientas para la generación de reportes de inventario, control de activos tecnológicos y gestión de equipos institucionales.",
    technologies: ["HTML", "CSS", "JavaScript", "Bases de Datos"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
    demoUrl: "#",
    githubUrl: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Proyectos Destacados
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Una selección de proyectos que demuestran mis habilidades técnicas y experiencia profesional
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.03] border border-gray-100"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.demoUrl}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  <Github className="w-4 h-4" />
                  Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

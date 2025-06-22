
import { ExternalLink, Github, Play } from "lucide-react";

const projects = [
  {
    title: "Aplicación de Horarios Escolares",
    subtitle: "MOBILE APPLICATION",
    description: "Sistema avanzado de generación automática de horarios escolares con algoritmos de optimización para la asignación eficiente de recursos educativos.",
    technologies: ["React Native", "JavaScript", "SQL", "Algoritmos"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Sistema de Gestión ERP",
    subtitle: "ENTERPRISE SOLUTION",
    description: "Plataforma integral para la administración empresarial con módulos de inventario, proveedores y automatización de procesos críticos.",
    technologies: ["SQL", "ERP Systems", "Business Intelligence"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "Infraestructura de Red",
    subtitle: "NETWORK ARCHITECTURE",
    description: "Diseño e implementación de infraestructura de red empresarial con servidores virtualizados y sistemas de seguridad CCTV.",
    technologies: ["Networking", "Virtualization", "Windows Server", "Linux"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "Control de Activos",
    subtitle: "ASSET MANAGEMENT",
    description: "Sistema de gestión y control de activos tecnológicos con reportería avanzada y seguimiento en tiempo real.",
    technologies: ["JavaScript", "Database Design", "Reporting"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wider">
            PROYECTOS
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              DESTACADOS
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Portafolio de soluciones tecnológicas que demuestran experiencia en desarrollo, 
            infraestructura y gestión de sistemas empresariales
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-orange-500/50 transition-all duration-700 ${
                project.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              {/* Image container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    project.featured ? 'h-64 lg:h-80' : 'h-56'
                  }`}
                />
                
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
                  </div>
                </div>
                
                {/* Project number */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center border border-orange-500/30">
                  <span className="text-orange-400 font-bold">{(index + 1).toString().padStart(2, '0')}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-2">{project.subtitle}</p>
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-black/50 border border-gray-700 text-orange-400 text-xs font-semibold rounded-full hover:border-orange-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-black rounded-lg font-bold hover:from-orange-400 hover:to-red-400 transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    EXPLORAR
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-bold hover:border-orange-500 hover:text-white transition-all duration-300 hover:bg-orange-500/10"
                  >
                    <Github className="w-4 h-4" />
                    CÓDIGO
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

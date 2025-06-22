# Portfolio de Fabian Huervo De La Cruz

## 📋 Descripción

Portfolio personal desarrollado con React, TypeScript y Tailwind CSS. Este proyecto presenta mi experiencia profesional, proyectos destacados y habilidades técnicas de manera elegante y moderna.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Interfaz Moderna**: Utiliza componentes de shadcn/ui para una experiencia visual atractiva
- **Navegación Suave**: Transiciones fluidas entre secciones
- **Tema Oscuro**: Diseño elegante con fondo negro y acentos de color
- **Componentes Reutilizables**: Arquitectura modular y escalable

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para mayor robustez
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework de CSS utilitario
- **shadcn/ui** - Componentes de UI modernos y accesibles

### Componentes UI
- **Radix UI** - Componentes primitivos accesibles
- **Lucide React** - Iconografía moderna
- **React Router DOM** - Navegación entre páginas
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **PostCSS** - Procesamiento de CSS
- **Autoprefixer** - Compatibilidad entre navegadores

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de UI base
│   ├── Header.tsx      # Encabezado del sitio
│   ├── Footer.tsx      # Pie de página
│   ├── ExperienceSection.tsx  # Sección de experiencia
│   └── ProjectsSection.tsx    # Sección de proyectos
├── pages/              # Páginas de la aplicación
│   ├── Index.tsx       # Página principal
│   └── NotFound.tsx    # Página 404
├── hooks/              # Hooks personalizados
├── lib/                # Utilidades y configuraciones
└── App.tsx             # Componente raíz
```

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd fabian-huervo-portfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run build:dev` - Construye en modo desarrollo
- `npm run lint` - Ejecuta el linter
- `npm run preview` - Vista previa de la build de producción

## 🎨 Personalización

### Colores y Temas
El proyecto utiliza un esquema de colores personalizado con:
- Fondo principal: Negro (`bg-black`)
- Acentos: Naranja (`#ff6b35`, `#f7931e`)
- Texto: Blanco (`text-white`)

### Componentes
Los componentes están organizados en:
- **UI Base**: Componentes reutilizables en `src/components/ui/`
- **Secciones**: Componentes específicos de página en `src/components/`
- **Páginas**: Vistas principales en `src/pages/`

## 📱 Responsive Design

El portfolio está optimizado para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Configuración de Desarrollo

### ESLint
Configurado con reglas estrictas para TypeScript y React.

### Tailwind CSS
Configurado con:
- Tipografía personalizada
- Animaciones CSS
- Utilidades de diseño responsivo

### Vite
Configurado para:
- Hot Module Replacement (HMR)
- Optimización de builds
- Soporte para TypeScript

## 📄 Licencia

Este proyecto es de uso personal y educativo.

## 👨‍💻 Autor

**Fabian Huervo**
- Desarrollador Full Stack
- Especializado en React, TypeScript y tecnologías modernas
- Enfocado en crear experiencias de usuario excepcionales

---

*Desarrollado con ❤️ usando React, TypeScript y Tailwind CSS*

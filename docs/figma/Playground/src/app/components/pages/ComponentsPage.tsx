export default function ComponentsPage() {
  return (
    <div className="w-full h-full bg-[#1E1E1E] overflow-auto">
      <div className="max-w-5xl mx-auto px-12 py-24">
        
        {/* Header */}
        <header className="mb-24 space-y-6">
          <h1 className="text-5xl font-black text-[#F1F1F1] leading-tight">
            Componentes
          </h1>
          <p className="text-lg text-[rgba(241,241,241,0.7)] max-w-3xl leading-relaxed">
            Librería de componentes del Sistema de Diseño Proppia. 
            Basada en shadcn/ui, traducida desde tokens, lista para producción.
          </p>
        </header>

        {/* Main Content */}
        <div className="space-y-16">

          {/* Introduction */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#23F8F7]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Sobre esta librería</h2>
            </div>

            <div className="space-y-4 pl-5">
              <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed">
                Esta librería documenta todos los componentes disponibles en el Sistema de Diseño Proppia. 
                Cada componente está construido desde tokens fundacionales y sigue la metodología Atomic Design.
              </p>

              <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed">
                Los componentes están organizados en dos niveles: <strong className="text-[#F1F1F1]">Moléculas</strong> (elementos básicos reutilizables) 
                y <strong className="text-[#F1F1F1]">Organismos</strong> (componentes complejos que cumplen funciones específicas).
              </p>

              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-3">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Átomos / Foundations</h3>
                <p className="text-sm text-[rgba(241,241,241,0.6)] leading-relaxed">
                  Los átomos (colores, tipografía, espaciado, iconos) están documentados en la sección 
                  <strong className="text-[#F1F1F1] mx-1">Tokens & Fundamentos</strong>. 
                  No se repiten aquí para evitar duplicación.
                </p>
              </div>
            </div>
          </section>

          {/* Molecules */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#75EFB1]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Moléculas</h2>
            </div>

            <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed pl-5">
              Componentes básicos e indivisibles que combinan átomos con intención funcional. 
              Usados como bloques constructivos en organismos más complejos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-5">
              {[
                { name: 'Buttons', desc: 'Botones de acción primarios, secundarios y terciarios' },
                { name: 'Text Input', desc: 'Campos de entrada de texto con validación' },
                { name: 'Text Area', desc: 'Área de texto multi-línea' },
                { name: 'Switch', desc: 'Interruptor de toggle on/off' },
                { name: 'Avatars', desc: 'Imágenes de perfil circulares o cuadradas' },
                { name: 'Tabs', desc: 'Navegación por pestañas' },
                { name: 'List', desc: 'Listas ordenadas y desordenadas' },
                { name: 'Progress Bar', desc: 'Barra de progreso horizontal' },
                { name: 'Progress Circle', desc: 'Indicador de progreso circular' },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 hover:border-[rgba(241,241,241,0.2)] transition-all"
                >
                  <p className="text-base font-bold text-[#F1F1F1] mb-2">{item.name}</p>
                  <p className="text-sm text-[rgba(241,241,241,0.6)]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 pl-5">
              <p className="text-sm text-[rgba(241,241,241,0.6)] leading-relaxed">
                <strong className="text-[#F1F1F1]">Nota:</strong> Usa el menú lateral para acceder a la documentación completa de cada molécula.
              </p>
            </div>
          </section>

          {/* Organisms */}
          <section className="space-y-8 pb-24">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#F6E342]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Organismos</h2>
            </div>

            <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed pl-5">
              Componentes complejos compuestos por moléculas y átomos. 
              Resuelven problemas específicos de interfaz y están preparados para recibir data real.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-5">
              {[
                { name: 'Dropdowns', desc: 'Menús desplegables y selectores' },
                { name: 'Alerts', desc: 'Mensajes de notificación y estados del sistema' },
                { name: 'Cards', desc: 'Contenedores estructurados de información' },
                { name: 'Modals / Pop-Ups', desc: 'Ventanas modales y overlays' },
                { name: 'Navbar / Header', desc: 'Barra de navegación principal' },
                { name: 'Banners', desc: 'Banners informativos y promocionales' },
                { name: 'Carousel', desc: 'Carrusel de contenido deslizable' },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 hover:border-[rgba(241,241,241,0.2)] transition-all"
                >
                  <p className="text-base font-bold text-[#F1F1F1] mb-2">{item.name}</p>
                  <p className="text-sm text-[rgba(241,241,241,0.6)]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 pl-5">
              <p className="text-sm text-[rgba(241,241,241,0.6)] leading-relaxed">
                <strong className="text-[#F1F1F1]">Nota:</strong> Usa el menú lateral para acceder a la documentación completa de cada organismo.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

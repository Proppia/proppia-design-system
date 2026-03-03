export default function CaseStudyPage() {
  return (
    <div className="w-full h-full bg-[#F1F1F1] overflow-auto">
      {/* HERO - Full-width image + overlay */}
      <section className="relative h-screen">
        {/* Background image placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(30,30,30,0.8)] via-[rgba(30,30,30,0.6)] to-[rgba(30,30,30,0.4)]" />

        {/* Title overlay block */}
        <div className="absolute bottom-0 left-0 bg-[#1E1E1E] p-16 max-w-2xl space-y-6">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <p className="text-xs font-medium text-[rgba(241,241,241,0.6)] tracking-wider uppercase">
                CASO DE ÉXITO
              </p>
              <h1 className="text-5xl font-black text-[#F1F1F1] leading-tight">
                Transformación Digital:<br />
                De startup a líder
              </h1>
              <p className="text-lg text-[rgba(241,241,241,0.8)]">
                Performance & Growth
              </p>
            </div>
            <div className="w-12 h-12 bg-[#F6E342] flex-shrink-0" />
          </div>
        </div>
      </section>

      {/* CONTEXT + CHALLENGE - Asymmetric 2-col */}
      <section className="py-32 px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-16">
          {/* Context */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#75EFB1]" />
              <h2 className="text-2xl font-bold text-[#1E1E1E]">CONTEXTO</h2>
            </div>
            <div className="space-y-4 text-base text-[rgba(30,30,30,0.8)] leading-loose">
              <p>
                Una startup tecnológica B2B con 3 años en el mercado enfrentaba un plateau de crecimiento. 
                A pesar de tener un producto sólido, su go-to-market era reactivo y su marca carecía de diferenciación clara.
              </p>
              <p>
                Con $2M en ARR y un equipo de 25 personas, necesitaban evolucionar de startup experimental 
                a empresa escalable con procesos definidos y estrategia de crecimiento predecible.
              </p>
            </div>
          </div>

          {/* Challenge */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#F6E342]" />
              <h2 className="text-2xl font-bold text-[#1E1E1E]">RETO</h2>
            </div>
            <div className="space-y-4 text-base text-[rgba(30,30,30,0.8)] leading-loose">
              <p>
                El reto era triple: redefinir su posicionamiento estratégico, construir un sistema de adquisición 
                de clientes predecible, y escalar sus operaciones sin perder agilidad.
              </p>
              <p>
                Además, debían hacerlo mientras mantenían el crecimiento actual y sin comprometer la cultura 
                de innovación que los había llevado hasta allí.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH - Visual timeline con cuadrados */}
      <section className="py-24 px-24 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          <h2 className="text-3xl font-bold text-[#1E1E1E]">
            Nuestro enfoque
          </h2>

          {/* Timeline vertical */}
          <div className="relative space-y-12">
            {/* Vertical line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-[rgba(30,30,30,0.24)]" />

            {/* Phase 1 */}
            <div className="relative flex items-start gap-8">
              <div className="w-12 h-12 bg-[#F6E342] flex-shrink-0 relative z-10" />
              <div className="flex-1 pt-1 space-y-3">
                <h3 className="text-xl font-bold text-[#1E1E1E]">
                  Fase 1: Diagnóstico estratégico
                </h3>
                <p className="text-base text-[rgba(30,30,30,0.6)] leading-relaxed">
                  Análisis profundo de mercado, competencia, y operaciones internas. 
                  Identificación de oportunidades de crecimiento y puntos ciegos organizacionales.
                  Workshop de 3 días con stakeholders clave.
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative flex items-start gap-8">
              <div className="w-12 h-12 bg-[#75EFB1] flex-shrink-0 relative z-10" />
              <div className="flex-1 pt-1 space-y-3">
                <h3 className="text-xl font-bold text-[#1E1E1E]">
                  Fase 2: Redefinición estratégica
                </h3>
                <p className="text-base text-[rgba(30,30,30,0.6)] leading-relaxed">
                  Co-creación de nuevo posicionamiento, propuesta de valor diferenciada, 
                  y roadmap de crecimiento a 18 meses. Definición de ICP, mensajería, y arquitectura de marca.
                </p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative flex items-start gap-8">
              <div className="w-12 h-12 bg-[#23F8F7] flex-shrink-0 relative z-10" />
              <div className="flex-1 pt-1 space-y-3">
                <h3 className="text-xl font-bold text-[#1E1E1E]">
                  Fase 3: Ejecución integrada
                </h3>
                <p className="text-base text-[rgba(30,30,30,0.6)] leading-relaxed">
                  Implementación de sistema de growth marketing, rediseño de experiencia digital, 
                  automatización de procesos de ventas, y construcción de motor de contenido. 
                  Equipo híbrido Proppia + Cliente durante 6 meses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS - Charcoal block con statement numbers */}
      <section className="py-32 px-24 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="flex items-start justify-between">
            <h2 className="text-3xl font-bold text-[#F1F1F1]">
              Resultados medibles
            </h2>
            <div className="w-12 h-12 bg-[#23F8F7]" />
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-3 gap-16">
            <div className="space-y-4">
              <p className="text-6xl font-black text-[#F1F1F1]">+234%</p>
              <p className="text-sm font-medium text-[rgba(241,241,241,0.6)]">ROI en marketing</p>
              <p className="text-base text-[rgba(241,241,241,0.8)] leading-relaxed">
                De $80k a $268k en MRR en 8 meses
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-6xl font-black text-[#F1F1F1]">$127K</p>
              <p className="text-sm font-medium text-[rgba(241,241,241,0.6)]">CAC optimizado</p>
              <p className="text-base text-[rgba(241,241,241,0.8)] leading-relaxed">
                Reducción de 45% en costo de adquisición
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-6xl font-black text-[#F1F1F1]">8 sem</p>
              <p className="text-sm font-medium text-[rgba(241,241,241,0.6)]">Time to value</p>
              <p className="text-base text-[rgba(241,241,241,0.8)] leading-relaxed">
                Primeros resultados medibles en Q1
              </p>
            </div>
          </div>

          {/* Gradient bar */}
          <div 
            className="h-2 w-full max-w-4xl"
            style={{ background: 'linear-gradient(90deg, #F6E342 0%, #75EFB1 50%, #23F8F7 100%)' }}
          />
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-32 px-24">
        <div className="max-w-4xl mx-auto space-y-12">
          <blockquote className="text-3xl text-[#1E1E1E] font-normal italic leading-relaxed">
            "Proppia no solo ejecuta proyectos, piensan como parte de nuestro equipo. 
            Su enfoque estratégico combinado con ejecución impecable nos permitió 
            escalar de forma sostenible y predecible."
          </blockquote>

          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-[#1E1E1E] rounded-full flex items-center justify-center text-[#F1F1F1] text-xl font-bold">
              MG
            </div>
            <div>
              <p className="text-base font-bold text-[#1E1E1E]">María González</p>
              <p className="text-sm text-[rgba(30,30,30,0.6)]">CMO, TechStartup Inc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED CASES */}
      <section className="py-24 px-24 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#1E1E1E]">
              Casos relacionados
            </h2>
            <a href="#casos" className="text-sm font-medium text-[#1E1E1E] hover:underline flex items-center gap-2">
              Ver todos los casos
              <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              { title: 'Rebranding B2B', category: 'Brand & Experience', color: '#75EFB1' },
              { title: 'Plataforma SaaS', category: 'Digital Products & AI', color: '#23F8F7' },
              { title: 'Growth Strategy', category: 'Performance & Growth', color: '#F6E342' }
            ].map((caso, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[rgba(30,30,30,0.12)] p-6 space-y-4 hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 flex-shrink-0" style={{ backgroundColor: caso.color }} />
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-[rgba(30,30,30,0.6)] uppercase tracking-wider">
                      {caso.category}
                    </p>
                    <h3 className="text-lg font-bold text-[#1E1E1E] group-hover:text-[rgba(30,30,30,0.8)] transition-colors">
                      {caso.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

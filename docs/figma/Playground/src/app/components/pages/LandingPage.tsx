import { ProppiaIsotipo } from '@/app/components/brand/ProppiaIsotipo';

export default function LandingPage() {
  return (
    <div className="w-full h-full bg-[#F1F1F1] overflow-auto">
      {/* SECTION 1: HERO */}
      <section className="min-h-screen flex flex-col px-24 py-12">
        {/* Nav */}
        <nav className="flex items-center justify-between mb-32">
          <div className="flex items-center gap-3">
            <ProppiaIsotipo className="h-10 text-[#1E1E1E]" />
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#F6E342]" />
              <div className="w-2 h-2 bg-[#75EFB1]" />
              <div className="w-2 h-2 bg-[#23F8F7]" />
            </div>
          </div>
          <div className="flex items-center gap-8 text-sm font-medium text-[rgba(30,30,30,0.6)]">
            <a href="#servicios" className="hover:text-[#1E1E1E] transition-colors">Servicios</a>
            <a href="#casos" className="hover:text-[#1E1E1E] transition-colors">Casos</a>
            <a href="#contacto" className="hover:text-[#1E1E1E] transition-colors">Contacto</a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-between max-w-7xl mx-auto w-full">
          <div className="max-w-2xl space-y-12">
            <h1 className="text-7xl font-black text-[#1E1E1E] leading-none">
              De la idea<br />
              al <span className="italic">resultado</span>.
            </h1>
            
            <p className="text-xl text-[rgba(30,30,30,0.6)] leading-relaxed max-w-xl">
              Traducimos tu visión en acción, conectando estrategia, diseño y tecnología.
            </p>

            <button className="bg-[#1E1E1E] text-[#F1F1F1] px-12 py-5 text-base font-medium rounded-lg hover:shadow-[0_0_0_2px_rgba(246,227,66,1)] transition-all">
              Agendar sesión estratégica
            </button>
          </div>

          {/* Decorative squares stack */}
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#F6E342]" />
            <div className="w-12 h-12 bg-[#75EFB1]" />
            <div className="w-12 h-12 bg-[#23F8F7]" />
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLEM - 3 bloques charcoal */}
      <section className="py-32 px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-12">
          {/* Bloque 1 */}
          <div className="bg-[#1E1E1E] rounded-xl p-12 space-y-8">
            <div className="w-16 h-16 bg-[#F6E342]" />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#F1F1F1]">
                La desconexión entre estrategia y ejecución
              </h3>
              <p className="text-base text-[rgba(241,241,241,0.8)] leading-relaxed">
                Ideas brillantes que no se materializan. Equipos que ejecutan sin dirección clara. 
                La brecha entre pensar y hacer puede costarte millones.
              </p>
            </div>
          </div>

          {/* Bloque 2 */}
          <div className="bg-[#1E1E1E] rounded-xl p-12 space-y-8">
            <div className="w-16 h-16 bg-[#75EFB1]" />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#F1F1F1]">
                La saturación del mercado
              </h3>
              <p className="text-base text-[rgba(241,241,241,0.8)] leading-relaxed">
                Competencia feroz, clientes más exigentes, canales sobresaturados. 
                Destacar ya no es opcional, es supervivencia.
              </p>
            </div>
          </div>

          {/* Bloque 3 */}
          <div className="bg-[#1E1E1E] rounded-xl p-12 space-y-8">
            <div className="w-16 h-16 bg-[#23F8F7]" />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#F1F1F1]">
                La necesidad de un socio integral
              </h3>
              <p className="text-base text-[rgba(241,241,241,0.8)] leading-relaxed">
                Proveedores que no piensan, consultores que no ejecutan. 
                Necesitas alguien que haga ambas cosas como si fuera parte de tu equipo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: METHODOLOGY - Timeline */}
      <section className="py-24 px-24 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2 className="text-3xl font-bold text-[#1E1E1E]">
            Nuestra metodología: 9 etapas
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Gradient line */}
            <div 
              className="absolute top-4 left-0 right-0 h-1"
              style={{ background: 'linear-gradient(90deg, #F6E342 0%, #75EFB1 50%, #23F8F7 100%)' }}
            />

            {/* Nodes */}
            <div className="relative flex justify-between">
              {[
                { label: 'Diagnóstico', color: '#F6E342' },
                { label: 'Estrategia', color: '#ECEB7A' },
                { label: 'Diseño', color: '#BEF092' },
                { label: 'Contenido', color: '#91F3A6' },
                { label: 'Desarrollo', color: '#75EFB1' },
                { label: 'Testing', color: '#64F3C1' },
                { label: 'Launch', color: '#55F6D4' },
                { label: 'Optimización', color: '#3CF7E5' },
                { label: 'Crecimiento', color: '#23F8F7' }
              ].map((node, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3">
                  <div 
                    className="w-8 h-8 relative z-10"
                    style={{ backgroundColor: node.color }}
                  />
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-base font-black text-[#1E1E1E]">{idx + 1}</span>
                    <span className="text-xs font-medium text-[rgba(30,30,30,0.6)] text-center max-w-20">
                      {node.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CASES - 2x2 Grid */}
      <section id="casos" className="py-32 px-24">
        <div className="max-w-7xl mx-auto space-y-12">
          <h2 className="text-3xl font-bold text-[#1E1E1E]">
            Casos de éxito
          </h2>

          <div className="grid grid-cols-2 gap-12">
            {[
              { 
                title: 'Estrategia de Crecimiento 360°', 
                category: 'PERFORMANCE & GROWTH',
                tags: ['Analytics', 'Strategy', 'ROI'],
                color: '#F6E342',
                gradient: 'from-yellow-500/20 to-yellow-600/5'
              },
              { 
                title: 'Rediseño Completo de Marca', 
                category: 'BRAND & EXPERIENCE DESIGN',
                tags: ['Branding', 'UX', 'Design System'],
                color: '#75EFB1',
                gradient: 'from-green-400/20 to-green-500/5'
              },
              { 
                title: 'Plataforma Digital con IA', 
                category: 'DIGITAL PRODUCTS & AI',
                tags: ['Development', 'AI', 'Integration'],
                color: '#23F8F7',
                gradient: 'from-cyan-400/20 to-cyan-500/5'
              },
              { 
                title: 'Transformación Digital B2B', 
                category: 'PERFORMANCE & GROWTH',
                tags: ['Digital', 'B2B', 'Automation'],
                color: '#F6E342',
                gradient: 'from-yellow-500/20 to-yellow-600/5'
              }
            ].map((caso, idx) => (
              <div key={idx} className="relative aspect-[4/3] overflow-hidden group cursor-pointer">
                {/* Background gradient placeholder */}
                <div className={`absolute inset-0 bg-gradient-to-br ${caso.gradient}`} />

                {/* Overlay block - bottom left */}
                <div 
                  className="absolute bottom-0 left-0 w-4/5 p-8 space-y-4 transition-transform group-hover:translate-y-0 translate-y-2"
                  style={{ backgroundColor: caso.color }}
                >
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-[#1E1E1E] tracking-wider uppercase opacity-80">
                      {caso.category}
                    </p>
                    <h3 className="text-xl font-bold text-[#1E1E1E] leading-tight">
                      {caso.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {caso.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx}
                        className="px-3 py-1 text-xs font-medium text-[#1E1E1E] bg-[rgba(30,30,30,0.1)] border border-[rgba(30,30,30,0.2)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PROOF - Charcoal background */}
      <section className="py-24 px-24 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Metrics */}
          <div className="grid grid-cols-3 gap-24 text-center">
            <div className="space-y-3">
              <p className="text-6xl font-black text-[#F1F1F1]">127%</p>
              <p className="text-sm font-medium text-[rgba(241,241,241,0.6)]">Crecimiento promedio</p>
            </div>
            <div className="space-y-3">
              <p className="text-6xl font-black text-[#F1F1F1]">$2.4M</p>
              <p className="text-sm font-medium text-[rgba(241,241,241,0.6)]">Revenue generado</p>
            </div>
            <div className="space-y-3">
              <p className="text-6xl font-black text-[#F1F1F1]">45</p>
              <p className="text-sm font-medium text-[rgba(241,241,241,0.6)]">NPS Score</p>
            </div>
          </div>

          {/* Gradient bar */}
          <div 
            className="h-2 w-full max-w-4xl mx-auto"
            style={{ background: 'linear-gradient(90deg, #F6E342 0%, #75EFB1 50%, #23F8F7 100%)' }}
          />
        </div>
      </section>

      {/* SECTION 6: CTA FINAL + FORM */}
      <section id="contacto" className="py-32 px-24">
        <div className="max-w-7xl mx-auto flex items-start justify-between gap-24">
          {/* Form */}
          <div className="max-w-xl space-y-12">
            <h2 className="text-5xl font-black text-[#1E1E1E] leading-tight">
              Hazlo tuyo,<br />
              hazlo <span className="italic">Proppia</span>
            </h2>

            <form className="space-y-6">
              {/* Nombre empresa */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1E1E1E]">
                  Nombre de la empresa
                </label>
                <input
                  type="text"
                  placeholder="Ej: Proppia Labs"
                  className="w-full px-4 py-4 border border-[rgba(30,30,30,0.24)] rounded-lg text-base focus:outline-none focus:border-[#23F8F7] focus:border-2"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1E1E1E]">
                  Email de contacto
                </label>
                <input
                  type="email"
                  placeholder="contacto@empresa.com"
                  className="w-full px-4 py-4 border border-[rgba(30,30,30,0.24)] rounded-lg text-base focus:outline-none focus:border-[#23F8F7] focus:border-2"
                />
              </div>

              {/* Reto principal */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#1E1E1E]">
                  Reto principal
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe en 2-3 líneas tu reto principal..."
                  className="w-full px-4 py-4 border border-[rgba(30,30,30,0.24)] rounded-lg text-base resize-none focus:outline-none focus:border-[#23F8F7] focus:border-2"
                />
              </div>

              {/* Submit */}
              <button 
                type="submit"
                className="w-full bg-[#1E1E1E] text-[#F1F1F1] px-12 py-5 text-base font-medium rounded-lg hover:shadow-[0_0_0_2px_rgba(117,239,177,1)] transition-all"
              >
                Solicitar análisis estratégico
              </button>
            </form>
          </div>

          {/* Decorative squares - asymmetric */}
          <div className="relative flex-shrink-0">
            <div className="w-32 h-32 bg-[#75EFB1]" />
            <div className="w-20 h-20 bg-[#F6E342] absolute -bottom-8 -left-8" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-24 border-t border-[rgba(30,30,30,0.12)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ProppiaIsotipo className="h-8 text-[#1E1E1E]" />
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#F6E342]" />
              <div className="w-2 h-2 bg-[#75EFB1]" />
              <div className="w-2 h-2 bg-[#23F8F7]" />
            </div>
          </div>
          <p className="text-sm text-[rgba(30,30,30,0.6)]">
            © 2024 Proppia. De la idea al resultado.
          </p>
        </div>
      </footer>
    </div>
  );
}
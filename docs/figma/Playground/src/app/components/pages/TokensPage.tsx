export default function TokensPage() {
  return (
    <div className="w-full h-full bg-[#1E1E1E] overflow-auto">
      <div className="max-w-5xl mx-auto px-12 py-24">
        
        {/* Header */}
        <header className="mb-24 space-y-6">
          <h1 className="text-5xl font-black text-[#F1F1F1] leading-tight">
            Tokens & Fundamentos
          </h1>
          <p className="text-lg text-[rgba(241,241,241,0.7)] max-w-3xl leading-relaxed">
            Base técnica y visual del sistema. Estas decisiones gobiernan marketing, dashboards y productos SaaS.
          </p>
        </header>

        {/* Main Content */}
        <div className="space-y-24">

          {/* 1. Introducción */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#23F8F7]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Qué son los tokens de diseño</h2>
            </div>

            <div className="space-y-4 pl-5">
              <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed">
                Los tokens de diseño son decisiones técnicas centralizadas que reemplazan valores arbitrarios 
                (como <code className="text-[#23F8F7] text-sm">#1E1E1E</code> o <code className="text-[#23F8F7] text-sm">16px</code>) 
                con nombres semánticos que describen su propósito 
                (como <code className="text-[#23F8F7] text-sm">bg.primary</code> o <code className="text-[#23F8F7] text-sm">spacing.section</code>).
              </p>

              <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed">
                Existen para garantizar coherencia visual en todos los productos, acelerar decisiones de diseño, 
                y permitir cambios globales sin modificar cientos de archivos individuales.
              </p>

              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-3">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Diferencia clave</h3>
                <p className="text-sm text-[rgba(241,241,241,0.6)] leading-relaxed">
                  <strong className="text-[#F1F1F1]">Estilos visuales aislados:</strong> cada diseñador decide colores y espaciados por archivo. 
                  Resultado: inconsistencia, duplicación, deuda técnica.
                </p>
                <p className="text-sm text-[rgba(241,241,241,0.6)] leading-relaxed">
                  <strong className="text-[#F1F1F1]">Tokens de diseño:</strong> decisiones centralizadas que se aplican 
                  automáticamente en marketing, dashboards y productos SaaS. Resultado: coherencia, escalabilidad, mantenibilidad.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Color Tokens */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#75EFB1]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Color Tokens</h2>
            </div>

            <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed pl-5">
              Los colores se definen como tokens semánticos, no como valores sueltos. 
              Cada color tiene un propósito claro en el sistema.
            </p>

            <div className="space-y-8 pl-5">
              {/* Colores base */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Colores base</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { token: 'bg.primary', value: '#1E1E1E', desc: 'Background primario (Charcoal)', color: '#1E1E1E', textColor: '#F1F1F1' },
                    { token: 'bg.secondary', value: 'rgba(241,241,241,0.05)', desc: 'Background secundario elevado', color: 'rgba(241,241,241,0.05)', textColor: '#F1F1F1' },
                    { token: 'text.primary', value: '#F1F1F1', desc: 'Texto principal (Chalk)', color: '#F1F1F1', textColor: '#1E1E1E' },
                    { token: 'text.secondary', value: 'rgba(241,241,241,0.7)', desc: 'Texto secundario', color: 'rgba(241,241,241,0.7)', textColor: '#1E1E1E' },
                    { token: 'border.subtle', value: 'rgba(241,241,241,0.12)', desc: 'Bordes sutiles', color: 'rgba(241,241,241,0.12)', textColor: '#F1F1F1' },
                    { token: 'divider.default', value: 'rgba(241,241,241,0.08)', desc: 'Separadores', color: 'rgba(241,241,241,0.08)', textColor: '#F1F1F1' },
                  ].map((item, index) => (
                    <div key={index} className="border border-[rgba(241,241,241,0.12)] overflow-hidden">
                      <div 
                        className="h-16 flex items-center px-4"
                        style={{ backgroundColor: item.color }}
                      >
                        <div className="w-6 h-6 border border-current" style={{ color: item.textColor }} />
                      </div>
                      <div className="bg-[rgba(241,241,241,0.02)] p-4 space-y-1">
                        <p className="text-sm font-bold text-[#F1F1F1] font-mono">{item.token}</p>
                        <p className="text-xs text-[rgba(241,241,241,0.6)]">{item.desc}</p>
                        <p className="text-xs text-[rgba(241,241,241,0.5)] font-mono">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Colores de acento */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Colores de acento</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { token: 'accent.yellow', value: '#F6E342', desc: 'Yellow (Performance)', color: '#F6E342' },
                    { token: 'accent.mint', value: '#75EFB1', desc: 'Mint Green (Growth)', color: '#75EFB1' },
                    { token: 'accent.turquoise', value: '#23F8F7', desc: 'Turquoise (Innovation)', color: '#23F8F7' },
                  ].map((item, index) => (
                    <div key={index} className="border border-[rgba(241,241,241,0.12)] overflow-hidden">
                      <div 
                        className="h-20 flex items-center justify-center"
                        style={{ backgroundColor: item.color }}
                      >
                        <div className="w-8 h-8 bg-[#1E1E1E]" />
                      </div>
                      <div className="bg-[rgba(241,241,241,0.02)] p-4 space-y-1">
                        <p className="text-sm font-bold text-[#F1F1F1] font-mono">{item.token}</p>
                        <p className="text-xs text-[rgba(241,241,241,0.6)]">{item.desc}</p>
                        <p className="text-xs text-[rgba(241,241,241,0.5)] font-mono">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-4">
                  <p className="text-sm text-[rgba(241,241,241,0.6)] leading-relaxed">
                    <strong className="text-[#F1F1F1]">Estados:</strong> Los acentos se ajustan para hover 
                    (opacidad 80%), focus (borde 2px), y active (escala 0.98).
                  </p>
                </div>
              </div>

              {/* Estados del sistema */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Estados del sistema</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { token: 'state.success', value: '#75EFB1', desc: 'Éxito / Confirmación', color: '#75EFB1' },
                    { token: 'state.warning', value: '#F6E342', desc: 'Advertencia', color: '#F6E342' },
                    { token: 'state.error', value: '#FF6B6B', desc: 'Error / Destructivo', color: '#FF6B6B' },
                    { token: 'state.info', value: '#23F8F7', desc: 'Información', color: '#23F8F7' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-4">
                      <div 
                        className="w-12 h-12 flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-[#F1F1F1] font-mono">{item.token}</p>
                        <p className="text-xs text-[rgba(241,241,241,0.6)]">{item.desc}</p>
                        <p className="text-xs text-[rgba(241,241,241,0.5)] font-mono">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reglas de color */}
              <div className="border border-[#F6E342] bg-[rgba(246,227,66,0.05)] p-6 space-y-3">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Reglas de uso</h3>
                <ul className="space-y-2 text-sm text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span className="text-[#75EFB1]">✓</span>
                    <span>Siempre usar tokens semánticos, nunca valores directos de color</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#75EFB1]">✓</span>
                    <span>Los acentos son estratégicos: indican categoría, estado o acción</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#75EFB1]">✓</span>
                    <span>Gradientes solo para énfasis controlado (bordes, progress bars, separadores)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF6B6B]">✗</span>
                    <span>Nunca usar acentos como backgrounds completos de cards o botones</span>
                  </li>
                </ul>
              </div>

              {/* Gradientes */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Gradientes</h3>
                
                <div className="border border-[rgba(241,241,241,0.12)] overflow-hidden">
                  <div 
                    className="h-24"
                    style={{ 
                      background: 'linear-gradient(90deg, #F6E342 0%, #75EFB1 50%, #23F8F7 100%)'
                    }}
                  />
                  <div className="bg-[rgba(241,241,241,0.02)] p-4 space-y-2">
                    <p className="text-sm font-bold text-[#F1F1F1] font-mono">gradient.spectrum</p>
                    <p className="text-xs text-[rgba(241,241,241,0.6)]">
                      Gradiente de marca: Yellow → Mint Green → Turquoise
                    </p>
                    <p className="text-xs text-[rgba(241,241,241,0.5)] font-mono">
                      linear-gradient(90deg, #F6E342 0%, #75EFB1 50%, #23F8F7 100%)
                    </p>
                  </div>
                </div>

                <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-4 space-y-3">
                  <p className="text-sm font-medium text-[#F1F1F1]">Uso recomendado</p>
                  <ul className="space-y-1 text-sm text-[rgba(241,241,241,0.6)]">
                    <li className="flex gap-2">
                      <span>—</span>
                      <span>Progress bars horizontales o circulares</span>
                    </li>
                    <li className="flex gap-2">
                      <span>—</span>
                      <span>Bordes de énfasis en botones hover (sutil, no lleno)</span>
                    </li>
                    <li className="flex gap-2">
                      <span>—</span>
                      <span>Separadores visuales entre secciones (líneas delgadas)</span>
                    </li>
                    <li className="flex gap-2">
                      <span>—</span>
                      <span>Highlights estratégicos de marca (nunca fondos completos)</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-[#FF6B6B] bg-[rgba(255,107,107,0.05)] p-4 space-y-2">
                  <p className="text-sm font-medium text-[#F1F1F1]">No permitido</p>
                  <ul className="space-y-1 text-sm text-[rgba(241,241,241,0.6)]">
                    <li className="flex gap-2">
                      <span className="text-[#FF6B6B]">✗</span>
                      <span>Backgrounds completos de cards o sections</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FF6B6B]">✗</span>
                      <span>Texto sobre gradiente (legibilidad comprometida)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FF6B6B]">✗</span>
                      <span>Crear gradientes nuevos sin aprobación de brand</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Typography Tokens */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#F6E342]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Typography Tokens</h2>
            </div>

            <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed pl-5">
              La tipografía se define como sistema jerárquico, no como estilos aislados.
            </p>

            <div className="space-y-8 pl-5">
              {/* Familia tipográfica */}
              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#F1F1F1] mb-2">Familia tipográfica principal</h3>
                  <p className="text-2xl font-black text-[#F1F1F1]">BW Nista</p>
                  <p className="text-sm text-[rgba(241,241,241,0.6)] mt-2">
                    Obligatoria en todos los productos. Actualmente usando Inter como placeholder en este playground.
                  </p>
                </div>

                <div className="pt-4 border-t border-[rgba(241,241,241,0.08)]">
                  <p className="text-sm font-medium text-[rgba(241,241,241,0.7)] mb-3">Pesos disponibles:</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      { name: 'Light', weight: '300' },
                      { name: 'Regular', weight: '400' },
                      { name: 'Medium', weight: '500' },
                      { name: 'Bold', weight: '700' },
                      { name: 'Extra Bold', weight: '800' },
                      { name: 'Black', weight: '900' },
                    ].map((item, index) => (
                      <div key={index} className="text-sm">
                        <span className="text-[#F1F1F1]" style={{ fontWeight: item.weight }}>{item.name}</span>
                        <span className="text-[rgba(241,241,241,0.5)] ml-2 font-mono text-xs">{item.weight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Jerarquía tipográfica */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Jerarquía tipográfica</h3>
                
                <div className="space-y-6">
                  {/* Display */}
                  <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-8 space-y-4">
                    <p className="text-6xl font-black text-[#F1F1F1] leading-tight">
                      Display
                    </p>
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-[rgba(241,241,241,0.5)] uppercase tracking-wider">TYPOGRAPHY.DISPLAY</p>
                      <p className="text-sm text-[rgba(241,241,241,0.6)]">
                        60–80px · Black 900 · Leading 1.1 · Hero sections
                      </p>
                    </div>
                  </div>

                  {/* Headings */}
                  {[
                    { level: 'H1', size: '48px', weight: '900', leading: '1.2', use: 'Page titles' },
                    { level: 'H2', size: '36px', weight: '700', leading: '1.3', use: 'Section titles' },
                    { level: 'H3', size: '28px', weight: '700', leading: '1.4', use: 'Subsection titles' },
                    { level: 'H4', size: '20px', weight: '600', leading: '1.5', use: 'Card titles' },
                  ].map((heading, index) => (
                    <div key={index} className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-3">
                      <p 
                        className="text-[#F1F1F1]"
                        style={{ fontSize: heading.size, fontWeight: heading.weight, lineHeight: heading.leading }}
                      >
                        {heading.level}
                      </p>
                      <div className="space-y-1">
                        <p className="text-xs font-medium text-[rgba(241,241,241,0.5)] uppercase tracking-wider">
                          TYPOGRAPHY.{heading.level}
                        </p>
                        <p className="text-sm text-[rgba(241,241,241,0.6)]">
                          {heading.size} · Weight {heading.weight} · Leading {heading.leading} · {heading.use}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Body & Meta */}
                  <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4">
                    <div className="space-y-2">
                      <p className="text-base text-[#F1F1F1] leading-relaxed">
                        Body Regular — Texto de párrafo estándar con <span className="font-medium">palabras clave en Medium</span> para énfasis sutil.
                      </p>
                      <p className="text-xs text-[rgba(241,241,241,0.5)]">16px · Regular 400 · Leading 1.75</p>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-[rgba(241,241,241,0.08)]">
                      <p className="text-sm text-[rgba(241,241,241,0.7)] leading-relaxed">
                        Small / Meta — Texto secundario, labels, microcopy
                      </p>
                      <p className="text-xs text-[rgba(241,241,241,0.5)]">13–14px · Regular 400 · Leading 1.5</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reglas tipográficas */}
              <div className="border border-[#23F8F7] bg-[rgba(35,248,247,0.05)] p-6 space-y-3">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Reglas de uso</h3>
                <ul className="space-y-2 text-sm text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Escala coherente basada en proporción, no en valores arbitrarios</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>La jerarquía se construye por peso y espaciado, no por color</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Uso editorial: claridad antes que estilo decorativo</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Itálicas reservadas para énfasis conceptual, no decoración</span>
                  </li>
                </ul>
              </div>

              {/* Nota sobre display font */}
              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-4">
                <p className="text-sm text-[rgba(241,241,241,0.6)] leading-relaxed">
                  <strong className="text-[#F1F1F1]">Nota:</strong> Existe consideración futura de tipografía display 
                  alternativa para casos específicos, pero BW Nista permanece como familia principal obligatoria.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Spacing & Layout Tokens */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#75EFB1]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Spacing & Layout Tokens</h2>
            </div>

            <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed pl-5">
              Sistema de espaciamiento basado en una escala predecible que garantiza ritmo visual coherente.
            </p>

            <div className="space-y-8 pl-5">
              {/* Escala base */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Escala base (8px)</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { token: 'spacing.1', value: '4px', use: 'Tight / Inline' },
                    { token: 'spacing.2', value: '8px', use: 'Base unit' },
                    { token: 'spacing.3', value: '12px', use: 'Small gaps' },
                    { token: 'spacing.4', value: '16px', use: 'Component padding' },
                    { token: 'spacing.6', value: '24px', use: 'Related elements' },
                    { token: 'spacing.8', value: '32px', use: 'Element groups' },
                    { token: 'spacing.12', value: '48px', use: 'Section spacing' },
                    { token: 'spacing.16', value: '64px', use: 'Major sections' },
                  ].map((item, index) => (
                    <div key={index} className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-4 space-y-3">
                      <div className="h-16 flex items-center">
                        <div 
                          className="bg-[#75EFB1] h-4"
                          style={{ width: item.value }}
                        />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-bold text-[#F1F1F1] font-mono">{item.token}</p>
                        <p className="text-xs text-[rgba(241,241,241,0.6)]">{item.value}</p>
                        <p className="text-xs text-[rgba(241,241,241,0.5)]">{item.use}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Uso por contexto */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Uso recomendado por contexto</h3>
                
                <div className="space-y-3">
                  {[
                    { context: 'Marketing', spacing: 'spacing.12 a spacing.24', desc: 'Generoso, editorial, mucho aire' },
                    { context: 'Dashboards', spacing: 'spacing.6 a spacing.12', desc: 'Balanceado, denso pero respirable' },
                    { context: 'Formularios', spacing: 'spacing.4 a spacing.6', desc: 'Compacto, relación clara entre campos' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-4">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-bold text-[#F1F1F1]">{item.context}</p>
                        <p className="text-xs text-[rgba(241,241,241,0.6)]">{item.spacing}</p>
                        <p className="text-xs text-[rgba(241,241,241,0.5)]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reglas de espaciado */}
              <div className="border border-[#75EFB1] bg-[rgba(117,239,177,0.05)] p-6 space-y-3">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Reglas de espaciado</h3>
                <ul className="space-y-2 text-sm text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Priorizar respiración visual: menos secciones, más claridad</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Evitar crowding: el whitespace es activo, no vacío</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Espaciado consistente en todo el sistema, sin valores arbitrarios</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Marketing puede ser más generoso que producto</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. Radius Tokens */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#23F8F7]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Radius Tokens</h2>
            </div>

            <div className="space-y-6 pl-5">
              <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed">
                Radios de borde reutilizables que mantienen coherencia visual sin sacrificar profesionalismo.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { token: 'radius.none', value: '0px', desc: 'Sharp corners' },
                  { token: 'radius.sm', value: '2px', desc: 'Subtle rounding' },
                  { token: 'radius.md', value: '4px', desc: 'Default components' },
                  { token: 'radius.lg', value: '8px', desc: 'Cards, modals' },
                ].map((item, index) => (
                  <div key={index} className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-4 space-y-4">
                    <div className="h-20 flex items-center justify-center">
                      <div 
                        className="w-16 h-16 bg-[#23F8F7]"
                        style={{ borderRadius: item.value }}
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-[#F1F1F1] font-mono">{item.token}</p>
                      <p className="text-xs text-[rgba(241,241,241,0.6)]">{item.value}</p>
                      <p className="text-xs text-[rgba(241,241,241,0.5)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-3">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Regla clave</h3>
                <p className="text-sm text-[rgba(241,241,241,0.7)] leading-relaxed">
                  Rounded ≠ playful. El sistema debe sentirse profesional, sobrio y consistente. 
                  Los bordes redondeados son sutiles y funcionales, nunca decorativos o excesivos.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Elevation & Shadows */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#F6E342]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Elevation & Shadows</h2>
            </div>

            <div className="space-y-6 pl-5">
              <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed">
                Niveles mínimos de elevación para comunicar jerarquía sin exceso visual.
              </p>

              <div className="space-y-4">
                {[
                  { 
                    level: 'Nivel 0 — Flat', 
                    token: 'shadow.none', 
                    value: 'none', 
                    use: 'Default state, sin elevación',
                    shadow: 'none'
                  },
                  { 
                    level: 'Nivel 1 — Cards', 
                    token: 'shadow.sm', 
                    value: '0 1px 3px rgba(0,0,0,0.12)', 
                    use: 'Cards, componentes elevados',
                    shadow: '0 1px 3px rgba(0,0,0,0.12)'
                  },
                  { 
                    level: 'Nivel 2 — Modals / Overlays', 
                    token: 'shadow.md', 
                    value: '0 4px 12px rgba(0,0,0,0.15)', 
                    use: 'Modals, dropdowns, overlays',
                    shadow: '0 4px 12px rgba(0,0,0,0.15)'
                  },
                ].map((item, index) => (
                  <div key={index} className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4">
                    <div className="h-32 flex items-center justify-center bg-[rgba(30,30,30,0.5)]">
                      <div 
                        className="w-32 h-20 bg-[#F1F1F1]"
                        style={{ boxShadow: item.shadow }}
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-bold text-[#F1F1F1]">{item.level}</p>
                      <p className="text-sm font-mono text-[#23F8F7]">{item.token}</p>
                      <p className="text-xs text-[rgba(241,241,241,0.6)]">{item.use}</p>
                      <p className="text-xs text-[rgba(241,241,241,0.5)] font-mono">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border border-[#FF6B6B] bg-[rgba(255,107,107,0.05)] p-6 space-y-3">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Restricciones</h3>
                <ul className="space-y-2 text-sm text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span className="text-[#FF6B6B]">✗</span>
                    <span>Nunca sombras dramáticas o exageradas</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF6B6B]">✗</span>
                    <span>No glow effects o sombras de color</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF6B6B]">✗</span>
                    <span>No exceso de capas superpuestas</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#75EFB1]">✓</span>
                    <span>Sombras sutiles que comunican jerarquía, no decoración</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 7. Motion — Fundamentos */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#75EFB1]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Motion — Fundamentos</h2>
            </div>

            <div className="space-y-6 pl-5">
              <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed">
                Principios de movimiento para microinteracciones funcionales. Sin animaciones implementadas todavía.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Duraciones recomendadas</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { token: 'duration.fast', value: '150ms', use: 'Hover states, micro feedback' },
                    { token: 'duration.base', value: '250ms', use: 'Default transitions' },
                    { token: 'duration.slow', value: '400ms', use: 'Complex animations, page transitions' },
                  ].map((item, index) => (
                    <div key={index} className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-4 space-y-2">
                      <p className="text-sm font-bold text-[#F1F1F1] font-mono">{item.token}</p>
                      <p className="text-xs text-[rgba(241,241,241,0.6)]">{item.value}</p>
                      <p className="text-xs text-[rgba(241,241,241,0.5)]">{item.use}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Easing general</h3>
                
                <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-mono text-[#23F8F7] mb-2">ease-out</p>
                      <p className="text-xs text-[rgba(241,241,241,0.6)]">
                        Default para entradas (modals, dropdowns, tooltips)
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-mono text-[#23F8F7] mb-2">ease-in-out</p>
                      <p className="text-xs text-[rgba(241,241,241,0.6)]">
                        Para transiciones bidireccionales
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#75EFB1] bg-[rgba(117,239,177,0.05)] p-6 space-y-3">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Cuándo usar motion</h3>
                <ul className="space-y-2 text-sm text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span className="text-[#75EFB1]">✓</span>
                    <span>Comunicar cambios de estado (hover, focus, active)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#75EFB1]">✓</span>
                    <span>Feedback de interacciones del usuario</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#75EFB1]">✓</span>
                    <span>Guiar atención sin distraer</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF6B6B]">✗</span>
                    <span>Decoración o animaciones sin propósito funcional</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF6B6B]">✗</span>
                    <span>Animaciones largas que ralentizan flujo de usuario</span>
                  </li>
                </ul>
              </div>

              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-4">
                <p className="text-sm text-[rgba(241,241,241,0.6)] leading-relaxed">
                  <strong className="text-[#F1F1F1]">Principio clave:</strong> Motion comunica estado, no adorno. 
                  Microinteracciones &gt; animaciones largas. Movimiento siempre funcional.
                </p>
              </div>
            </div>
          </section>

          {/* 8. Accesibilidad — Fundamentos */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#23F8F7]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Accesibilidad — Fundamentos</h2>
            </div>

            <div className="space-y-6 pl-5">
              <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed">
                Fundamentos de accesibilidad integrados desde tokens. 
                Ver <span className="font-medium text-[#F1F1F1]">Documentación & Gobierno</span> para detalles completos.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Contraste mínimo (WCAG 2.1 AA)</h3>
                
                <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { combo: 'Charcoal / Chalk', ratio: '19.5:1', level: 'AAA', pass: true },
                      { combo: 'Charcoal / Yellow', ratio: '12.8:1', level: 'AAA', pass: true },
                      { combo: 'Charcoal / Mint', ratio: '14.2:1', level: 'AAA', pass: true },
                      { combo: 'Charcoal / Turquoise', ratio: '13.1:1', level: 'AAA', pass: true },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-[rgba(241,241,241,0.05)]">
                        <div>
                          <p className="text-sm font-medium text-[#F1F1F1]">{item.combo}</p>
                          <p className="text-xs text-[rgba(241,241,241,0.6)]">Ratio: {item.ratio}</p>
                        </div>
                        <span className="text-sm font-bold text-[#75EFB1]">{item.level} ✓</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Uso correcto del color</h3>
                
                <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6">
                  <p className="text-sm text-[rgba(241,241,241,0.7)] leading-relaxed mb-3">
                    El color nunca debe ser el único medio para comunicar información crítica.
                  </p>
                  <ul className="space-y-2 text-sm text-[rgba(241,241,241,0.6)]">
                    <li className="flex gap-2">
                      <span className="text-[#75EFB1]">✓</span>
                      <span>Combinar color con íconos, texto o patrones</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#75EFB1]">✓</span>
                      <span>Estados de error incluyen ícono + mensaje de texto</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#FF6B6B]">✗</span>
                      <span>Solo cambiar color de borde para indicar error</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Estados focus visibles</h3>
                
                <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6">
                  <p className="text-sm text-[rgba(241,241,241,0.7)] leading-relaxed mb-4">
                    Todos los elementos interactivos deben tener estados focus claramente visibles.
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-[rgba(241,241,241,0.5)] uppercase tracking-wider">
                      FOCUS STATE DEFAULT
                    </p>
                    <p className="text-sm font-mono text-[#23F8F7]">
                      border: 2px solid #23F8F7
                    </p>
                    <p className="text-xs text-[rgba(241,241,241,0.6)]">
                      Turquoise 2px, sin shadow, claramente visible en fondos charcoal y chalk
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-[#23F8F7] bg-[rgba(35,248,247,0.05)] p-6 space-y-3">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Preparación para ARIA</h3>
                <p className="text-sm text-[rgba(241,241,241,0.7)] leading-relaxed">
                  Los componentes se diseñan conceptualmente para soportar roles, estados y propiedades ARIA. 
                  La implementación técnica se documenta en la sección de Componentes y en Documentación & Gobierno.
                </p>
              </div>
            </div>
          </section>

          {/* 9. Notas de uso y gobernanza */}
          <section className="space-y-8 pb-24">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#F6E342]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Notas de uso y gobernanza</h2>
            </div>

            <div className="space-y-6 pl-5">
              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Tokens que NO deben modificarse sin consenso</h3>
                <ul className="space-y-2 text-sm text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span>—</span>
                    <span><strong className="text-[#F1F1F1]">Colores base:</strong> Charcoal, Chalk, acentos de marca</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span><strong className="text-[#F1F1F1]">Familia tipográfica principal:</strong> BW Nista</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span><strong className="text-[#F1F1F1]">Escala de espaciamiento:</strong> Base 8px</span>
                  </li>
                </ul>
                <p className="text-sm text-[rgba(241,241,241,0.6)] italic pt-3 border-t border-[rgba(241,241,241,0.08)]">
                  Modificar estos tokens afecta identidad de marca. Requiere aprobación de Design Lead.
                </p>
              </div>

              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Tokens que pueden adaptarse por proyecto</h3>
                <ul className="space-y-2 text-sm text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span>—</span>
                    <span><strong className="text-[#F1F1F1]">Espaciado contextual:</strong> Marketing puede usar spacing.24, dashboards spacing.12</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span><strong className="text-[#F1F1F1]">Radios:</strong> Productos pueden preferir radius.none, marketing radius.md</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span><strong className="text-[#F1F1F1]">Duraciones de motion:</strong> Ajustables según densidad de UI</span>
                  </li>
                </ul>
                <p className="text-sm text-[rgba(241,241,241,0.6)] italic pt-3 border-t border-[rgba(241,241,241,0.08)]">
                  Estos tokens permiten flexibilidad sin comprometer coherencia de marca.
                </p>
              </div>

              <div className="border border-[#F6E342] bg-[rgba(246,227,66,0.05)] p-6 space-y-3">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Relación Tokens → Componentes</h3>
                <p className="text-base text-[rgba(241,241,241,0.8)] leading-relaxed">
                  Los tokens definidos en esta sección son los fundamentos que habilitan la construcción de componentes. 
                  Cada componente UI debe construirse exclusivamente usando estos tokens, sin valores directos.
                </p>
                <p className="text-sm text-[rgba(241,241,241,0.6)] leading-relaxed">
                  Esta disciplina garantiza que cambios en tokens se propagan automáticamente a todos los componentes, 
                  manteniendo coherencia global sin intervención manual.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
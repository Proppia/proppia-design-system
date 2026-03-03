import { ExternalLink, BookOpen } from 'lucide-react';

export default function DocumentationPage() {
  return (
    <div className="w-full h-full bg-[#1E1E1E] overflow-auto">
      <div className="max-w-5xl mx-auto px-12 py-24">
        {/* Header */}
        <header className="mb-24 space-y-6">
          <div className="flex items-center gap-4">
            <BookOpen className="w-12 h-12 text-[#23F8F7]" />
            <h1 className="text-5xl font-black text-[#F1F1F1] leading-tight">
              Documentación & Gobierno
            </h1>
          </div>
          
          <p className="text-lg text-[rgba(241,241,241,0.7)] max-w-3xl leading-relaxed">
            Cómo se usa, gobierna y mantiene el Sistema de Diseño de Proppia en equipos y proyectos.
          </p>
        </header>

        {/* Main Content */}
        <div className="space-y-24">
          {/* Section 1: Herramientas y Conceptos */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#23F8F7]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Herramientas y conceptos</h2>
            </div>

            <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed pl-5">
              Estos recursos externos aseguran que el sistema cumple estándares profesionales de completitud, 
              accesibilidad y escalabilidad.
            </p>

            <div className="space-y-4 pl-5">
              {[
                {
                  name: 'Design System Checklist',
                  url: 'https://www.designsystemchecklist.com/',
                  purpose: 'Asegurar completitud y madurez del sistema de diseño.',
                  description: 'Framework para evaluar cobertura de componentes, calidad de documentación y preparación organizacional. Se usa para validar que el sistema está listo para producción y puede escalar.',
                },
                {
                  name: 'Adobe Color – Analizador de Contraste',
                  url: 'https://color.adobe.com/es/create/color-contrast-analyzer',
                  purpose: 'Validar contraste texto/fondo para accesibilidad.',
                  description: 'Herramienta para verificar ratios de contraste entre texto y fondos, asegurando cumplimiento WCAG. Todas las combinaciones de color en este sistema deben pasar estándares AA o AAA.',
                },
                {
                  name: 'WCAG 2.1 AA',
                  url: 'https://www.w3.org/WAI/WCAG2AA-Conformance',
                  purpose: 'Estándar de cumplimiento de accesibilidad (nivel AA).',
                  description: 'Estándar base de accesibilidad para todos los componentes UI. Requiere ratios mínimos de contraste, navegación por teclado, estados de foco y HTML semántico. El nivel AA no es negociable.',
                },
                {
                  name: 'ARIA Authoring Practices',
                  url: 'https://www.w3.org/WAI/ARIA/apg/',
                  purpose: 'Semántica de accesibilidad para componentes interactivos.',
                  description: 'Guía oficial para implementar patrones de interacción accesibles. Define roles, estados y propiedades ARIA correctos para componentes complejos como modales, tabs y menús.',
                },
              ].map((tool, index) => (
                <a
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 hover:border-[rgba(241,241,241,0.2)] hover:bg-[rgba(241,241,241,0.04)] transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-[#F1F1F1] mb-2">{tool.name}</h3>
                        <p className="text-sm text-[#23F8F7] font-medium mb-3">{tool.purpose}</p>
                        <p className="text-sm text-[rgba(241,241,241,0.6)] leading-relaxed">{tool.description}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[rgba(241,241,241,0.4)] group-hover:text-[#23F8F7] transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Section 2: Atomic Design */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#75EFB1]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Metodología Atomic Design</h2>
            </div>

            <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed pl-5">
              Proppia organiza elementos de UI usando principios de Atomic Design. Esto crea una jerarquía clara 
              desde elementos fundacionales hasta páginas completas, garantizando consistencia y reusabilidad.
            </p>

            <div className="space-y-6 pl-5">
              {[
                {
                  level: 'Átomos',
                  color: '#F6E342',
                  description: 'Los elementos fundacionales más pequeños. No se pueden descomponer más.',
                  examples: 'Colores, tokens de tipografía, unidades de espaciado, íconos, logos',
                  source: 'Solo del Sistema de Diseño',
                  projectRule: 'Los proyectos NO pueden crear átomos personalizados. Todos los átomos deben venir del Sistema de Diseño.',
                },
                {
                  level: 'Moléculas',
                  color: '#75EFB1',
                  description: 'Componentes UI simples compuestos de múltiples átomos.',
                  examples: 'Botones, campos de entrada, selectores, tabs, badges, items de lista',
                  source: 'El Sistema de Diseño provee componentes base',
                  projectRule: 'Los proyectos pueden extender o componer moléculas para casos específicos.',
                },
                {
                  level: 'Organismos',
                  color: '#23F8F7',
                  description: 'Componentes complejos compuestos de moléculas y átomos.',
                  examples: 'Barras de navegación, headers, footers, cards, tablas, formularios, modales',
                  source: 'El Sistema de Diseño provee patrones comunes',
                  projectRule: 'Los proyectos pueden crear organismos personalizados siguiendo guías del sistema.',
                },
                {
                  level: 'Plantillas',
                  color: 'rgba(241,241,241,0.5)',
                  description: 'Estructuras a nivel de página sin contenido real. Blueprints de layout.',
                  examples: 'Layout de dashboard, grid de landing page, template de case study',
                  source: 'Específico de proyecto',
                  projectRule: 'Las plantillas se crean por proyecto pero deben usar organismos del sistema.',
                },
                {
                  level: 'Páginas',
                  color: 'rgba(241,241,241,0.3)',
                  description: 'Implementaciones reales con contenido y contexto actual.',
                  examples: 'Homepage, dashboard de producto, case study de cliente',
                  source: 'Específico de proyecto',
                  projectRule: 'Las páginas son únicas por proyecto y usan plantillas + datos reales.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4"
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-3 h-3 flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <h3 className="text-xl font-bold text-[#F1F1F1]">{item.level}</h3>
                  </div>
                  
                  <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-[rgba(241,241,241,0.08)]">
                    <div>
                      <p className="text-xs font-medium text-[rgba(241,241,241,0.5)] mb-2">EJEMPLOS</p>
                      <p className="text-sm text-[rgba(241,241,241,0.6)]">{item.examples}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[rgba(241,241,241,0.5)] mb-2">FUENTE</p>
                      <p className="text-sm text-[rgba(241,241,241,0.6)]">{item.source}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[rgba(241,241,241,0.08)]">
                    <p className="text-xs font-medium text-[rgba(241,241,241,0.5)] mb-2">REGLA DE PROYECTO</p>
                    <p className="text-sm text-[rgba(241,241,241,0.7)] font-medium">{item.projectRule}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-[#F6E342] bg-[rgba(246,227,66,0.05)] p-6 pl-5 space-y-3">
              <h3 className="text-lg font-bold text-[#F1F1F1]">Regla crítica</h3>
              <p className="text-base text-[rgba(241,241,241,0.8)] leading-relaxed">
                <strong>Los átomos SOLO provienen del Sistema de Diseño.</strong> Los proyectos NO pueden crear colores, 
                tokens de tipografía o unidades de espaciado personalizados. Esto garantiza coherencia de marca en todos los productos de Proppia.
              </p>
              <p className="text-sm text-[rgba(241,241,241,0.6)] leading-relaxed">
                Las moléculas y organismos pueden crearse a nivel de proyecto, pero deben usar exclusivamente átomos del sistema. 
                Las plantillas y páginas son siempre implementaciones específicas de proyecto.
              </p>
            </div>
          </section>

          {/* Section 3: Política de Uso */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#F6E342]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Política de uso del sistema</h2>
            </div>

            <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed pl-5">
              Guías claras sobre qué proyectos deben usar el sistema de diseño y cuáles pueden omitirlo inicialmente.
            </p>

            <div className="space-y-6 pl-5">
              {/* Deben usar */}
              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#75EFB1] flex items-center justify-center text-[#1E1E1E] text-xs font-bold">
                    ✓
                  </div>
                  <h3 className="text-lg font-bold text-[#F1F1F1]">Proyectos que DEBEN usar el Sistema de Diseño</h3>
                </div>

                <ul className="space-y-3 text-base text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-3">
                    <span className="text-[#75EFB1] flex-shrink-0">•</span>
                    <div>
                      <strong className="text-[#F1F1F1]">Productos digitales client-facing</strong>
                      <p className="text-sm text-[rgba(241,241,241,0.6)] mt-1">
                        Cualquier producto entregado a clientes o que represente la marca Proppia externamente.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#75EFB1] flex-shrink-0">•</span>
                    <div>
                      <strong className="text-[#F1F1F1]">Sitios web y landing pages de marketing</strong>
                      <p className="text-sm text-[rgba(241,241,241,0.6)] mt-1">
                        Todos los materiales de marketing públicos deben mantener coherencia de marca.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#75EFB1] flex-shrink-0">•</span>
                    <div>
                      <strong className="text-[#F1F1F1]">Aplicaciones SaaS en producción</strong>
                      <p className="text-sm text-[rgba(241,241,241,0.6)] mt-1">
                        Cualquier producto de software en producción activa sirviendo usuarios reales.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#75EFB1] flex-shrink-0">•</span>
                    <div>
                      <strong className="text-[#F1F1F1]">Case studies y portfolio</strong>
                      <p className="text-sm text-[rgba(241,241,241,0.6)] mt-1">
                        Trabajo mostrado a clientes potenciales debe demostrar rigor del sistema de diseño.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Pueden omitir */}
              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border border-[rgba(241,241,241,0.3)] flex items-center justify-center text-[rgba(241,241,241,0.6)] text-xs font-bold">
                    ~
                  </div>
                  <h3 className="text-lg font-bold text-[#F1F1F1]">Proyectos que PUEDEN omitir inicialmente</h3>
                </div>

                <ul className="space-y-3 text-base text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-3">
                    <span className="text-[rgba(241,241,241,0.4)] flex-shrink-0">•</span>
                    <div>
                      <strong className="text-[#F1F1F1]">Prototipos internos y MVPs</strong>
                      <p className="text-sm text-[rgba(241,241,241,0.6)] mt-1">
                        Herramientas internas en etapa temprana pueden priorizar velocidad sobre cumplimiento del sistema inicialmente.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[rgba(241,241,241,0.4)] flex-shrink-0">•</span>
                    <div>
                      <strong className="text-[#F1F1F1]">Trabajo conceptual experimental</strong>
                      <p className="text-sm text-[rgba(241,241,241,0.6)] mt-1">
                        Exploraciones de diseño probando nuevas direcciones pueden desviarse temporalmente.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[rgba(241,241,241,0.4)] flex-shrink-0">•</span>
                    <div>
                      <strong className="text-[#F1F1F1]">Dashboards internos temporales</strong>
                      <p className="text-sm text-[rgba(241,241,241,0.6)] mt-1">
                        Herramientas de corto plazo con alcance limitado pueden usar estilos simplificados.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="pt-4 border-t border-[rgba(241,241,241,0.08)]">
                  <p className="text-sm text-[rgba(241,241,241,0.6)] italic">
                    Nota: Estos proyectos deben migrar al sistema de diseño antes de producción o presentación a clientes.
                  </p>
                </div>
              </div>
            </div>

            {/* Por qué importa la consistencia */}
            <div className="border border-[#23F8F7] bg-[rgba(35,248,247,0.05)] p-6 pl-5 space-y-3">
              <h3 className="text-lg font-bold text-[#F1F1F1]">Por qué importa la consistencia para Proppia</h3>
              <p className="text-base text-[rgba(241,241,241,0.8)] leading-relaxed">
                Proppia se posiciona como partner estratégico B2B de alto valor en diseño, growth y tecnología. 
                Inconsistencia visual señala falta de rigor, daña credibilidad y socava la confianza que clientes 
                depositan en nuestras capacidades de ejecución.
              </p>
              <p className="text-base text-[rgba(241,241,241,0.8)] leading-relaxed">
                Un sistema de diseño unificado garantiza que cada punto de contacto—desde sitio de marketing hasta producto entregado—
                refuerza la promesa de marca de Proppia: <strong>trabajo intencional, estratégico y listo para producción.</strong>
              </p>
            </div>
          </section>

          {/* Section 4: Versionado */}
          <section className="space-y-8 pb-24">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[rgba(241,241,241,0.3)]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Versionado</h2>
            </div>

            <div className="pl-5 space-y-4">
              <p className="text-base text-[rgba(241,241,241,0.5)] leading-relaxed italic">
                Estrategia de control de versiones y documentación de releases por definir.
              </p>

              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4">
                <p className="text-sm text-[rgba(241,241,241,0.6)]">
                  El control de versiones futuro incluirá:
                </p>
                <ul className="space-y-2 text-sm text-[rgba(241,241,241,0.5)]">
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Versionado semántico (MAJOR.MINOR.PATCH)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Changelog rastreando breaking changes y componentes nuevos</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Guías de migración para actualizaciones de versión mayor</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Avisos de deprecación para patrones obsoletos</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Cadencia de releases y proceso de comunicación</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github } from 'lucide-react';

export default function IconographyPage() {
  return (
    <div className="w-full h-full bg-[#1E1E1E] overflow-auto">
      <div className="max-w-5xl mx-auto px-12 py-24">
        
        {/* Header */}
        <header className="mb-16 space-y-4">
          <div className="flex items-center gap-3 text-sm text-[rgba(241,241,241,0.6)]">
            <span>Tokens y Fundamentos</span>
            <span>/</span>
            <span>Átomos / Foundations</span>
            <span>/</span>
            <span className="text-[#F1F1F1]">Iconography</span>
          </div>
          <h1 className="text-5xl font-black text-[#F1F1F1] leading-tight">
            Iconography
          </h1>
          <p className="text-lg text-[rgba(241,241,241,0.7)] max-w-3xl leading-relaxed">
            Librería oficial de íconos del Sistema de Diseño Proppia.
          </p>
        </header>

        {/* Main Content */}
        <div className="space-y-16">

          {/* Stock Icons */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#23F8F7]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Stock Icons</h2>
            </div>

            <div className="space-y-6 pl-5">
              <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed">
                Esta sección documenta la librería oficial de íconos del sistema.
              </p>

              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-12 space-y-4">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Librería base</h3>
                
                <div className="space-y-4">
                  <p className="text-sm text-[rgba(241,241,241,0.6)]">
                    Proppia utiliza <strong className="text-[#F1F1F1]">Lucide React</strong> como librería base de íconos.
                  </p>

                  <div className="bg-[rgba(241,241,241,0.05)] p-4 space-y-2">
                    <p className="text-xs font-medium text-[rgba(241,241,241,0.5)] uppercase tracking-wider">Instalación</p>
                    <pre className="text-sm text-[#75EFB1] font-mono">
npm install lucide-react
                    </pre>
                  </div>

                  <div className="bg-[rgba(241,241,241,0.05)] p-4 space-y-2">
                    <p className="text-xs font-medium text-[rgba(241,241,241,0.5)] uppercase tracking-wider">Uso</p>
                    <pre className="text-sm text-[#75EFB1] font-mono">
{`import { Menu, ChevronDown, User } from 'lucide-react';

<Menu className="w-5 h-5 text-[#F1F1F1]" />`}
                    </pre>
                  </div>

                  <p className="text-sm text-[rgba(241,241,241,0.6)] pt-4">
                    Todos los íconos son SVG inline y usan <code className="text-[#23F8F7] text-xs">currentColor</code>, 
                    heredando el color del contexto padre.
                  </p>
                </div>
              </div>

              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Reglas de uso</h3>
                
                <ul className="space-y-2 text-sm text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Tamaños consistentes: 16px (sm), 20px (md), 24px (lg)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Color controlado vía className, nunca hardcodeado en SVG</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Stroke width consistente (2px default de Lucide)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Usar íconos con significado claro, evitar decorativos</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Social Icons */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#75EFB1]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Social Icons</h2>
            </div>

            <div className="space-y-6 pl-5">
              <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed">
                Íconos de redes sociales disponibles en versiones full color y monocromáticas.
              </p>

              {/* Versiones monocromáticas */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Versiones monocromáticas</h3>
                <p className="text-sm text-[rgba(241,241,241,0.6)]">
                  Para uso en interfaces que requieren consistencia visual con el resto del sistema.
                </p>

                {/* Claro sobre oscuro */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-[#F1F1F1]">Claro sobre oscuro</p>
                  <div className="bg-[#1E1E1E] border border-[rgba(241,241,241,0.12)] p-12">
                    <div className="flex items-center gap-6 flex-wrap">
                      <Facebook className="w-8 h-8 text-[#F1F1F1] hover:text-[#23F8F7] transition-colors cursor-pointer" />
                      <Twitter className="w-8 h-8 text-[#F1F1F1] hover:text-[#23F8F7] transition-colors cursor-pointer" />
                      <Instagram className="w-8 h-8 text-[#F1F1F1] hover:text-[#23F8F7] transition-colors cursor-pointer" />
                      <Linkedin className="w-8 h-8 text-[#F1F1F1] hover:text-[#23F8F7] transition-colors cursor-pointer" />
                      <Youtube className="w-8 h-8 text-[#F1F1F1] hover:text-[#23F8F7] transition-colors cursor-pointer" />
                      <Github className="w-8 h-8 text-[#F1F1F1] hover:text-[#23F8F7] transition-colors cursor-pointer" />
                    </div>
                  </div>
                </div>

                {/* Oscuro sobre claro */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-[#F1F1F1]">Oscuro sobre claro</p>
                  <div className="bg-[#F1F1F1] border border-[rgba(30,30,30,0.12)] p-12">
                    <div className="flex items-center gap-6 flex-wrap">
                      <Facebook className="w-8 h-8 text-[#1E1E1E] hover:text-[#23F8F7] transition-colors cursor-pointer" />
                      <Twitter className="w-8 h-8 text-[#1E1E1E] hover:text-[#23F8F7] transition-colors cursor-pointer" />
                      <Instagram className="w-8 h-8 text-[#1E1E1E] hover:text-[#23F8F7] transition-colors cursor-pointer" />
                      <Linkedin className="w-8 h-8 text-[#1E1E1E] hover:text-[#23F8F7] transition-colors cursor-pointer" />
                      <Youtube className="w-8 h-8 text-[#1E1E1E] hover:text-[#23F8F7] transition-colors cursor-pointer" />
                      <Github className="w-8 h-8 text-[#1E1E1E] hover:text-[#23F8F7] transition-colors cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Versiones full color */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Versiones full color</h3>
                <p className="text-sm text-[rgba(241,241,241,0.6)]">
                  Usar con precaución, solo en contextos donde el brand color de cada red sea necesario.
                </p>

                <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-12">
                  <div className="flex items-center gap-6 flex-wrap">
                    <div className="flex flex-col items-center gap-2">
                      <Facebook className="w-8 h-8" style={{ color: '#1877F2' }} />
                      <span className="text-xs text-[rgba(241,241,241,0.6)]">Facebook</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Twitter className="w-8 h-8" style={{ color: '#1DA1F2' }} />
                      <span className="text-xs text-[rgba(241,241,241,0.6)]">Twitter</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Instagram className="w-8 h-8" style={{ color: '#E4405F' }} />
                      <span className="text-xs text-[rgba(241,241,241,0.6)]">Instagram</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Linkedin className="w-8 h-8" style={{ color: '#0A66C2' }} />
                      <span className="text-xs text-[rgba(241,241,241,0.6)]">LinkedIn</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Youtube className="w-8 h-8" style={{ color: '#FF0000' }} />
                      <span className="text-xs text-[rgba(241,241,241,0.6)]">YouTube</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <Github className="w-8 h-8" style={{ color: '#F1F1F1' }} />
                      <span className="text-xs text-[rgba(241,241,241,0.6)]">GitHub</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[rgba(241,241,241,0.6)]">
                  <strong className="text-[#F1F1F1]">Nota:</strong> Preferir versiones monocromáticas 
                  para mantener consistencia con el Sistema de Diseño Proppia.
                </p>
              </div>
            </div>
          </section>

          {/* Implementación */}
          <section className="space-y-8 pb-24">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#F6E342]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Implementación</h2>
            </div>

            <div className="space-y-6 pl-5">
              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Tamaños recomendados</h3>
                
                <div className="bg-[#1E1E1E] border border-[rgba(241,241,241,0.12)] p-8 flex items-center gap-12">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-4 h-4 bg-[#F1F1F1]" />
                    <span className="text-xs text-[rgba(241,241,241,0.6)]">16px (sm)</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-5 h-5 bg-[#F1F1F1]" />
                    <span className="text-xs text-[rgba(241,241,241,0.6)]">20px (md)</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-6 h-6 bg-[#F1F1F1]" />
                    <span className="text-xs text-[rgba(241,241,241,0.6)]">24px (lg)</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 bg-[#F1F1F1]" />
                    <span className="text-xs text-[rgba(241,241,241,0.6)]">32px (xl)</span>
                  </div>
                </div>

                <div className="bg-[rgba(241,241,241,0.05)] p-4 space-y-2">
                  <p className="text-xs font-medium text-[rgba(241,241,241,0.5)] uppercase tracking-wider">Clases Tailwind</p>
                  <pre className="text-sm text-[#75EFB1] font-mono">
{`w-4 h-4   // 16px
w-5 h-5   // 20px
w-6 h-6   // 24px
w-8 h-8   // 32px`}
                  </pre>
                </div>
              </div>

              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Control de color</h3>
                
                <div className="space-y-3">
                  <p className="text-sm text-[rgba(241,241,241,0.6)]">
                    Los íconos heredan color vía <code className="text-[#23F8F7] text-xs">currentColor</code>. 
                    Controlar usando clases de texto:
                  </p>

                  <div className="bg-[rgba(241,241,241,0.05)] p-4 space-y-2">
                    <p className="text-xs font-medium text-[rgba(241,241,241,0.5)] uppercase tracking-wider">Ejemplos</p>
                    <pre className="text-sm text-[#75EFB1] font-mono">
{`text-[#F1F1F1]    // Chalk (principal claro)
text-[#1E1E1E]    // Charcoal (principal oscuro)
text-[#23F8F7]    // Turquoise (acento)
text-[#75EFB1]    // Mint Green (acento)
text-[#F6E342]    // Yellow (acento)`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="border border-[#23F8F7] bg-[rgba(35,248,247,0.05)] p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Accesibilidad</h3>
                
                <ul className="space-y-2 text-sm text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Asegurar contraste mínimo 4.5:1 con el fondo</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Íconos interactivos deben tener target mínimo de 44x44px</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Incluir aria-label descriptivo en íconos sin texto acompañante</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Estados hover/focus visibles (usar Turquoise #23F8F7)</span>
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

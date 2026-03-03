import { ProppiaLogo } from '@/app/components/brand/ProppiaLogo';

export default function LogotypesPage() {
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
            <span className="text-[#F1F1F1]">Logotypes</span>
          </div>
          <h1 className="text-5xl font-black text-[#F1F1F1] leading-tight">
            Logotypes
          </h1>
          <p className="text-lg text-[rgba(241,241,241,0.7)] max-w-3xl leading-relaxed">
            Activos de marca oficiales de Proppia. Uso exclusivo para representación institucional.
          </p>
        </header>

        {/* Main Content */}
        <div className="space-y-16">

          {/* Logotipo principal */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#F6E342]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Logotipo principal</h2>
            </div>

            <div className="space-y-6 pl-5">
              {/* Versión fondo oscuro */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Versión fondo oscuro</h3>
                <p className="text-sm text-[rgba(241,241,241,0.6)]">
                  Para interfaces con fondo oscuro (#1E1E1E Charcoal o similares)
                </p>
                
                <div className="bg-[#1E1E1E] border border-[rgba(241,241,241,0.12)] p-16 flex items-center justify-center">
                  <div className="w-64">
                    <ProppiaLogo className="w-full h-auto text-[#F1F1F1]" />
                  </div>
                </div>
              </div>

              {/* Versión fondo claro */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Versión fondo claro</h3>
                <p className="text-sm text-[rgba(241,241,241,0.6)]">
                  Para interfaces con fondo claro (#F1F1F1 Chalk o blancos)
                </p>
                
                <div className="bg-[#F1F1F1] border border-[rgba(30,30,30,0.12)] p-16 flex items-center justify-center">
                  <div className="w-64">
                    <ProppiaLogo className="w-full h-auto text-[#1E1E1E]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Monograma */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#75EFB1]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Monograma</h2>
            </div>

            <div className="space-y-6 pl-5">
              <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed">
                El monograma <strong className="text-[#F1F1F1]">pp</strong> se usa en espacios reducidos: 
                favicon, avatares, patrones de fondo, íconos de app.
              </p>

              {/* Versión fondo oscuro */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Versión fondo oscuro</h3>
                <p className="text-sm text-[rgba(241,241,241,0.6)]">
                  Monograma sin underline, uso compacto
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#1E1E1E] border border-[rgba(241,241,241,0.12)] p-12 flex items-center justify-center aspect-square">
                    <div className="text-7xl font-black text-[#F1F1F1]">
                      pp
                    </div>
                  </div>
                  
                  <div className="bg-[#1E1E1E] border border-[rgba(241,241,241,0.12)] p-12 flex items-center justify-center aspect-square">
                    <div className="w-24 h-24 bg-[#F1F1F1] rounded-full flex items-center justify-center">
                      <span className="text-4xl font-black text-[#1E1E1E]">pp</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Versión fondo claro */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Versión fondo claro</h3>
                <p className="text-sm text-[rgba(241,241,241,0.6)]">
                  Monograma invertido para fondos claros
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#F1F1F1] border border-[rgba(30,30,30,0.12)] p-12 flex items-center justify-center aspect-square">
                    <div className="text-7xl font-black text-[#1E1E1E]">
                      pp
                    </div>
                  </div>
                  
                  <div className="bg-[#F1F1F1] border border-[rgba(30,30,30,0.12)] p-12 flex items-center justify-center aspect-square">
                    <div className="w-24 h-24 bg-[#1E1E1E] rounded-full flex items-center justify-center">
                      <span className="text-4xl font-black text-[#F1F1F1]">pp</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reglas de uso */}
          <section className="space-y-8 pb-24">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#23F8F7]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Reglas de uso</h2>
            </div>

            <div className="space-y-6 pl-5">
              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Uso recomendado</h3>
                
                <ul className="space-y-2 text-sm text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span className="text-[#75EFB1]">✓</span>
                    <span>Logotipo completo en headers, footers, presentaciones</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#75EFB1]">✓</span>
                    <span>Monograma en espacios reducidos (favicon, avatares, app icons)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#75EFB1]">✓</span>
                    <span>Respetar contraste: fondo oscuro → logo claro, fondo claro → logo oscuro</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#75EFB1]">✓</span>
                    <span>Usar componente ProppiaLogo cuando sea posible (mantiene consistencia)</span>
                  </li>
                </ul>
              </div>

              <div className="border border-[#FF6B6B] bg-[rgba(255,107,107,0.05)] p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#F1F1F1]">No permitido</h3>
                
                <ul className="space-y-2 text-sm text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span className="text-[#FF6B6B]">✗</span>
                    <span>No modificar proporciones ni colores del logotipo</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF6B6B]">✗</span>
                    <span>No aplicar efectos (sombras, glow, degradados) al logo</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF6B6B]">✗</span>
                    <span>No usar monograma con underline (solo versión simple "pp")</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF6B6B]">✗</span>
                    <span>No usar logo sobre fondos con bajo contraste</span>
                  </li>
                </ul>
              </div>

              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Implementación técnica</h3>
                
                <div className="bg-[rgba(241,241,241,0.05)] p-4 space-y-2">
                  <p className="text-xs font-medium text-[rgba(241,241,241,0.5)] uppercase tracking-wider">Componente React</p>
                  <pre className="text-sm text-[#75EFB1] font-mono">
{`import { ProppiaLogo } from '@/app/components/brand/ProppiaLogo';

<ProppiaLogo className="h-8 w-auto text-[#F1F1F1]" />`}
                  </pre>
                </div>

                <p className="text-sm text-[rgba(241,241,241,0.6)]">
                  El componente ProppiaLogo acepta className para controlar tamaño y color vía currentColor.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

import { ProppiaLogo } from '@/app/components/brand/ProppiaLogo';
import { ArrowRight } from 'lucide-react';

interface CoverPageProps {
  onNavigate?: (page: string) => void;
}

export default function CoverPage({ onNavigate }: CoverPageProps) {
  const navigationLinks = [
    { id: 'welcome', label: 'Resumen del Sistema', description: 'Contexto, objetivos y alcance' },
    { id: 'tokens', label: 'Tokens y Fundamentos', description: 'Color, tipografía, espaciado' },
    { id: 'components', label: 'Componentes', description: 'Librería completa de UI' },
    { id: 'documentation', label: 'Documentación & Gobierno', description: 'Uso, metodología y políticas' },
  ];

  return (
    <div className="w-full h-full bg-[#1E1E1E] overflow-auto">
      <div className="max-w-4xl mx-auto px-12 py-24">
        
        {/* Hero Section */}
        <section className="mb-32 space-y-12">
          <div className="space-y-8">
            <ProppiaLogo className="h-14 text-[#F1F1F1]" />
            
            <div className="space-y-4">
              <h1 className="text-5xl font-black text-[#F1F1F1] leading-tight">
                Sistema de Diseño Proppia
              </h1>
              <p className="text-xl text-[rgba(241,241,241,0.7)] leading-relaxed max-w-2xl">
                Lenguaje de diseño unificado, librería de componentes y estándares de gobernanza 
                para productos digitales B2B de alto valor.
              </p>
            </div>
          </div>

          {/* Color accent bar */}
          <div 
            className="h-1 w-32"
            style={{ background: 'linear-gradient(90deg, #F6E342 0%, #75EFB1 50%, #23F8F7 100%)' }}
          />
        </section>

        {/* Purpose */}
        <section className="mb-24 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-[#23F8F7]" />
            <h2 className="text-2xl font-black text-[#F1F1F1]">Propósito</h2>
          </div>
          <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed pl-5">
            Este sistema existe para garantizar coherencia visual, acelerar entregas y reducir fricción 
            entre equipos de diseño, producto y desarrollo. Establece un lenguaje compartido que permite 
            enfocarse en resolver problemas de negocio en lugar de reinventar patrones UI básicos. 
            Es un sistema de producción activo, no una referencia conceptual.
          </p>
        </section>

        {/* Scope */}
        <section className="mb-24 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-[#75EFB1]" />
            <h2 className="text-2xl font-black text-[#F1F1F1]">Alcance</h2>
          </div>
          
          <div className="space-y-6 pl-5">
            <div>
              <h3 className="text-lg font-bold text-[#F1F1F1] mb-3">Qué cubre este sistema</h3>
              <ul className="space-y-2 text-base text-[rgba(241,241,241,0.7)]">
                <li className="flex gap-3">
                  <span className="text-[#75EFB1] flex-shrink-0">•</span>
                  <span>Productos digitales B2B client-facing (dashboards, aplicaciones SaaS, plataformas)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#75EFB1] flex-shrink-0">•</span>
                  <span>Sitios web y landing pages de marketing corporativo</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#75EFB1] flex-shrink-0">•</span>
                  <span>Case studies, portfolio y materiales de presentación a clientes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#75EFB1] flex-shrink-0">•</span>
                  <span>Herramientas internas que requieren coherencia de marca</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#F1F1F1] mb-3">Qué NO cubre</h3>
              <ul className="space-y-2 text-base text-[rgba(241,241,241,0.7)]">
                <li className="flex gap-3">
                  <span className="text-[rgba(241,241,241,0.4)] flex-shrink-0">•</span>
                  <span>Productos B2C o interfaces consumer-facing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[rgba(241,241,241,0.4)] flex-shrink-0">•</span>
                  <span>Prototipos experimentales sin validación de negocio</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[rgba(241,241,241,0.4)] flex-shrink-0">•</span>
                  <span>Herramientas temporales sin impacto de marca</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-24 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-[#F6E342]" />
            <h2 className="text-2xl font-black text-[#F1F1F1]">Metodología base</h2>
          </div>
          
          <div className="space-y-4 pl-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#F6E342]" />
                  <h3 className="text-base font-bold text-[#F1F1F1]">Atomic Design</h3>
                </div>
                <p className="text-sm text-[rgba(241,241,241,0.6)] leading-relaxed">
                  Jerarquía de componentes desde átomos (tokens, colores) hasta páginas completas. 
                  Garantiza consistencia y reusabilidad en todos los niveles.
                </p>
              </div>

              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#75EFB1]" />
                  <h3 className="text-base font-bold text-[#F1F1F1]">shadcn/ui</h3>
                </div>
                <p className="text-sm text-[rgba(241,241,241,0.6)] leading-relaxed">
                  Base de componentes y primitivas. Todos los componentes UI parten de esta librería, 
                  extendida con la identidad visual de Proppia.
                </p>
              </div>
            </div>

            <p className="text-sm text-[rgba(241,241,241,0.6)] leading-relaxed">
              El sistema se construye desde tokens fundacionales (color, tipografía, espaciado) hasta implementaciones 
              completas en casos de uso reales (dashboards, landing pages, case studies).
            </p>
          </div>
        </section>

        {/* System Status */}
        <section className="mb-24 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-[rgba(241,241,241,0.3)]" />
            <h2 className="text-2xl font-black text-[#F1F1F1]">Estado del sistema</h2>
          </div>
          
          <div className="pl-5 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="text-xs font-medium text-[rgba(241,241,241,0.5)] uppercase tracking-wider">Versión</p>
                <p className="text-2xl font-bold text-[#F1F1F1]">1.0.0</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium text-[rgba(241,241,241,0.5)] uppercase tracking-wider">Estado</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#75EFB1] rounded-full" />
                  <p className="text-base font-medium text-[#F1F1F1]">Activo & En evolución</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium text-[rgba(241,241,241,0.5)] uppercase tracking-wider">Uso esperado</p>
                <p className="text-base font-medium text-[#F1F1F1]">Obligatorio en producción</p>
              </div>
            </div>

            <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6">
              <p className="text-sm text-[rgba(241,241,241,0.6)] leading-relaxed">
                Este sistema está en uso activo en proyectos de Proppia. Se actualiza continuamente basado 
                en necesidades reales de negocio y feedback de equipos. Todos los proyectos client-facing 
                deben usar este sistema antes de pasar a producción.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Navigation */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-8 bg-[#F1F1F1]" />
            <h2 className="text-2xl font-black text-[#F1F1F1]">Navegación</h2>
          </div>

          <div className="space-y-3 pl-5">
            {navigationLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => onNavigate?.(link.id)}
                className="w-full group border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 hover:border-[rgba(241,241,241,0.2)] hover:bg-[rgba(241,241,241,0.04)] transition-all text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1 flex-1">
                    <h3 className="text-lg font-bold text-[#F1F1F1]">{link.label}</h3>
                    <p className="text-sm text-[rgba(241,241,241,0.6)]">{link.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[rgba(241,241,241,0.4)] group-hover:text-[#23F8F7] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Footer Note */}
        <section className="border-t border-[rgba(241,241,241,0.12)] pt-12">
          <div className="space-y-4">
            <p className="text-sm text-[rgba(241,241,241,0.5)] leading-relaxed">
              <span className="font-medium text-[rgba(241,241,241,0.7)]">Nota de producción:</span> Este playground 
              utiliza <span className="font-medium">Inter</span> como placeholder tipográfico. En producción, usar{' '}
              <span className="font-medium">BW Nista</span> como familia tipográfica principal del sistema.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

import { ProppiaLogo } from '@/app/components/brand/ProppiaLogo';
import { ExternalLink } from 'lucide-react';

export default function WelcomePage() {
  return (
    <div className="w-full h-full bg-[#1E1E1E] overflow-auto">
      <div className="max-w-5xl mx-auto px-12 py-24">
        {/* Header */}
        <header className="mb-24 space-y-8">
          <ProppiaLogo className="h-12 w-auto text-[#F1F1F1]" />
          
          <div className="space-y-6">
            <h1 className="text-5xl font-black text-[#F1F1F1] leading-tight">
              Sistema de Diseño
            </h1>
            
            <p className="text-lg text-[rgba(241,241,241,0.7)] max-w-3xl leading-relaxed">
              Sistema de componentes, tokens y patrones para equipos de diseño y desarrollo. 
              Construido para proyectos reales que requieren coherencia visual, escalabilidad técnica y decisiones intencionales.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="space-y-24">
          {/* Problema */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#23F8F7]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Problema</h2>
            </div>
            <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed pl-5">
              Equipos trabajando sin lenguaje visual compartido generan inconsistencias, ralentizan entregas 
              y diluyen identidad de marca. Sin un sistema centralizado, cada proyecto reinventa componentes 
              en lugar de refinarlos, multiplicando deuda técnica y fricción entre diseño y desarrollo.
            </p>
          </section>

          {/* Objetivo */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#75EFB1]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Objetivo</h2>
            </div>
            <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed pl-5">
              Establecer un lenguaje de diseño unificado y librería de componentes que acelere producción, 
              garantice coherencia funcional y visual, y permita a los equipos enfocarse en resolver problemas de negocio 
              en lugar de rediseñar patrones básicos de UI.
            </p>
          </section>

          {/* Alcance */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#F6E342]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Alcance</h2>
            </div>
            <div className="space-y-4 pl-5">
              <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed">
                Este sistema cubre:
              </p>
              <ul className="space-y-3 text-base text-[rgba(241,241,241,0.7)]">
                <li className="flex gap-3">
                  <span className="text-[#23F8F7] flex-shrink-0">•</span>
                  <span>Fundamentos: color, tipografía, espaciado, tokens de diseño</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#75EFB1] flex-shrink-0">•</span>
                  <span>Librería de componentes basada en shadcn/ui</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F6E342] flex-shrink-0">•</span>
                  <span>Metodología Atomic Design: átomos, moléculas, organismos, plantillas, páginas</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#23F8F7] flex-shrink-0">•</span>
                  <span>Cumplimiento de accesibilidad WCAG 2.1 AA</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#75EFB1] flex-shrink-0">•</span>
                  <span>Documentación de uso, guías de implementación y mejores prácticas</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Principios */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#F1F1F1]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Principios</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-5">
              {[
                {
                  title: 'Intencional',
                  description: 'Cada elemento tiene propósito de negocio. Sin decoración vacía.',
                },
                {
                  title: 'Sistémico',
                  description: 'Componentes composables, reutilizables y predecibles.',
                },
                {
                  title: 'Editorial',
                  description: 'Claridad y jerarquía antes que tendencias decorativas.',
                },
                {
                  title: 'Accesible',
                  description: 'WCAG 2.1 AA es línea base, no característica opcional.',
                },
                {
                  title: 'Escalable',
                  description: 'Construido para crecimiento, evolución y coherencia a largo plazo.',
                },
                {
                  title: 'Confiado',
                  description: 'Audaz, minimal y estratégicamente contenido.',
                },
              ].map((principle, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-bold text-[#F1F1F1]">{principle.title}</h3>
                  <p className="text-sm text-[rgba(241,241,241,0.6)] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Métricas */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[rgba(241,241,241,0.3)]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Métricas</h2>
            </div>
            <div className="pl-5 space-y-4">
              <p className="text-base text-[rgba(241,241,241,0.5)] leading-relaxed italic">
                Métricas de éxito y KPIs por definir en colaboración con stakeholders.
              </p>
              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-3">
                <p className="text-sm text-[rgba(241,241,241,0.6)]">
                  Métricas potenciales:
                </p>
                <ul className="space-y-2 text-sm text-[rgba(241,241,241,0.5)]">
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Tasa de adopción de componentes en proyectos activos</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Tiempo de entrega de nuevas funcionalidades</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Eficiencia en handoff diseño-desarrollo</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Puntuación de cumplimiento de accesibilidad</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Herramientas y librerías */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#F1F1F1]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Herramientas y librerías</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-5">
              {[
                {
                  name: 'shadcn/ui',
                  description: 'Base de componentes y primitivas',
                  url: 'https://ui.shadcn.com/',
                  mandatory: true,
                },
                {
                  name: 'Tailwind CSS',
                  description: 'Framework CSS utility-first',
                  url: 'https://tailwindcss.com/',
                },
                {
                  name: 'Figma',
                  description: 'Colaboración de diseño y source of truth',
                  url: 'https://figma.com/',
                },
                {
                  name: 'Atomic Design',
                  description: 'Metodología de jerarquía de componentes',
                  url: 'https://bradfrost.com/blog/post/atomic-web-design/',
                },
              ].map((tool, index) => (
                <a
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 hover:border-[rgba(241,241,241,0.2)] hover:bg-[rgba(241,241,241,0.04)] transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-[#F1F1F1]">{tool.name}</h3>
                        {tool.mandatory && (
                          <span className="text-xs px-2 py-0.5 bg-[#23F8F7] text-[#1E1E1E] font-medium">
                            obligatorio
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[rgba(241,241,241,0.6)]">{tool.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-[rgba(241,241,241,0.4)] group-hover:text-[#23F8F7] transition-colors flex-shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Enlaces importantes */}
          <section className="space-y-6 pb-24">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#F1F1F1]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Enlaces importantes</h2>
            </div>
            <div className="space-y-3 pl-5">
              {[
                { label: 'Archivo del Design System', url: '#', placeholder: true },
                { label: 'Gestión de proyecto', url: '#', placeholder: true },
                { label: 'Brandbook', url: '#', placeholder: true },
                { label: 'Credenciales y accesos', url: '#', placeholder: true },
                { label: 'Otros recursos', url: '#', placeholder: true },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center justify-between gap-4 px-6 py-4 border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] hover:border-[rgba(241,241,241,0.2)] hover:bg-[rgba(241,241,241,0.04)] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base text-[#F1F1F1] font-medium">{link.label}</span>
                    {link.placeholder && (
                      <span className="text-xs px-2 py-0.5 border border-[rgba(241,241,241,0.2)] text-[rgba(241,241,241,0.5)]">
                        por definir
                      </span>
                    )}
                  </div>
                  <ExternalLink className="w-4 h-4 text-[rgba(241,241,241,0.4)] group-hover:text-[#23F8F7] transition-colors" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

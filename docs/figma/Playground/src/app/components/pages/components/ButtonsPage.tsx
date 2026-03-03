export default function ButtonsPage() {
  return (
    <div className="w-full h-full bg-[#1E1E1E] overflow-auto">
      <div className="max-w-5xl mx-auto px-12 py-24">
        
        {/* Header */}
        <header className="mb-16 space-y-4">
          <div className="flex items-center gap-3 text-sm text-[rgba(241,241,241,0.6)]">
            <span>Componentes</span>
            <span>/</span>
            <span>Moléculas</span>
            <span>/</span>
            <span className="text-[#F1F1F1]">Buttons</span>
          </div>
          <h1 className="text-5xl font-black text-[#F1F1F1] leading-tight">
            Buttons
          </h1>
          <p className="text-lg text-[rgba(241,241,241,0.7)] max-w-3xl leading-relaxed">
            Componente fundamental para acciones y decisiones del usuario.
          </p>
        </header>

        {/* Main Content */}
        <div className="space-y-16">

          {/* 1. Descripción funcional */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#23F8F7]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Descripción funcional</h2>
            </div>

            <div className="space-y-4 pl-5">
              <div>
                <h3 className="text-lg font-bold text-[#F1F1F1] mb-3">Qué problema resuelve</h3>
                <p className="text-base text-[rgba(241,241,241,0.7)] leading-relaxed">
                  Los botones representan acciones que el usuario puede ejecutar. Comunican claramente 
                  qué sucederá al interactuar con ellos y guían decisiones en flujos de producto y marketing.
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(241,241,241,0.08)]">
                <h3 className="text-lg font-bold text-[#F1F1F1] mb-3">Contextos de uso</h3>
                <ul className="space-y-2 text-base text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span className="text-[#75EFB1]">•</span>
                    <span><strong className="text-[#F1F1F1]">Dashboard:</strong> Acciones principales (guardar, eliminar, exportar)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#75EFB1]">•</span>
                    <span><strong className="text-[#F1F1F1]">Marketing:</strong> CTAs, formularios de contacto, demos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#75EFB1]">•</span>
                    <span><strong className="text-[#F1F1F1]">SaaS:</strong> Onboarding, configuración, confirmaciones</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[rgba(241,241,241,0.08)]">
                <h3 className="text-lg font-bold text-[#F1F1F1] mb-3">Qué NO debe hacer</h3>
                <ul className="space-y-2 text-base text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span className="text-[#FF6B6B]">✗</span>
                    <span>Usarse para navegación (usar links en su lugar)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF6B6B]">✗</span>
                    <span>Abusar de variantes primary en una misma sección</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF6B6B]">✗</span>
                    <span>Usar textos genéricos ("Click aquí", "OK")</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. Ejemplos visuales reales */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#75EFB1]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Ejemplos visuales</h2>
            </div>

            <div className="space-y-8 pl-5">
              {/* Primary */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Primary</h3>
                <p className="text-sm text-[rgba(241,241,241,0.6)]">
                  Acción principal de la sección. Solo uno por contexto visible.
                </p>
                
                <div className="bg-[rgba(241,241,241,0.02)] border border-[rgba(241,241,241,0.12)] p-12 flex items-center gap-6">
                  <button className="bg-[#F1F1F1] text-[#1E1E1E] px-8 py-3 font-medium hover:bg-[rgba(241,241,241,0.9)] transition-all">
                    Agendar sesión estratégica
                  </button>
                  <button className="bg-[#F1F1F1] text-[#1E1E1E] px-6 py-2.5 text-sm font-medium hover:bg-[rgba(241,241,241,0.9)] transition-all">
                    Small size
                  </button>
                  <button className="bg-[#F1F1F1] text-[#1E1E1E] px-10 py-4 text-lg font-medium hover:bg-[rgba(241,241,241,0.9)] transition-all">
                    Large size
                  </button>
                </div>
              </div>

              {/* Secondary */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Secondary</h3>
                <p className="text-sm text-[rgba(241,241,241,0.6)]">
                  Acción secundaria que coexiste con primary. Menos énfasis visual.
                </p>
                
                <div className="bg-[rgba(241,241,241,0.02)] border border-[rgba(241,241,241,0.12)] p-12 flex items-center gap-6">
                  <button className="bg-transparent border-2 border-[#F1F1F1] text-[#F1F1F1] px-8 py-3 font-medium hover:bg-[rgba(241,241,241,0.1)] transition-all">
                    Ver casos de éxito
                  </button>
                  <button className="bg-transparent border-2 border-[#F1F1F1] text-[#F1F1F1] px-6 py-2.5 text-sm font-medium hover:bg-[rgba(241,241,241,0.1)] transition-all">
                    Small size
                  </button>
                </div>
              </div>

              {/* Ghost */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Ghost</h3>
                <p className="text-sm text-[rgba(241,241,241,0.6)]">
                  Acción terciaria de bajo énfasis. Usado para acciones frecuentes no críticas.
                </p>
                
                <div className="bg-[rgba(241,241,241,0.02)] border border-[rgba(241,241,241,0.12)] p-12 flex items-center gap-6">
                  <button className="bg-transparent text-[#F1F1F1] px-8 py-3 font-medium hover:bg-[rgba(241,241,241,0.1)] transition-all">
                    Explorar el sistema
                  </button>
                  <button className="bg-transparent text-[#F1F1F1] px-8 py-3 font-medium hover:bg-[rgba(241,241,241,0.1)] transition-all flex items-center gap-2">
                    <span>Con ícono</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

              {/* Disabled */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Disabled</h3>
                <p className="text-sm text-[rgba(241,241,241,0.6)]">
                  Estado deshabilitado. Opacidad 50%, cursor not-allowed.
                </p>
                
                <div className="bg-[rgba(241,241,241,0.02)] border border-[rgba(241,241,241,0.12)] p-12 flex items-center gap-6">
                  <button 
                    disabled
                    className="bg-[#F1F1F1] text-[#1E1E1E] px-8 py-3 font-medium opacity-50 cursor-not-allowed"
                  >
                    Botón deshabilitado
                  </button>
                  <button 
                    disabled
                    className="bg-transparent border-2 border-[#F1F1F1] text-[#F1F1F1] px-8 py-3 font-medium opacity-50 cursor-not-allowed"
                  >
                    Secondary disabled
                  </button>
                </div>
              </div>

              {/* Loading */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Loading</h3>
                <p className="text-sm text-[rgba(241,241,241,0.6)]">
                  Estado de carga. Incluye spinner, disabled durante la acción.
                </p>
                
                <div className="bg-[rgba(241,241,241,0.02)] border border-[rgba(241,241,241,0.12)] p-12 flex items-center gap-6">
                  <button 
                    disabled
                    className="bg-[#F1F1F1] text-[#1E1E1E] px-8 py-3 font-medium flex items-center gap-3"
                  >
                    <div className="w-4 h-4 border-2 border-[#1E1E1E] border-t-transparent rounded-full animate-spin" />
                    <span>Procesando...</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Variantes permitidas */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#F6E342]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Variantes permitidas</h2>
            </div>

            <div className="space-y-6 pl-5">
              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Variantes aprobadas</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-[#75EFB1] mt-1">✓</span>
                    <div>
                      <p className="text-sm font-medium text-[#F1F1F1]">variant="primary"</p>
                      <p className="text-sm text-[rgba(241,241,241,0.6)]">BG Chalk, Text Charcoal</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#75EFB1] mt-1">✓</span>
                    <div>
                      <p className="text-sm font-medium text-[#F1F1F1]">variant="secondary"</p>
                      <p className="text-sm text-[rgba(241,241,241,0.6)]">Border 2px Chalk, BG transparent</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#75EFB1] mt-1">✓</span>
                    <div>
                      <p className="text-sm font-medium text-[#F1F1F1]">variant="ghost"</p>
                      <p className="text-sm text-[rgba(241,241,241,0.6)]">Sin border, hover BG sutil</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#75EFB1] mt-1">✓</span>
                    <div>
                      <p className="text-sm font-medium text-[#F1F1F1]">size="sm" | "md" | "lg"</p>
                      <p className="text-sm text-[rgba(241,241,241,0.6)]">Tamaños desde tokens de spacing</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#FF6B6B] bg-[rgba(255,107,107,0.05)] p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Variantes NO permitidas</h3>
                
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="text-[#FF6B6B] mt-1">✗</span>
                    <p className="text-sm text-[rgba(241,241,241,0.7)]">
                      Variantes de color directo (blue, red, green)
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#FF6B6B] mt-1">✗</span>
                    <p className="text-sm text-[rgba(241,241,241,0.7)]">
                      Gradientes como background (usar solo para borders si aplica)
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#FF6B6B] mt-1">✗</span>
                    <p className="text-sm text-[rgba(241,241,241,0.7)]">
                      Sombras dramáticas o glow effects
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6">
                <p className="text-sm text-[rgba(241,241,241,0.6)] leading-relaxed">
                  <strong className="text-[#F1F1F1]">Control por tokens:</strong> Los colores vienen de 
                  <code className="text-[#23F8F7] text-xs mx-1">bg.primary</code>, 
                  <code className="text-[#23F8F7] text-xs mx-1">text.primary</code>, 
                  <code className="text-[#23F8F7] text-xs">border.subtle</code>. 
                  El espaciado usa <code className="text-[#23F8F7] text-xs mx-1">spacing.4</code> y 
                  <code className="text-[#23F8F7] text-xs">spacing.6</code>.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Estados del componente */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#23F8F7]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Estados del componente</h2>
            </div>

            <div className="space-y-4 pl-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { 
                    state: 'Default', 
                    desc: 'Estado inicial sin interacción' 
                  },
                  { 
                    state: 'Hover', 
                    desc: 'BG opacity 90% (primary), BG sutil (secondary/ghost)' 
                  },
                  { 
                    state: 'Focus', 
                    desc: 'Border 2px Turquoise (#23F8F7), visible en keyboard nav' 
                  },
                  { 
                    state: 'Active', 
                    desc: 'Scale 0.98, feedback visual inmediato' 
                  },
                  { 
                    state: 'Disabled', 
                    desc: 'Opacity 50%, cursor not-allowed, no interactivo' 
                  },
                  { 
                    state: 'Loading', 
                    desc: 'Spinner visible, disabled, texto opcional cambia' 
                  },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-4"
                  >
                    <p className="text-sm font-bold text-[#F1F1F1] mb-1">{item.state}</p>
                    <p className="text-sm text-[rgba(241,241,241,0.6)]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. Reglas de uso */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#75EFB1]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Reglas de uso</h2>
            </div>

            <div className="space-y-6 pl-5">
              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Cuándo usar este componente</h3>
                
                <ul className="space-y-2 text-sm text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span className="text-[#75EFB1]">•</span>
                    <span>Para ejecutar acciones (guardar, enviar, eliminar, confirmar)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#75EFB1]">•</span>
                    <span>CTAs de marketing (agendar demo, contactar, descargar)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#75EFB1]">•</span>
                    <span>Finalizar flujos multi-paso (wizards, onboarding)</span>
                  </li>
                </ul>
              </div>

              <div className="border border-[#FF6B6B] bg-[rgba(255,107,107,0.05)] p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Cuándo NO usarlo</h3>
                
                <ul className="space-y-2 text-sm text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span className="text-[#FF6B6B]">✗</span>
                    <span>Para navegación entre páginas (usar links)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF6B6B]">✗</span>
                    <span>En tablas para acciones por fila (usar icon buttons o dropdowns)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF6B6B]">✗</span>
                    <span>Como toggle switches (usar Switch component)</span>
                  </li>
                </ul>
              </div>

              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Errores comunes a evitar</h3>
                
                <ul className="space-y-2 text-sm text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Múltiples botones primary en la misma vista (máximo uno)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Textos ambiguos ("Continuar" sin contexto)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Botones demasiado pequeños (mínimo target 44x44px para touch)</span>
                  </li>
                </ul>
              </div>

              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Relación con otros componentes</h3>
                
                <ul className="space-y-2 text-sm text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span>→</span>
                    <span>Combinar con <strong className="text-[#F1F1F1]">Icons</strong> para añadir contexto visual</span>
                  </li>
                  <li className="flex gap-2">
                    <span>→</span>
                    <span>Usar en <strong className="text-[#F1F1F1]">Forms</strong> como submit actions</span>
                  </li>
                  <li className="flex gap-2">
                    <span>→</span>
                    <span>Complementar con <strong className="text-[#F1F1F1]">Modals</strong> para confirmaciones críticas</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 6. Relación con el sistema */}
          <section className="space-y-8 pb-24">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#F6E342]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Relación con el sistema</h2>
            </div>

            <div className="space-y-6 pl-5">
              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Tokens que gobiernan este componente</h3>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-mono text-[#23F8F7] mb-1">bg.primary / text.primary</p>
                    <p className="text-sm text-[rgba(241,241,241,0.6)]">
                      Colores de fondo y texto. Primary usa Chalk/Charcoal invertido.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[rgba(241,241,241,0.08)]">
                    <p className="text-sm font-mono text-[#23F8F7] mb-1">spacing.4 / spacing.6</p>
                    <p className="text-sm text-[rgba(241,241,241,0.6)]">
                      Padding interno del botón (horizontal: spacing.8, vertical: spacing.3/4).
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[rgba(241,241,241,0.08)]">
                    <p className="text-sm font-mono text-[#23F8F7] mb-1">typography.body</p>
                    <p className="text-sm text-[rgba(241,241,241,0.6)]">
                      Tamaño de texto base. Medium weight (500) para énfasis.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[rgba(241,241,241,0.08)]">
                    <p className="text-sm font-mono text-[#23F8F7] mb-1">radius.md</p>
                    <p className="text-sm text-[rgba(241,241,241,0.6)]">
                      Border radius por defecto (4px), sutil y profesional.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[rgba(241,241,241,0.08)]">
                    <p className="text-sm font-mono text-[#23F8F7] mb-1">duration.fast</p>
                    <p className="text-sm text-[rgba(241,241,241,0.6)]">
                      Transiciones de estados (150ms), feedback inmediato.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Qué NO debe modificarse</h3>
                
                <ul className="space-y-2 text-sm text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Colores base (usar tokens, no valores directos)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Jerarquía de variantes (primary siempre más enfático que secondary)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Estados de accesibilidad (focus, disabled deben ser visibles)</span>
                  </li>
                </ul>
              </div>

              <div className="border border-[#F6E342] bg-[rgba(246,227,66,0.05)] p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#F1F1F1]">Qué puede adaptarse por proyecto</h3>
                
                <ul className="space-y-2 text-sm text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Tamaños (sm/md/lg) según densidad de UI del proyecto</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Uso de íconos (opcional según contexto)</span>
                  </li>
                  <li className="flex gap-2">
                    <span>—</span>
                    <span>Width (auto, full-width, fixed) según layout container</span>
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

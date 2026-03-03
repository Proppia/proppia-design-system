export default function TextInputPage() {
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
            <span className="text-[#F1F1F1]">Text Input</span>
          </div>
          <h1 className="text-5xl font-black text-[#F1F1F1] leading-tight">
            Text Input
          </h1>
          <p className="text-lg text-[rgba(241,241,241,0.7)] max-w-3xl leading-relaxed">
            Campo de entrada de texto con validación y estados.
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
                  Permite al usuario ingresar texto de una sola línea. Maneja validación, estados de error 
                  y feedback visual para garantizar entrada de datos correcta.
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(241,241,241,0.08)]">
                <h3 className="text-lg font-bold text-[#F1F1F1] mb-3">Contextos de uso</h3>
                <ul className="space-y-2 text-base text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span className="text-[#75EFB1]">•</span>
                    <span><strong className="text-[#F1F1F1]">Formularios:</strong> Nombre, email, teléfono, empresa</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#75EFB1]">•</span>
                    <span><strong className="text-[#F1F1F1]">Búsqueda:</strong> Filtros, search bars</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#75EFB1]">•</span>
                    <span><strong className="text-[#F1F1F1]">Configuración:</strong> Settings, preferencias de usuario</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[rgba(241,241,241,0.08)]">
                <h3 className="text-lg font-bold text-[#F1F1F1] mb-3">Qué NO debe hacer</h3>
                <ul className="space-y-2 text-base text-[rgba(241,241,241,0.7)]">
                  <li className="flex gap-2">
                    <span className="text-[#FF6B6B]">✗</span>
                    <span>Usarse para texto multi-línea (usar Text Area)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#FF6B6B]">✗</span>
                    <span>Validar en tiempo real de forma agresiva (permitir escribir antes de validar)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. Ejemplos visuales */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 bg-[#75EFB1]" />
              <h2 className="text-2xl font-black text-[#F1F1F1]">Ejemplos visuales</h2>
            </div>

            <div className="space-y-8 pl-5">
              {/* Default */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Default</h3>
                <div className="bg-[rgba(241,241,241,0.02)] border border-[rgba(241,241,241,0.12)] p-12 space-y-6">
                  <div className="space-y-2 max-w-md">
                    <label className="text-sm font-medium text-[#F1F1F1]">Nombre de la empresa</label>
                    <input 
                      type="text"
                      placeholder="Ej: Proppia Labs"
                      className="w-full px-4 py-3 bg-[rgba(241,241,241,0.05)] border border-[rgba(241,241,241,0.24)] text-[#F1F1F1] placeholder-[rgba(241,241,241,0.4)] focus:outline-none focus:border-[#23F8F7] focus:border-2 text-base"
                    />
                  </div>
                </div>
              </div>

              {/* With helper text */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Con texto de ayuda</h3>
                <div className="bg-[rgba(241,241,241,0.02)] border border-[rgba(241,241,241,0.12)] p-12 space-y-6">
                  <div className="space-y-2 max-w-md">
                    <label className="text-sm font-medium text-[#F1F1F1]">Email corporativo</label>
                    <input 
                      type="email"
                      placeholder="contacto@empresa.com"
                      className="w-full px-4 py-3 bg-[rgba(241,241,241,0.05)] border border-[rgba(241,241,241,0.24)] text-[#F1F1F1] placeholder-[rgba(241,241,241,0.4)] focus:outline-none focus:border-[#23F8F7] focus:border-2 text-base"
                    />
                    <p className="text-sm text-[rgba(241,241,241,0.6)]">Usaremos este email para contactarte</p>
                  </div>
                </div>
              </div>

              {/* Error state */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Error</h3>
                <div className="bg-[rgba(241,241,241,0.02)] border border-[rgba(241,241,241,0.12)] p-12 space-y-6">
                  <div className="space-y-2 max-w-md">
                    <label className="text-sm font-medium text-[#F1F1F1]">Email</label>
                    <input 
                      type="email"
                      value="email-invalido"
                      className="w-full px-4 py-3 bg-[rgba(241,241,241,0.05)] border-2 border-[#FF6B6B] text-[#F1F1F1] placeholder-[rgba(241,241,241,0.4)] focus:outline-none text-base"
                      readOnly
                    />
                    <p className="text-sm text-[#FF6B6B]">Por favor ingresa un email válido</p>
                  </div>
                </div>
              </div>

              {/* Disabled */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#F1F1F1]">Disabled</h3>
                <div className="bg-[rgba(241,241,241,0.02)] border border-[rgba(241,241,241,0.12)] p-12 space-y-6">
                  <div className="space-y-2 max-w-md">
                    <label className="text-sm font-medium text-[rgba(241,241,241,0.5)]">Campo deshabilitado</label>
                    <input 
                      type="text"
                      value="No editable"
                      disabled
                      className="w-full px-4 py-3 bg-[rgba(241,241,241,0.02)] border border-[rgba(241,241,241,0.12)] text-[rgba(241,241,241,0.5)] cursor-not-allowed text-base"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Placeholder for remaining sections */}
          <section className="space-y-8 pb-24">
            <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-12 text-center">
              <p className="text-base text-[rgba(241,241,241,0.6)]">
                Documentación completa en desarrollo...
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

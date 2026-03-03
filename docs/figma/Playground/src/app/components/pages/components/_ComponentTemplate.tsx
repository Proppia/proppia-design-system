// Template for component pages

interface ComponentTemplateProps {
  title: string;
  category: 'Moléculas' | 'Organismos';
  description: string;
}

export default function ComponentTemplate({ title, category, description }: ComponentTemplateProps) {
  return (
    <div className="w-full h-full bg-[#1E1E1E] overflow-auto">
      <div className="max-w-5xl mx-auto px-12 py-24">
        
        {/* Header */}
        <header className="mb-16 space-y-4">
          <div className="flex items-center gap-3 text-sm text-[rgba(241,241,241,0.6)]">
            <span>Componentes</span>
            <span>/</span>
            <span>{category}</span>
            <span>/</span>
            <span className="text-[#F1F1F1]">{title}</span>
          </div>
          <h1 className="text-5xl font-black text-[#F1F1F1] leading-tight">
            {title}
          </h1>
          <p className="text-lg text-[rgba(241,241,241,0.7)] max-w-3xl leading-relaxed">
            {description}
          </p>
        </header>

        {/* Placeholder */}
        <div className="space-y-8">
          <div className="border border-[rgba(241,241,241,0.12)] bg-[rgba(241,241,241,0.02)] p-24 text-center space-y-4">
            <p className="text-2xl font-bold text-[#F1F1F1]">
              Documentación en desarrollo
            </p>
            <p className="text-base text-[rgba(241,241,241,0.6)] max-w-2xl mx-auto">
              La documentación completa de este componente estará disponible próximamente. 
              Incluirá descripción funcional, ejemplos visuales, variantes, estados y reglas de uso.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

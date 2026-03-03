import { Avatar, AvatarFallback, AvatarImage } from "@proppia/ui";
import { Demo } from "../../components/Demo";
import { PageHeader } from "../../components/PageHeader";

export function AvatarsPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Componentes" }, { label: "Átomos" }]}
        badge="Átomo"
        title="Avatar"
        description="Representación visual de un usuario. Muestra imagen o iniciales como fallback. Tamaño controlado por clases."
      />

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Con imagen</h2>
        <Demo>
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?img=47" alt="Laura M." />
            <AvatarFallback>LM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="Carlos R." />
            <AvatarFallback>CR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/150?img=33" alt="Ana P." />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Solo fallback (iniciales)</h2>
        <Demo>
          <Avatar>
            <AvatarFallback>PP</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>+2</AvatarFallback>
          </Avatar>
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Tamaños</h2>
        <Demo>
          <div className="flex items-end gap-4">
            <div className="flex flex-col items-center gap-2">
              <Avatar className="h-8 w-8 text-xs"><AvatarFallback>SM</AvatarFallback></Avatar>
              <span className="text-xs text-muted-foreground">32px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar className="h-10 w-10"><AvatarFallback>MD</AvatarFallback></Avatar>
              <span className="text-xs text-muted-foreground">40px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar className="h-14 w-14 text-base"><AvatarFallback>LG</AvatarFallback></Avatar>
              <span className="text-xs text-muted-foreground">56px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar className="h-20 w-20 text-xl"><AvatarFallback>XL</AvatarFallback></Avatar>
              <span className="text-xs text-muted-foreground">80px</span>
            </div>
          </div>
        </Demo>
      </section>
    </div>
  );
}

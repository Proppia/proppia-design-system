import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@proppia/ui";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import { Demo } from "../../components/Demo";
import { PageHeader } from "../../components/PageHeader";

export function DropdownsPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Componentes" }, { label: "Moléculas" }]}
        badge="Molécula"
        title="Dropdown Menu"
        description="Menú contextual desplegable para acciones y selección. Basado en Radix UI, accesible por teclado."
      />

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Básico</h2>
        <Demo>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Abrir menú <ChevronDown size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Configuración</DropdownMenuItem>
              <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Con grupos, separadores e iconos</h2>
        <Demo>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Mi cuenta <ChevronDown size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User size={14} className="mr-2" />Perfil
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings size={14} className="mr-2" />Configuración
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <LogOut size={14} className="mr-2" />Cerrar sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Con submenú</h2>
        <Demo>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Más opciones <ChevronDown size={14} /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Nueva pestaña</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Importar</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Desde archivo</DropdownMenuItem>
                  <DropdownMenuItem>Desde URL</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Exportar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Demo>
      </section>
    </div>
  );
}

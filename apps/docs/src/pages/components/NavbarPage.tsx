import { Button, Navbar, NavbarBrand, NavbarLink, NavbarNav } from "@proppia/ui";
import { Demo } from "../../components/Demo";
import { PageHeader } from "../../components/PageHeader";

const MonogramDark = () => (
  <img
    src="/branding/proppia-logos/Monograma Principal Todo Negro Sin Linea.svg"
    alt="Proppia"
    className="h-7 w-auto"
  />
);

const MonogramLight = () => (
  <img
    src="/branding/proppia-logos/Monograma Principal Todo Blanco Sin Linea.svg"
    alt="Proppia"
    className="h-7 w-auto"
  />
);

export function NavbarPage() {
  return (
    <div>
      <PageHeader
        breadcrumbs={[{ label: "Componentes" }, { label: "Organismos" }]}
        badge="Organismo"
        title="Navbar / Header"
        description="Barra de navegación principal. El monograma Proppia se adapta según el fondo: negro sobre claro, blanco sobre oscuro."
      />

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Sobre fondo claro (modo light)</h2>
        <Demo align="start" className="p-0 overflow-hidden">
          <Navbar
            className="bg-[#F1F1F1] border-[#e0e0e0]"
            left={
              <NavbarBrand href="#">
                <MonogramDark />
              </NavbarBrand>
            }
            center={
              <NavbarNav>
                <NavbarLink href="#" className="text-[#1E1E1E]/70 hover:text-[#1E1E1E] hover:bg-[#1E1E1E]/8">Productos</NavbarLink>
                <NavbarLink href="#" className="text-[#1E1E1E]/70 hover:text-[#1E1E1E] hover:bg-[#1E1E1E]/8">Precios</NavbarLink>
                <NavbarLink href="#" className="text-[#1E1E1E]/70 hover:text-[#1E1E1E] hover:bg-[#1E1E1E]/8">Docs</NavbarLink>
              </NavbarNav>
            }
            right={
              <>
                <Button variant="ghost" size="sm" className="text-[#1E1E1E] hover:bg-[#1E1E1E]/8">
                  Iniciar sesión
                </Button>
                <Button size="sm">Registrarse</Button>
              </>
            }
          />
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Sobre fondo oscuro (modo dark)</h2>
        <Demo align="start" className="p-0 overflow-hidden">
          <Navbar
            className="bg-[#1E1E1E] border-[#333]"
            left={
              <NavbarBrand href="#">
                <MonogramLight />
              </NavbarBrand>
            }
            center={
              <NavbarNav>
                <NavbarLink href="#" className="text-[#F1F1F1]/60 hover:text-[#F1F1F1] hover:bg-white/8">Productos</NavbarLink>
                <NavbarLink href="#" className="text-[#F1F1F1]/60 hover:text-[#F1F1F1] hover:bg-white/8">Precios</NavbarLink>
                <NavbarLink href="#" className="text-[#F1F1F1]/60 hover:text-[#F1F1F1] hover:bg-white/8">Docs</NavbarLink>
              </NavbarNav>
            }
            right={
              <>
                <Button variant="ghost" size="sm" className="text-[#F1F1F1] hover:bg-white/10">
                  Iniciar sesión
                </Button>
                <Button size="sm">Registrarse</Button>
              </>
            }
          />
        </Demo>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-base font-semibold text-foreground">Solo monograma + acción</h2>
        <Demo align="start" className="p-0 overflow-hidden">
          <Navbar
            left={
              <NavbarBrand href="#">
                <MonogramDark />
              </NavbarBrand>
            }
            right={
              <Button variant="outline" size="sm">Configuración</Button>
            }
          />
        </Demo>
      </section>
    </div>
  );
}

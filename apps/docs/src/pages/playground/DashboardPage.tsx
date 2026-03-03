import { useState } from "react";
import {
  Alert, AlertDescription,
  Avatar, AvatarFallback, AvatarImage,
  Badge,
  Button,
  Card, CardContent, CardHeader, CardTitle,
  Progress,
  Switch,
  Tabs, TabsContent, TabsList, TabsTrigger,
} from "@proppia/ui";
import {
  ArrowUpRight, Bell, CheckCircle2, ChevronDown,
  LayoutDashboard, Lightbulb, LineChart,
  Settings, TrendingUp, Users, Zap,
} from "lucide-react";
import { PageHeader } from "../../components/PageHeader";

const kpis = [
  { label: "Ingresos MRR",    val: "$48,200", delta: "+18%", up: true,  color: "#23F8F7" },
  { label: "Clientes activos", val: "1,340",   delta: "+6%",  up: true,  color: "#75EFB1" },
  { label: "Tasa de churn",    val: "2.1%",    delta: "-0.4%",up: true,  color: "#75EFB1" },
  { label: "NPS promedio",     val: "72",      delta: "+5pts",up: true,  color: "#F6E342" },
];

const projects = [
  { name: "Rediseño E-commerce",  client: "Marca Norte",    status: "En progreso", progress: 68, color: "#23F8F7", division: "Brand & Experience" },
  { name: "Campaña Q2 Pauta",     client: "Retail Corp",    status: "En revisión", progress: 90, color: "#75EFB1", division: "Performance & Growth" },
  { name: "App Mobile MVP",       client: "FinTech Lab",    status: "En progreso", progress: 42, color: "#F6E342", division: "Digital Products" },
  { name: "SEO & Contenidos",     client: "Salud Total",    status: "Completado",  progress: 100,color: "#75EFB1", division: "Performance & Growth" },
  { name: "Identidad Visual",     client: "StartUp Verde",  status: "En progreso", progress: 55, color: "#23F8F7", division: "Brand & Experience" },
];

const activities = [
  { user: "Laura M.",  action: "Aprobó entregable",  time: "hace 5 min",  avatar: "LM", color: "#75EFB1" },
  { user: "Carlos R.", action: "Subió nuevo brief",   time: "hace 22 min", avatar: "CR", color: "#23F8F7" },
  { user: "Ana P.",    action: "Comentó en prototipo",time: "hace 1 h",    avatar: "AP", color: "#F6E342" },
  { user: "Sistema",   action: "Reporte mensual generado", time: "hace 2 h", avatar: "SY", color: "#23F8F7" },
];

const statusColor: Record<string, string> = {
  "En progreso": "border-[#23F8F7]/30 bg-[#23F8F7]/8 text-[#0a7e7f] dark:text-[#23F8F7]",
  "En revisión": "border-[#F6E342]/30 bg-[#F6E342]/8 text-[#6b5600] dark:text-[#F6E342]",
  "Completado":  "border-[#75EFB1]/30 bg-[#75EFB1]/8 text-[#1a7a50] dark:text-[#75EFB1]",
};

export function DashboardPage() {
  const [notif, setNotif] = useState(true);

  return (
    <div className="space-y-8">
      <PageHeader
        breadcrumbs={[{ label: "Playground" }]}
        badge="Fundamento"
        title="Dashboard"
        description="Vista de control operativo de cuentas y proyectos activos. Composición real de componentes Proppia en contexto de producto SaaS."
      />

      {/* KPIs */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <Card key={k.label} className="border-border bg-card">
            <CardContent className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-medium text-muted-foreground">{k.label}</p>
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: k.color }} />
              </div>
              <p className="text-2xl font-black tracking-tight text-foreground">{k.val}</p>
              <div className="mt-2 flex items-center gap-1">
                <TrendingUp size={11} className="text-[#75EFB1]" />
                <span className="text-xs font-medium text-[#1a7a50] dark:text-[#75EFB1]">{k.delta}</span>
                <span className="text-xs text-muted-foreground">vs mes anterior</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Proyectos + Actividad */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Tabla proyectos */}
        <div className="lg:col-span-2">
          <Card className="border-border bg-card">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-semibold text-foreground">Proyectos activos</CardTitle>
                <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs text-muted-foreground">
                  Ver todos <ChevronDown size={12} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {projects.map((p) => (
                  <div key={p.name} className="flex items-center gap-4 px-6 py-3.5 transition-colors hover:bg-muted/30">
                    <div className="h-2 w-2 shrink-0 rounded-sm" style={{ backgroundColor: p.color }} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-foreground">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.client} · {p.division}</p>
                    </div>
                    <div className="hidden w-28 lg:block">
                      <Progress value={p.progress} className="h-1.5" />
                      <p className="mt-1 text-right text-[10px] text-muted-foreground">{p.progress}%</p>
                    </div>
                    <Badge className={`shrink-0 text-[10px] ${statusColor[p.status]}`}>{p.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actividad reciente */}
        <div className="flex flex-col gap-4">
          <Card className="border-border bg-card">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-semibold text-foreground">Actividad reciente</CardTitle>
                <Bell size={14} className="text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4 pb-5">
              {activities.map((a) => (
                <div key={a.user + a.time} className="flex items-start gap-3">
                  <Avatar className="h-7 w-7 shrink-0">
                    <AvatarImage src={`https://ui-avatars.com/api/?name=${a.avatar}&background=1a2e2e&color=${a.color.replace("#","")}&size=64&bold=true`} />
                    <AvatarFallback className="text-[10px]">{a.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-foreground">{a.user}</p>
                    <p className="text-xs text-muted-foreground">{a.action}</p>
                    <p className="mt-0.5 text-[10px] text-muted-foreground/60">{a.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Alertas y notificaciones */}
          <Card className="border-border bg-card">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-foreground">Notificaciones</p>
                <Switch checked={notif} onCheckedChange={setNotif} className="scale-90" />
              </div>
              <Alert variant="info">
                <Lightbulb size={13} />
                <AlertDescription className="text-xs">
                  El reporte Q2 está listo para revisión.
                </AlertDescription>
              </Alert>
              <Alert variant="success">
                <CheckCircle2 size={13} />
                <AlertDescription className="text-xs">
                  Campaña "Retail Corp" superó el objetivo.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tabs de métricas */}
      <Card className="border-border bg-card">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-semibold text-foreground">Métricas por división</CardTitle>
            <Button variant="outline" size="sm" className="h-7 gap-1.5 text-xs">
              <ArrowUpRight size={12} /> Exportar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="performance">
            <TabsList className="mb-4">
              <TabsTrigger value="performance" className="text-xs gap-1.5">
                <TrendingUp size={12} /> Performance & Growth
              </TabsTrigger>
              <TabsTrigger value="brand" className="text-xs gap-1.5">
                <Zap size={12} /> Brand & Experience
              </TabsTrigger>
              <TabsTrigger value="digital" className="text-xs gap-1.5">
                <LayoutDashboard size={12} /> Digital Products
              </TabsTrigger>
            </TabsList>

            <TabsContent value="performance">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "ROAS promedio", val: "4.2x",   sub: "+0.8x vs Q1" },
                  { label: "Leads generados", val: "3,840", sub: "+22% MoM" },
                  { label: "Conversión",     val: "3.7%",   sub: "+0.5pts" },
                ].map((m) => (
                  <div key={m.label} className="rounded-lg border border-border bg-muted/30 p-4">
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                    <p className="mt-1 text-xl font-black text-foreground">{m.val}</p>
                    <p className="mt-0.5 text-xs font-medium text-[#1a7a50] dark:text-[#75EFB1]">{m.sub}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="brand">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Proyectos entregados", val: "14",    sub: "Este trimestre" },
                  { label: "Satisfacción cliente",  val: "9.2/10",sub: "+0.4 vs Q1" },
                  { label: "Tiempo promedio",        val: "18 d", sub: "-3 días vs Q1" },
                ].map((m) => (
                  <div key={m.label} className="rounded-lg border border-border bg-muted/30 p-4">
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                    <p className="mt-1 text-xl font-black text-foreground">{m.val}</p>
                    <p className="mt-0.5 text-xs font-medium text-[#0a7e7f] dark:text-[#23F8F7]">{m.sub}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="digital">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Deploys en producción", val: "28",    sub: "Este mes" },
                  { label: "Uptime",                val: "99.9%", sub: "Últimos 90 días" },
                  { label: "Tickets resueltos",      val: "142",   sub: "Avg 4.2 h" },
                ].map((m) => (
                  <div key={m.label} className="rounded-lg border border-border bg-muted/30 p-4">
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                    <p className="mt-1 text-xl font-black text-foreground">{m.val}</p>
                    <p className="mt-0.5 text-xs font-medium text-[#6b5600] dark:text-[#F6E342]">{m.sub}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Quick actions */}
      <div className="flex flex-wrap gap-3">
        <Button className="gap-2"><Users size={14} /> Nuevo cliente</Button>
        <Button variant="outline" className="gap-2"><LineChart size={14} /> Ver reportes</Button>
        <Button variant="ghost" className="gap-2 text-muted-foreground"><Settings size={14} /> Configuración</Button>
      </div>
    </div>
  );
}

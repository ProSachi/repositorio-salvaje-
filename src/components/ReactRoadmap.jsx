import { useState, useMemo } from "react";
import {
  Brain,
  ShieldCheck,
  Puzzle,
  GitBranch,
  Waves,
  Gauge,
  FolderTree,
  ExternalLink,
  Check,
  ChevronDown,
  Sparkles,
  Route,
  Layers,
  ClipboardCheck,
  RefreshCw,
  Palette,
  LayoutGrid,
  FlaskConical,
  CheckSquare,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Datos: contenido derivado de la documentación oficial https://es.react.dev/
// ---------------------------------------------------------------------------

const STAGES = [
  {
    id: "01",
    title: "Piensa en React",
    subtitle: "El modelo mental antes que el código",
    icon: Brain,
    source: "https://es.react.dev/learn/thinking-in-react",
    sourceLabel: "Pensar en React",
    items: [
      "Divide la UI en una jerarquía de componentes: cada uno con una única responsabilidad.",
      "Construye primero una versión estática, sin estado, que solo reciba props.",
      "Identifica el estado mínimo indispensable (DRY): no dupliques lo que puedes calcular en el render.",
      "Decide qué componente 'posee' cada estado y deja que los datos fluyan hacia abajo.",
      "Añade el flujo inverso pasando funciones (callbacks) como props para que los hijos avisen al padre.",
    ],
  },
  {
    id: "02",
    title: "Reglas de React",
    subtitle: "Lo no negociable",
    icon: ShieldCheck,
    source: "https://es.react.dev/reference/rules",
    sourceLabel: "Rules of React",
    items: [
      "Los componentes y los Hooks deben ser puros: mismas entradas, misma salida, sin efectos secundarios en el render.",
      "React es quien llama a tus componentes y Hooks; nunca los invoques como funciones normales.",
      "Llama a los Hooks solo en el nivel superior: nunca dentro de condicionales, bucles o funciones anidadas.",
      "No mutes props, state, ni los valores devueltos por un Hook directamente.",
    ],
  },
  {
    id: "03",
    title: "Componentes y props",
    subtitle: "Composición sobre herencia",
    icon: Puzzle,
    source: "https://es.react.dev/learn/keeping-components-pure",
    sourceLabel: "Manteniendo los componentes puros",
    items: [
      "Mantén los componentes puros y predecibles: sin efectos secundarios durante el renderizado.",
      "Prefiere la composición: pasa componentes como children o como props en lugar de heredar.",
      "Extrae un componente reutilizable en cuanto repitas JSX o lógica similar dos veces.",
      "Usa PascalCase para componentes y camelCase para props; los nombres deben describir su propósito.",
    ],
  },
  {
    id: "04",
    title: "Gestión del estado",
    subtitle: "Un único origen de la verdad",
    icon: GitBranch,
    source: "https://es.react.dev/learn/managing-state",
    sourceLabel: "Gestionar el estado",
    items: [
      "'Levanta el estado' al ancestro común cuando varios componentes deban compartirlo.",
      "Usa useReducer cuando la lógica de actualización tenga muchas transiciones o sea compleja.",
      "Evita estado redundante o contradictorio: deriva los valores calculados durante el render.",
      "Reserva el Context para datos verdaderamente globales (tema, usuario, idioma); no lo uses para todo.",
    ],
  },
  {
    id: "05",
    title: "Efectos y sincronización",
    subtitle: "Puentes hacia el exterior",
    icon: Waves,
    source: "https://es.react.dev/learn/you-might-not-need-an-effect",
    sourceLabel: "Puede que no necesites un Effect",
    items: [
      "Antes de escribir useEffect, pregúntate si puedes resolverlo calculando en el render o en un manejador de eventos.",
      "Un Effect debe sincronizar con un sistema externo (API, DOM, suscripciones), no 'reaccionar' a cambios de estado internos.",
      "Declara todas las dependencias reales del Effect; nunca las silencies con comentarios.",
      "Limpia siempre suscripciones, temporizadores o conexiones en la función de retorno del Effect.",
    ],
  },
  {
    id: "06",
    title: "Rendimiento",
    subtitle: "Optimiza con datos, no por instinto",
    icon: Gauge,
    source: "https://es.react.dev/reference/react/memo",
    sourceLabel: "memo",
    items: [
      "Usa useMemo y useCallback solo cuando el perfilado confirme que hay un problema real de rendimiento.",
      "Envuelve componentes puros y costosos con memo() para evitar renders innecesarios.",
      "Divide el código con React.lazy y Suspense para cargar rutas o componentes bajo demanda.",
      "Usa keys estables y únicas en las listas; evita el índice del array si el orden puede cambiar.",
    ],
  },
  {
    id: "07",
    title: "Estructura y organización",
    subtitle: "Un proyecto que escala",
    icon: FolderTree,
    source: "https://es.react.dev/learn/reusing-logic-with-custom-hooks",
    sourceLabel: "Custom Hooks",
    items: [
      "Organiza por características (feature-based) en vez de por tipo de archivo cuando el proyecto crece.",
      "Coloca tests, estilos y lógica de un componente junto a su archivo principal.",
      "Extrae Hooks personalizados para reutilizar lógica con estado entre componentes.",
      "Configura ESLint con eslint-plugin-react-hooks para aplicar automáticamente las Rules of Hooks.",
    ],
  },
];

const LIBRARY_GROUPS = [
  {
    category: "Enrutamiento",
    icon: Route,
    tools: [
      { name: "React Router", note: "El estándar de facto para rutas, layouts anidados y data loading." },
      { name: "TanStack Router", note: "Enrutamiento con tipado end-to-end y validación de search params." },
    ],
  },
  {
    category: "Estado global",
    icon: Layers,
    tools: [
      { name: "Zustand", note: "API mínima, sin boilerplate, ideal cuando Context se queda corto." },
      { name: "Redux Toolkit", note: "La opción madura para apps grandes con DevTools potentes." },
      { name: "Jotai", note: "Estado atómico, granular, muy ligero para composición fina." },
    ],
  },
  {
    category: "Formularios",
    icon: ClipboardCheck,
    tools: [
      { name: "React Hook Form", note: "Formularios performantes con mínimos re-renders." },
      { name: "Zod", note: "Validación de esquemas con inferencia de tipos automática." },
    ],
  },
  {
    category: "Datos remotos",
    icon: RefreshCw,
    tools: [
      { name: "TanStack Query", note: "Cache, revalidación y sincronización de datos del servidor." },
      { name: "SWR", note: "Alternativa ligera de Vercel con la misma filosofía stale-while-revalidate." },
    ],
  },
  {
    category: "Estilos",
    icon: Palette,
    tools: [
      { name: "Tailwind CSS", note: "Utilidades atómicas para construir interfaces sin salir del JSX." },
    ],
  },
  {
    category: "Componentes UI",
    icon: LayoutGrid,
    tools: [
      { name: "shadcn/ui", note: "Componentes accesibles que copias a tu repo y personalizas libremente." },
      { name: "Radix UI", note: "Primitivas headless y accesibles como base de tu propio design system." },
    ],
  },
  {
    category: "Testing",
    icon: FlaskConical,
    tools: [
      { name: "Vitest", note: "Test runner rápido, compatible con la config de Vite." },
      { name: "React Testing Library", note: "Prueba componentes como los usa una persona real." },
    ],
  },
  {
    category: "Calidad de código",
    icon: CheckSquare,
    tools: [
      { name: "ESLint", note: "Detecta errores y aplica las Rules of Hooks automáticamente." },
      { name: "Prettier", note: "Formato consistente sin discusiones de estilo en el equipo." },
    ],
  },
];

// ---------------------------------------------------------------------------
// Componente principal
// ---------------------------------------------------------------------------

export default function ReactRoadmap() {
  const [openStage, setOpenStage] = useState("01");
  const [checked, setChecked] = useState({});

  const totalItems = useMemo(
    () => STAGES.reduce((acc, s) => acc + s.items.length, 0),
    []
  );
  const totalChecked = Object.values(checked).filter(Boolean).length;
  const progressPct = totalItems ? Math.round((totalChecked / totalItems) * 100) : 0;

  const toggleItem = (stageId, idx) => {
    const key = `${stageId}-${idx}`;
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const stageProgress = (stage) => {
    const done = stage.items.filter((_, idx) => checked[`${stage.id}-${idx}`]).length;
    return { done, total: stage.items.length };
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* ---------------------------------------------------------------- */}
      {/* Hero */}
      {/* ---------------------------------------------------------------- */}
      <header className="relative overflow-hidden border-b border-slate-800 px-6 py-16 sm:px-10">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-800 bg-cyan-950/40 px-3 py-1 font-mono text-xs text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            source: es.react.dev
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Roadmap de buenas prácticas
            <span className="block text-cyan-400">en React</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Una guía en 7 etapas, construida sobre la documentación oficial de React,
            para pasar de escribir componentes que funcionan a escribir componentes
            idiomáticos, predecibles y fáciles de mantener.
          </p>

          {/* Barra de progreso */}
          <div className="mt-8 max-w-md">
            <div className="mb-2 flex items-center justify-between font-mono text-xs text-slate-500">
              <span>PROGRESO</span>
              <span>
                {totalChecked}/{totalItems} · {progressPct}%
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* ---------------------------------------------------------------- */}
      {/* Roadmap */}
      {/* ---------------------------------------------------------------- */}
      <main className="mx-auto max-w-4xl px-6 py-14 sm:px-10">
        <div className="relative">
          {/* línea vertical del roadmap */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-700 via-slate-700 to-slate-800 sm:left-8" />

          <div className="space-y-4">
            {STAGES.map((stage) => {
              const Icon = stage.icon;
              const isOpen = openStage === stage.id;
              const { done, total } = stageProgress(stage);
              const complete = done === total;

              return (
                <div key={stage.id} className="relative pl-16 sm:pl-20">
                  {/* nodo */}
                  <button
                    onClick={() => setOpenStage(isOpen ? null : stage.id)}
                    className={`absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl border-2 transition-colors sm:h-16 sm:w-16 ${
                      complete
                        ? "border-cyan-400 bg-cyan-500/10 text-cyan-300"
                        : isOpen
                        ? "border-cyan-600 bg-slate-900 text-cyan-400"
                        : "border-slate-700 bg-slate-900 text-slate-500"
                    }`}
                    aria-label={`Abrir etapa ${stage.title}`}
                  >
                    {complete ? <Check className="h-5 w-5 sm:h-6 sm:w-6" /> : <Icon className="h-5 w-5 sm:h-6 sm:w-6" />}
                  </button>

                  {/* card */}
                  <div
                    className={`rounded-xl border transition-colors ${
                      isOpen ? "border-slate-700 bg-slate-900/60" : "border-slate-800 bg-slate-900/30"
                    }`}
                  >
                    <button
                      onClick={() => setOpenStage(isOpen ? null : stage.id)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                    >
                      <div>
                        <div className="font-mono text-xs text-cyan-500">{stage.id}</div>
                        <h2 className="text-lg font-semibold text-white sm:text-xl">{stage.title}</h2>
                        <p className="text-sm text-slate-500">{stage.subtitle}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-3">
                        <span className="hidden font-mono text-xs text-slate-500 sm:inline">
                          {done}/{total}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-800 px-5 pb-5 pt-4 sm:px-6">
                        <ul className="space-y-3">
                          {stage.items.map((item, idx) => {
                            const key = `${stage.id}-${idx}`;
                            const isChecked = !!checked[key];
                            return (
                              <li key={key}>
                                <button
                                  onClick={() => toggleItem(stage.id, idx)}
                                  className="flex w-full items-start gap-3 text-left"
                                >
                                  <span
                                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${
                                      isChecked
                                        ? "border-cyan-400 bg-cyan-500/20 text-cyan-300"
                                        : "border-slate-600 text-transparent"
                                    }`}
                                  >
                                    <Check className="h-3.5 w-3.5" />
                                  </span>
                                  <span
                                    className={`text-sm leading-relaxed sm:text-base ${
                                      isChecked ? "text-slate-500 line-through" : "text-slate-300"
                                    }`}
                                  >
                                    {item}
                                  </span>
                                </button>
                              </li>
                            );
                          })}
                        </ul>

                        <a
                          href={stage.source}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-5 inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300"
                        >
                          Leer "{stage.sourceLabel}" en es.react.dev
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* ---------------------------------------------------------------- */}
      {/* Librerías gratuitas */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-t border-slate-800 bg-slate-900/40 px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-amber-800 bg-amber-950/30 px-3 py-1 font-mono text-xs text-amber-300">
            <Sparkles className="h-3.5 w-3.5" />
            08 · caja de herramientas
          </div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Mejores librerías gratuitas para el día a día
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            React es deliberadamente minimalista: no incluye enrutamiento, manejo de
            estado global ni peticiones de datos. Estas son librerías de código abierto
            y gratuitas que la comunidad usa para cubrir esos huecos sin reinventar la rueda.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {LIBRARY_GROUPS.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.category}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-5"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="font-semibold text-white">{group.category}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {group.tools.map((tool) => (
                      <li key={tool.name} className="text-sm">
                        <span className="font-medium text-slate-200">{tool.name}</span>
                        <span className="text-slate-500"> — {tool.note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center font-mono text-xs text-slate-600 sm:px-10">
        Contenido basado en la documentación oficial —{" "}
        <a
          href="https://es.react.dev/"
          target="_blank"
          rel="noreferrer"
          className="text-cyan-500 hover:text-cyan-400"
        >
          es.react.dev
        </a>
      </footer>
    </div>
  );
}
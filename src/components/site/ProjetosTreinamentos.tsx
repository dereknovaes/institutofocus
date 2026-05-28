import { ArrowRight, Clock } from "lucide-react";
import { Reveal } from "./Reveal";

const programas = [
  { nome: "Jovem Programador", carga: "120h", desc: "Lógica de programação e desenvolvimento web para jovens em vulnerabilidade.", dark: false },
  { nome: "Empreender na Comunidade", carga: "80h", desc: "Gestão e finanças para pequenos negócios e empreendedores locais.", dark: true },
  { nome: "Costura Criativa", carga: "60h", desc: "Capacitação em corte, costura e modelagem com foco em geração de renda.", dark: false },
  { nome: "Educação Digital Sênior", carga: "40h", desc: "Inclusão digital para a terceira idade com aulas práticas e acolhedoras.", dark: true },
  { nome: "Esporte e Cidadania", carga: "Anual", desc: "Projeto contínuo de iniciação esportiva e valores para crianças e adolescentes.", dark: false },
  { nome: "Cultura em Movimento", carga: "90h", desc: "Oficinas de música, teatro e artes visuais para expressão e protagonismo juvenil.", dark: true },
];

export function ProjetosTreinamentos() {
  return (
    <section id="projetos" className="bg-secondary/40 py-24">
      <div className="container-page">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span id="treinamentos" className="text-sm font-bold uppercase tracking-widest text-brand">
              Projetos & Treinamentos
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
              Programas que geram oportunidade real
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Iniciativas gratuitas e contínuas que preparam pessoas para o mercado,
            estimulam a cultura e fortalecem a cidadania.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programas.map((p, i) => (
            <Reveal key={p.nome} delay={i * 0.06}>
              <article
                className={`group flex h-full flex-col rounded-3xl border p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${
                  p.dark
                    ? "border-transparent bg-ink text-ink-foreground"
                    : "border-border bg-card text-card-foreground"
                }`}
              >
                <span
                  className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                    p.dark ? "bg-brand text-brand-foreground" : "bg-brand/10 text-brand"
                  }`}
                >
                  <Clock className="h-3.5 w-3.5" /> {p.carga}
                </span>
                <h3 className="mt-5 text-xl font-bold">{p.nome}</h3>
                <p
                  className={`mt-2 flex-1 text-sm leading-relaxed ${
                    p.dark ? "text-ink-muted" : "text-muted-foreground"
                  }`}
                >
                  {p.desc}
                </p>
                <a
                  href="#contato"
                  className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                    p.dark ? "text-brand hover:text-ink-foreground" : "text-brand hover:text-foreground"
                  }`}
                >
                  Saiba Mais
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Calendar } from "lucide-react";
import { Reveal } from "./Reveal";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const noticias = [
  {
    img: news1,
    data: "12 Mai 2025",
    titulo: "Mais de 300 alunos formados em capacitação profissional",
    resumo: "Nova turma celebra conquistas e ingressa no mercado de trabalho com novas qualificações.",
  },
  {
    img: news2,
    data: "28 Abr 2025",
    titulo: "Fórum de Impacto Social reúne lideranças comunitárias",
    resumo: "Evento debateu caminhos para ampliar a inclusão e o desenvolvimento das regiões atendidas.",
  },
  {
    img: news3,
    data: "09 Abr 2025",
    titulo: "Inauguração de novo laboratório de inclusão digital",
    resumo: "Espaço moderno amplia o acesso à tecnologia para crianças, jovens e idosos da comunidade.",
  },
];

export function Noticias() {
  return (
    <section id="noticias" className="bg-background py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand">Notícias</span>
          <h2 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            O que acontece no Instituto
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Acompanhe as últimas conquistas, eventos e marcos da nossa jornada de transformação social.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {noticias.map((n, i) => (
            <Reveal key={n.titulo} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={n.img}
                    alt={n.titulo}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand">
                    <Calendar className="h-3.5 w-3.5" /> {n.data}
                  </span>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-foreground">{n.titulo}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{n.resumo}</p>
                  <a
                    href="#contato"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-foreground"
                  >
                    Ler Mais
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Calendar, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";

const NOTICIA_PRIMEIROS_SOCORROS = "/__l5e/assets-v1/ce7ed758-4f7d-4bb1-9ad9-d9fb214fa487/noticia-primeiros-socorros.png";
const NOTICIA_LINKEDIN = "/__l5e/assets-v1/0f41ec13-35f0-427b-a9a9-7f914e7e0cf8/noticia-linkedin.jpg";

const noticias = [
  {
    img: NOTICIA_PRIMEIROS_SOCORROS,
    data: "25 Jun 2026",
    titulo: "Quando o Perigo Não Avisa, o Conhecimento Protege: Instituto FOCUS Capacita Cidadãos para Enfrentar Situações Críticas",
    resumo:
      "Em Satuba/AL, o Instituto FOCUS levou para a comunidade um treinamento gratuito de Primeiros Socorros, ministrado pela instrutora Adriana Cavalcante. A iniciativa preparou moradores e profissionais locais para agir com segurança em emergências, reforçando o papel da instituição como agente transformador no estado de Alagoas ao unir educação, compromisso social e excelência técnica.",
    fonte: "Marechal Notícias",
    link: "https://www.marechalnoticias.com.br/colunas/ricardo-coelho/quando-o-perigo-nao-avisa-o-conhecimento-protege/",
  },
  {
    img: NOTICIA_LINKEDIN,
    data: "26 Jun 2026",
    titulo: "Destrave seu LinkedIn: Instituto FOCUS oferece curso gratuito de inclusão digital e carreira",
    resumo:
      "O Instituto FOCUS traz para a comunidade o curso “Destrave seu LinkedIn: como fazer a maior rede profissional do mundo trabalhar por você”, ministrado por Ricardo Coelho. Voltado para o público leigo e com linguagem simples, o treinamento ensina, passo a passo, a criar perfil, divulgar experiências e buscar oportunidades de emprego e renda. Novas turmas em agosto de 2026.",
    fonte: "Marechal Notícias",
    link: "https://www.marechalnoticias.com.br/sem-categoria/o-instituto-de-desenvolvimento-sustentavel-educacional-ambiental-e-social-instituto-focus-traz-para-a-comunidade-o-curso/",
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

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {noticias.map((n, i) => (
            <Reveal key={n.titulo} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={n.img}
                    alt={n.titulo}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand">
                    <Calendar className="h-3.5 w-3.5" /> {n.data}
                  </span>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-foreground">{n.titulo}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{n.resumo}</p>
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground">
                      Fonte: <span className="font-semibold text-foreground">{n.fonte}</span>
                    </span>
                    <a
                      href={n.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-foreground"
                    >
                      Ler matéria
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

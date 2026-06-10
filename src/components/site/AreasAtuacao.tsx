import { ArrowUpRight, GraduationCap, HeartHandshake, Briefcase, Trophy, HeartPulse, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import educacao from "@/assets/area-educacao.jpg";
import social from "@/assets/area-social.jpg";
import capacitacao from "@/assets/area-capacitacao.jpg";
import esportes from "@/assets/area-esportes.jpg";
import cultura from "@/assets/area-cultura.jpg";
import comunidade from "@/assets/hero-3.jpg";

const areas = [
  { icon: GraduationCap, title: "Educação", img: educacao, desc: "Programas de alfabetização, reforço escolar e formação continuada para todas as idades." },
  { icon: HeartHandshake, title: "Assistência Social", img: social, desc: "Acolhimento, apoio às famílias e ações que garantem dignidade e direitos básicos." },
  { icon: Briefcase, title: "Capacitação Profissional", img: capacitacao, desc: "Cursos técnicos e qualificação que abrem portas para o mercado de trabalho." },
  { icon: Trophy, title: "Esportes", img: esportes, desc: "Esporte como ferramenta de disciplina, saúde e inclusão para crianças e jovens." },
  { icon: HeartPulse, title: "Saúde", img: cultura, desc: "Atenção primária, prevenção, campanhas de vacinação e cuidado integral com a saúde da comunidade." },
  { icon: Users, title: "Desenvolvimento Comunitário", img: comunidade, desc: "Mobilização e fortalecimento de comunidades por meio do protagonismo coletivo." },
];

export function AreasAtuacao() {
  return (
    <section id="sobre" className="bg-background py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand">
            Sobre Nós · Áreas de Atuação
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            Frentes que transformam realidades
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            O Instituto FOCUS atua de forma integrada em seis grandes frentes,
            unindo educação, inclusão e oportunidade para gerar impacto social duradouro.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, i) => (
            <Reveal key={area.title} delay={i * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={area.img}
                    alt={area.title}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-brand-foreground shadow-brand">
                    <area.icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.desc}</p>
                  <a
                    href="#projetos"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-foreground"
                  >
                    Saiba Mais
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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

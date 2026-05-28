import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import img1 from "@/assets/hero-main.jpg";
import img2 from "@/assets/area-cultura.jpg";
import img3 from "@/assets/news-3.jpg";
import img4 from "@/assets/area-esportes.jpg";

const pillars = [
  "Compromisso com a transparência e a prestação de contas",
  "Metodologia própria orientada a resultados sociais",
  "Equipe multidisciplinar e parcerias de longo prazo",
];

export function DestaqueInstitucional() {
  return (
    <section id="galeria" className="relative overflow-hidden bg-ink py-24 text-ink-foreground">
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand/15 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-0 h-24 w-24 rounded-3xl border border-white/10" />

      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="text-sm font-bold uppercase tracking-widest text-brand">
            Nosso Propósito
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Acreditamos que o conhecimento é a forma mais poderosa de inclusão social.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
            Cada projeto nasce de uma escuta atenta às necessidades reais das
            comunidades. Construímos pontes entre talento e oportunidade,
            transformando potencial em conquista.
          </p>

          <ul className="mt-8 space-y-3">
            {pillars.map((p) => (
              <li key={p} className="flex items-start gap-3 text-ink-foreground/90">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-brand-foreground shadow-brand transition-all hover:-translate-y-0.5"
          >
            Apoie nossa causa
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src={img1} alt="Sala de aula" loading="lazy" width={1024} height={1280} className="h-56 w-full rounded-3xl object-cover shadow-lift" />
              <img src={img4} alt="Esporte comunitário" loading="lazy" width={768} height={768} className="h-44 w-full rounded-3xl object-cover shadow-soft" />
            </div>
            <div className="mt-8 space-y-4">
              <img src={img2} alt="Oficina cultural" loading="lazy" width={768} height={768} className="h-44 w-full rounded-3xl object-cover shadow-soft" />
              <img src={img3} alt="Inclusão digital" loading="lazy" width={1024} height={768} className="h-56 w-full rounded-3xl object-cover shadow-lift" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

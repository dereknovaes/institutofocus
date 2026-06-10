import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroMain from "@/assets/hero-main.jpg";
import hero3 from "@/assets/hero-3.jpg";
import focusLogo from "@/assets/focus-logo.svg";

const stats = [
  { value: "+12 mil", label: "Vidas impactadas" },
  { value: "+85", label: "Projetos realizados" },
  { value: "18 anos", label: "De atuação social" },
  { value: "+40", label: "Parcerias ativas" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background pt-28 lg:pt-32">
      {/* geometric accents */}
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 top-0 h-40 w-40 rounded-full bg-ink/5 blur-2xl" />

      <div className="container-page grid items-center gap-12 pb-16 lg:grid-cols-2 lg:gap-16 lg:pb-24">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/8 px-4 py-1.5 text-sm font-semibold text-brand"
          >
            <Sparkles className="h-4 w-4" />
            Instituto FOCUS · Transformação Social
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl"
          >
            Educação que liberta.{" "}
            <span className="text-brand">Oportunidades</span> que transformam.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Promovemos educação, capacitação profissional e inclusão social com
            projetos de impacto que fortalecem pessoas e comunidades inteiras.
            Nossa missão é abrir caminhos e construir futuros.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#sobre"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-base font-semibold text-brand-foreground shadow-brand transition-all hover:-translate-y-0.5"
            >
              Conheça Mais
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-card px-7 py-3.5 text-base font-semibold text-foreground transition-all hover:border-brand hover:text-brand"
            >
              Nossos Projetos
            </a>
          </motion.div>
        </div>

        {/* image composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            {/* Logo principal — maior e em destaque */}
            <div className="col-span-2 flex items-center justify-center overflow-hidden rounded-3xl bg-white shadow-lift sm:col-span-1 sm:h-[22rem]">
              <img
                src={focusLogo}
                alt="Logo do Instituto FOCUS"
                loading="lazy"
                className="h-56 w-56 object-contain sm:h-64 sm:w-64"
              />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-lift sm:h-[22rem]">
              <img
                src={heroMain}
                alt="Estudantes em sala de aula do Instituto FOCUS"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-soft">
              <img
                src={hero3}
                alt="Comunidade em ação em projeto social"
                loading="lazy"
                width={768}
                height={512}
                className="h-40 w-full object-cover sm:h-44"
              />
            </div>

            <div className="flex flex-col justify-center rounded-3xl bg-ink p-6 text-ink-foreground shadow-lift">
              <p className="text-4xl font-extrabold text-brand">100%</p>
              <p className="mt-1 text-sm text-ink-muted">
                dos participantes recomendam nossos programas
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute -left-5 top-1/2 hidden h-16 w-16 rounded-2xl border-4 border-brand/40 sm:block" />
        </motion.div>
      </div>
  </section>
  );
}

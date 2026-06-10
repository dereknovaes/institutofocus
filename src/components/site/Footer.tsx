import { Instagram, Facebook, Linkedin, Youtube, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import logoWhite from "@/assets/focus-logo-white.svg";

const quickLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Treinamentos", href: "#treinamentos" },
  { label: "Notícias", href: "#noticias" },
  { label: "Galeria", href: "#galeria" },
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer id="contato" className="bg-ink text-ink-foreground">
      {/* CTA band */}
      <div className="container-page">
        <Reveal>
          <div className="-mt-px flex flex-col items-center justify-between gap-6 rounded-3xl bg-brand px-8 py-10 text-center shadow-brand md:flex-row md:text-left lg:px-12">
            <div>
              <h3 className="text-2xl font-extrabold text-brand-foreground sm:text-3xl">
                Vamos transformar realidades juntos?
              </h3>
              <p className="mt-2 text-brand-foreground/90">
                Seja voluntário, parceiro ou apoiador. Fale com o Instituto FOCUS.
              </p>
            </div>
            <a
              href="mailto:Institutofocus.ne@gmail.com"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-base font-semibold text-ink-foreground transition-all hover:-translate-y-0.5"
            >
              Fale Conosco
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>

      <div className="container-page grid gap-12 py-16 md:grid-cols-3 lg:gap-16">
        <div>
          <img src={logoWhite} alt="Instituto FOCUS" className="h-16 w-auto" width={64} height={80} />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
            Instituto FOCUS é uma organização sem fins lucrativos dedicada à
            educação, capacitação e inclusão social para a transformação de comunidades.
            <span className="mt-2 block text-brand font-medium">Instituição desde 2008.</span>
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ink-foreground transition-all hover:border-brand hover:bg-brand hover:text-brand-foreground"
              >
                <s.icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand">Navegação</h4>
          <ul className="mt-5 grid grid-cols-2 gap-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-ink-muted transition-colors hover:text-ink-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-brand">Contato</h4>
          <ul className="mt-5 space-y-4 text-sm text-ink-muted">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand" />
              <span>Rua Professor Guedes de Miranda, 161 — Farol, Maceió / AL</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4.5 w-4.5 shrink-0 text-brand" />
              <a href="tel:+5582991983993" className="hover:text-ink-foreground">(82) 99198-3993</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4.5 w-4.5 shrink-0 text-brand" />
              <a href="mailto:Institutofocus.ne@gmail.com" className="hover:text-ink-foreground">
                Institutofocus.ne@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-sm text-ink-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Instituto FOCUS. Todos os direitos reservados. CNPJ 10.263.839/0001-76</p>
          <p>Educação · Inclusão · Transformação Social</p>
        </div>
      </div>
    </footer>
  );
}

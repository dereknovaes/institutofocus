import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "@/assets/focus-logo.svg";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Treinamentos", href: "#treinamentos" },
  { label: "Notícias", href: "#noticias" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Instituto FOCUS" className="h-12 w-auto" width={48} height={60} />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-brand"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="group hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-brand transition-all hover:-translate-y-0.5 lg:inline-flex"
        >
          Fale Conosco
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-foreground/80 hover:bg-secondary hover:text-brand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="px-1 pt-2">
                <a
                  href="#contato"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground"
                >
                  Fale Conosco <ArrowRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

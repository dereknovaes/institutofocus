import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { AreasAtuacao } from "@/components/site/AreasAtuacao";
import { DestaqueInstitucional } from "@/components/site/DestaqueInstitucional";
import { ProjetosTreinamentos } from "@/components/site/ProjetosTreinamentos";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instituto FOCUS — Educação, Inclusão e Transformação Social" },
      {
        name: "description",
        content:
          "Instituto FOCUS promove educação, capacitação profissional e inclusão social com projetos de alto impacto que transformam pessoas e comunidades.",
      },
      { property: "og:title", content: "Instituto FOCUS — Transformação Social" },
      {
        property: "og:description",
        content:
          "Educação, capacitação e inclusão social que transformam comunidades. Conheça os projetos do Instituto FOCUS.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: "Instituto FOCUS",
          description:
            "Organização dedicada à educação, capacitação profissional e inclusão social.",
          areaServed: "Brasil",
          sameAs: [],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AreasAtuacao />
        <DestaqueInstitucional />
        <ProjetosTreinamentos />
      </main>
      <Footer />
    </div>
  );
}

const legalSections = [
  {
    title: "Éditeur du site",
    description: (
      <div className="space-y-2 text-sm md:text-base text-muted-foreground">
        <p className="text-primary font-semibold">Probooster, une branche de l'ONG Impact Horizon</p>
        <p className="font-medium">Représenté par :</p>
        <p>AISSI Asthedio</p>
        <p>Développement web &amp; applications</p>
        <p>+229 96 56 74 36</p>
        <p>
          <span className="font-medium text-foreground">Email :</span>{" "}
          <a href="mailto:asthedio@gmail.com" className="underline-offset-4 hover:underline">
            asthedio@gmail.com
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "Responsable de la publication",
    description: "L'équipe Probooster, joignable via les coordonnées ci-dessus.",
  },
  {
    title: "Hébergement",
    description: (
      <div className="space-y-1 text-sm md:text-base text-muted-foreground">
        <p>Netlify, Inc.</p>
        <p>2325 3rd Street, Suite 296, San Francisco, CA 94107, États-Unis</p>
        <p>
          Plateforme :{" "}
          <a
            href="https://app.netlify.com/"
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:underline"
          >
            https://app.netlify.com/
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "Activité",
    description:
      "Probooster, une branche de l'ONG Impact Horizon, accompagne les professionnels béninois avec des formations clés (décoration d'intérieur, couture, esthétique, pâtisserie, montage vidéo, développement web, électricité bâtiment…) et un catalogue de produits sélectionnés pour soutenir leur croissance.",
  },
  {
    title: "Propriété intellectuelle",
    description:
      "Textes, visuels, logos et ressources pédagogiques sont la propriété exclusive de Probooster ou de ses partenaires. Toute reproduction sans accord préalable est interdite.",
  },
  {
    title: "Données personnelles",
    description:
      "Les informations collectées via nos formulaires servent à traiter vos demandes et à assurer le suivi commercial. Vous disposez d'un droit d'accès, de rectification et de suppression en écrivant à contact@probooster.online.",
  },
  {
    title: "Cookies",
    description:
      "Des cookies techniques peuvent être utilisés pour garantir une navigation fluide. Vous pouvez configurer votre navigateur pour bloquer ou être informé de leur installation.",
  },
  {
    title: "Crédits",
    description:
      "Conception et contenus : équipe Probooster. Visuels issus de la médiathèque Probooster et de ressources libres de droits.",
  },
]

export default function MentionsLegalesPage() {
  const year = new Date().getFullYear()

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/40 to-background py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 mx-auto h-64 w-[36rem] rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />

      <div className="container relative mx-auto px-4">
        <section className="mx-auto max-w-3xl rounded-3xl border bg-background/80 p-8 shadow-xl shadow-primary/10 backdrop-blur">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Transparence &amp; confiance
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Mentions légales</h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Toutes les informations officielles relatives à la plateforme Probooster : identité de l&apos;éditeur, propriété
            intellectuelle et engagements vis-à-vis de vos données.
          </p>
        </section>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {legalSections.map((section) => (
            <section
              key={section.title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-y-0 right-0 w-32 translate-x-16 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition group-hover:translate-x-10 group-hover:opacity-100" />
              <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
              <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{section.description}</div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-6 text-sm text-muted-foreground">
          Dernière mise à jour : {year}
        </div>
      </div>
    </div>
  )
}

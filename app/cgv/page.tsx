import {
  FileText,
  GraduationCap,
  ShoppingBag,
  ShieldCheck,
  Lock,
  ScrollText,
  Gavel,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

const sections = [
  {
    id: "objet",
    title: "1. Objet",
    icon: FileText,
    description:
      "Les présentes Conditions Générales de Vente (CGV) encadrent les relations entre Probooster, une branche de l'ONG Impact Horizon, et ses clients dans le cadre de la vente de formations et de produits.",
  },
  {
    id: "formations",
    title: "2. Formations",
    icon: GraduationCap,
    items: [
      {
        subtitle: "2.1 Inscription",
        body:
          "L'inscription se réalise via le formulaire en ligne. Elle devient effective après validation par Probooster et réception intégrale du paiement.",
      },
      {
        subtitle: "2.2 Tarifs",
        body:
          "Les tarifs sont exprimés en francs CFA (XOF). Ils peuvent évoluer, mais le prix appliqué reste celui affiché au moment de l'inscription.",
      },
      {
        subtitle: "2.3 Modalités de paiement",
        body:
          "Le règlement est possible par virement bancaire, mobile money ou en espèces dans nos locaux. Un reçu officiel est remis pour chaque paiement.",
      },
      {
        subtitle: "2.4 Annulation et remboursement",
        body:
          "Toute annulation notifiée par écrit au moins 7 jours avant la formation donne droit à un remboursement de 50 %. Au-delà, aucun remboursement n'est possible.",
      },
    ],
  },
  {
    id: "produits",
    title: "3. Produits",
    icon: ShoppingBag,
    items: [
      {
        subtitle: "3.1 Commande",
        body:
          "Les produits sont proposés sur demande. Contactez-nous via le bouton \"Contactez le vendeur\" ou par email pour valider votre commande.",
      },
      {
        subtitle: "3.2 Prix",
        body:
          "Les prix sont communiqués sur devis et peuvent varier selon la disponibilité. Ils sont indiqués en francs CFA (XOF) toutes taxes comprises.",
      },
      {
        subtitle: "3.3 Livraison",
        body:
          "Les modalités et frais de livraison sont précisés lors de la commande. Les délais annoncés sont donnés à titre indicatif.",
      },
      {
        subtitle: "3.4 Garantie",
        body:
          "Sauf mention contraire, les produits sont garantis contre les vices cachés. La garantie n'inclut pas l'usure normale ni les dommages dus à une mauvaise utilisation.",
      },
    ],
  },
  {
    id: "responsabilite",
    title: "4. Responsabilité",
    icon: ShieldCheck,
    description:
      "Probooster garantit la qualité de ses formations et produits. Sa responsabilité ne peut toutefois être engagée en cas de force majeure ou de faits indépendants de sa volonté.",
  },
  {
    id: "donnees",
    title: "5. Protection des données personnelles",
    icon: Lock,
    description:
      "Les informations collectées servent uniquement au traitement des commandes et inscriptions. Elles restent strictement confidentielles. Vous disposez d'un droit d'accès, de rectification et de suppression.",
  },
  {
    id: "propriete",
    title: "6. Propriété intellectuelle",
    icon: ScrollText,
    description:
      "Textes, supports, visuels et logos sont la propriété exclusive de Probooster. Toute reproduction ou diffusion sans autorisation écrite est interdite.",
  },
  {
    id: "litiges",
    title: "7. Droit applicable et litiges",
    icon: Gavel,
    description:
      "Les CGV sont régies par le droit béninois. En cas de différend, une solution amiable est privilégiée avant toute action judiciaire. À défaut, les tribunaux béninois sont compétents.",
  },
]

const contactDetails = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+229 51 65 16 78",
    href: "tel:+22951651678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@probooster.online",
    href: "mailto:contact@probooster.online",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Bénin",
  },
]

// CGVPage présente les conditions générales de vente de Probooster avec une mise en page structurée et lisible.
export default function CGVPage() {
  const lastUpdate = new Date().toLocaleDateString("fr-FR")

  return (
    <div className="bg-gradient-to-b from-primary/5 via-background to-background py-12 md:py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-secondary px-6 py-10 text-primary-foreground shadow-xl md:px-10">
          <div className="md:max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/80">Cadre contractuel</p>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Conditions Générales de Vente Probooster
            </h1>
            <p className="mt-4 text-base md:text-lg text-primary-foreground/85">
              Transparence, respect du droit béninois et accompagnement sur mesure : découvrez les règles qui encadrent nos formations et la vente de nos produits.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {sections.slice(0, 4).map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group flex items-center gap-3 rounded-2xl bg-white/15 px-4 py-3 text-sm font-medium text-primary-foreground transition hover:bg-white/30"
              >
                <span className="rounded-full bg-white/20 p-2 text-primary-foreground">
                  <section.icon className="h-5 w-5" />
                </span>
                <span className="leading-tight group-hover:underline">{section.title}</span>
              </a>
            ))}
          </div>
        </section>

        <div className="mt-12 grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <span className="rounded-xl bg-primary/15 p-3 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="text-2xl font-semibold text-secondary">{section.title}</h2>
                      {section.description && (
                        <p className="mt-3 text-base leading-loose text-muted-foreground">{section.description}</p>
                      )}
                    </div>
                  </div>

                  {section.items && (
                    <div className="mt-6 space-y-5">
                      {section.items.map((item) => (
                        <div key={item.subtitle} className="rounded-lg border border-dashed border-border/70 bg-muted/20 p-4">
                          <h3 className="text-lg font-semibold text-secondary">{item.subtitle}</h3>
                          <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.body}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              )
            })}

            <section
              id="contact"
              className="rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 via-white to-secondary/10 p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="rounded-xl bg-primary text-primary-foreground p-3">
                  <Mail className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="text-2xl font-semibold text-secondary">8. Contact</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    Une question sur ces conditions ou besoin d'un accompagnement personnalisé ? Nos équipes sont à votre écoute.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {contactDetails.map((item) => {
                  const Icon = item.icon
                  const content = (
                    <div className="space-y-1">
                      <span className="text-xs font-semibold uppercase tracking-wide text-secondary/80">{item.label}</span>
                      <p className="text-base font-medium text-secondary">{item.value}</p>
                    </div>
                  )

                  return (
                    <div key={item.label} className="flex gap-3 rounded-lg bg-white/70 p-3 text-secondary shadow-sm">
                      <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <Icon className="h-4 w-4" />
                      </span>
                      {item.href ? (
                        <a href={item.href} className="flex-1 text-secondary transition hover:text-primary">
                          {content}
                        </a>
                      ) : (
                        <div className="flex-1">{content}</div>
                      )}
                    </div>
                  )
                })}
              </div>
            </section>

            <div className="rounded-2xl border border-border/80 bg-white/95 p-5 text-sm text-muted-foreground">
              <p>Dernière mise à jour : {lastUpdate}</p>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-secondary">Sommaire rapide</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="flex items-center gap-2 hover:text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                        {section.title}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#contact" className="flex items-center gap-2 hover:text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />8. Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-primary/40 bg-primary/10 p-6 text-secondary shadow-sm">
                <h3 className="text-lg font-semibold">Besoin d'une offre sur-mesure ?</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Nous adaptons nos formations et nos produits à vos objectifs. Laissez-nous un message et notre équipe vous recontacte sous 48 h.
                </p>
                <a
                  href="/contact"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Contacter Probooster
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

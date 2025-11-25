const privacySections = [
  {
    title: "Introduction",
    description:
      "Probooster, une branche de l'ONG Impact Horizon, protège la confidentialité de vos informations. Cette politique explique comment vos données sont collectées, utilisées et sécurisées lorsque vous naviguez sur notre plateforme et suivez nos formations.",
  },
  {
    title: "Données collectées",
    description: (
      <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
        <li>Formulaire de contact : nom, email, sujet et message.</li>
        <li>Formulaire “Contactez le vendeur” : nom, email, message et références produit.</li>
        <li>Inscription aux formations : nom, email, téléphone et message facultatif.</li>
        <li>Création de compte : email et mot de passe gérés par Supabase Auth.</li>
      </ul>
    ),
  },
  {
    title: "Utilisation des données",
    description: (
      <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
        <li>Répondre à vos demandes et assurer le suivi de votre dossier.</li>
        <li>Gérer votre accès aux formations et à votre espace client.</li>
        <li>Partager nos actualités lorsque vous y avez consenti.</li>
      </ul>
    ),
  },
  {
    title: "Partage des données",
    description:
      "Vos informations restent entre les mains de Probooster. Elles sont partagées avec nos partenaires (formateurs, prestataires logistiques) uniquement lorsque cela est indispensable au service et dans le respect de la loi.",
  },
  {
    title: "Durée de conservation",
    description:
      "Vos données sont conservées pendant la durée nécessaire à la relation client, puis archivées ou supprimées conformément aux obligations légales.",
  },
  {
    title: "Vos droits",
    description: (
      <p className="text-sm text-muted-foreground">
        Vous pouvez demander l’accès, la rectification ou la suppression de vos données, et vous opposer à leur traitement. Contactez-nous à{' '}
        <a href="mailto:contact@probooster.online" className="underline-offset-4 hover:underline">
          contact@probooster.online
        </a>
        .
      </p>
    ),
  },
  {
    title: "Sécurité",
    description:
      "Probooster, en tant que branche de l'ONG Impact Horizon, applique des mesures techniques et organisationnelles pour prévenir toute perte, utilisation abusive ou accès non autorisé à vos données.",
  },
  {
    title: "Cookies",
    description:
      "Des cookies techniques peuvent être utilisés pour garantir une navigation fluide. Vous pouvez paramétrer votre navigateur afin de bloquer ou d’être informé de leur installation.",
  },
  {
    title: "Contact",
    description: (
      <p className="text-sm text-muted-foreground">
        Une question ? Écrivez-nous à{' '}
        <a href="mailto:contact@probooster.online" className="underline-offset-4 hover:underline">
          contact@probooster.online
        </a>{' '}
        ou appelez le{' '}
        <a href="tel:+22951651678" className="underline-offset-4 hover:underline">
          +229 51 65 16 78
        </a>
        .
      </p>
    ),
  },
]

export default function PolitiqueConfidentialitePage() {
  const year = new Date().getFullYear()

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 mx-auto h-64 w-[34rem] rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

      <div className="container relative mx-auto px-4">
        <section className="mx-auto max-w-3xl rounded-3xl border bg-background/80 p-8 shadow-xl shadow-primary/10 backdrop-blur">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Protection des données
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Politique de confidentialité</h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Découvrez comment Probooster veille sur vos informations personnelles à chaque étape de votre parcours.
          </p>
        </section>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {privacySections.map((section) => (
            <section
              key={section.title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
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

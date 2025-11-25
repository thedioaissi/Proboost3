import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Award, Heart } from "lucide-react"

export default function AProposPage() {
  const values = [
    {
      icon: Target,
      title: "Notre Mission",
      description: "Accompagner les entrepreneurs et professionnels béninois dans leur développement",
    },
    {
      icon: Users,
      title: "Notre Équipe",
      description: "Des formateurs expérimentés et passionnés, experts dans leurs domaines",
    },
    {
      icon: Award,
      title: "Notre Expertise",
      description: "Plus de 10 ans d'expérience dans la formation professionnelle",
    },
    {
      icon: Heart,
      title: "Nos Valeurs",
      description: "Excellence, intégrité et engagement envers la réussite de nos apprenants",
    },
  ]

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            À propos de <span className="text-primary">Probooster</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Votre partenaire de confiance pour la formation professionnelle et le commerce au Bénin
          </p>
          <p className="text-primary font-medium mt-2">
            Probooster, une branche de l'ONG Impact Horizon
          </p>
        </div>

        {/* Image Section */}
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-16">
          <Image
            src="/african-business-people-in-training-session-profes.jpg"
            alt="Équipe Probooster en séance de formation"
            fill
            className="object-cover"
          />
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Notre Histoire</h2>
          <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-pretty">
              Probooster, une branche de l'ONG Impact Horizon, est né d'une vision simple mais ambitieuse : offrir aux professionnels et entrepreneurs
              béninois les outils et compétences nécessaires pour exceller dans leurs domaines.
            </p>
            <p className="text-pretty">
              Depuis notre création, nous avons formé des centaines de personnes à travers diverses disciplines, de la
              décoration d'intérieur au développement web, en passant par la pâtisserie et l'électricité.
            </p>
            <p className="text-pretty">
              Notre catalogue de produits complète notre offre de formation en proposant des articles de qualité,
              soigneusement sélectionnés pour répondre aux besoins de nos clients.
            </p>
            <p className="text-pretty">
              Aujourd'hui, Probooster est reconnu comme un acteur majeur de la formation professionnelle au Bénin, avec
              une réputation d'excellence et un engagement sans faille envers la réussite de nos apprenants.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Ce qui nous définit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{value.title}</h3>
                      <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Probooster en chiffres</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <p className="text-sm opacity-90">Étudiants formés</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">7</div>
              <p className="text-sm opacity-90">Formations proposées</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <p className="text-sm opacity-90">Années d'expérience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <p className="text-sm opacity-90">Taux de satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

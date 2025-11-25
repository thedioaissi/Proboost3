import { notFound } from "next/navigation"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Award, CheckCircle } from "lucide-react"
import { RegistrationForm } from "@/components/registration-form"

const formationsData: Record<string, any> = {
  "decoration-interieur": {
    name: "Décoration d'intérieurs",
    description: "Formation complète en décoration d'intérieur et aménagement d'espaces",
    duration: "3 mois",
    level: "Débutant à intermédiaire",
    participants: "15 max",
    image: "/african-interior-design-decoration-elegant-living-.jpg",
    objectives: [
      "Comprendre les principes de base du design d'intérieur",
      "Maîtriser les techniques d'aménagement d'espace",
      "Apprendre à choisir couleurs, textures et matériaux",
      "Créer des projets complets de A à Z",
    ],
    program: [
      "Théorie du design et histoire de la décoration",
      "Techniques de dessin et planification",
      "Choix des matériaux et mobilier",
      "Projet final avec clients réels",
    ],
  },
  couture: {
    name: "Couture",
    description: "Apprenez l'art de la couture et de la création de mode",
    duration: "4 mois",
    level: "Tous niveaux",
    participants: "12 max",
    image: "/african-woman-sewing-machine-fashion-colorful-fabr.jpg",
    objectives: [
      "Maîtriser les techniques de couture de base",
      "Créer des vêtements sur mesure",
      "Comprendre les patrons et mesures",
      "Développer votre style créatif",
    ],
    program: [
      "Techniques de couture fondamentales",
      "Prise de mesures et création de patrons",
      "Confection de vêtements complets",
      "Finitions et retouches professionnelles",
    ],
  },
  esthetique: {
    name: "Esthétique",
    description: "Formation complète en soins esthétiques et bien-être",
    duration: "3 mois",
    level: "Débutant",
    participants: "10 max",
    image: "/african-beauty-salon-spa-treatment-skincare-profes.jpg",
    objectives: [
      "Maîtriser les soins du visage et du corps",
      "Techniques de massage et relaxation",
      "Conseil personnalisé en cosmétologie",
      "Gestion d'un salon d'esthétique",
    ],
    program: [
      "Anatomie et physiologie de la peau",
      "Techniques de soins esthétiques",
      "Massage et bien-être",
      "Hygiène et sécurité professionnelle",
    ],
  },
  patisserie: {
    name: "Pâtisserie et cuisine",
    description: "Devenez expert en pâtisserie et arts culinaires",
    duration: "3 mois",
    level: "Tous niveaux",
    participants: "12 max",
    image: "/african-chef-pastry-baking-desserts-professional-k.jpg",
    objectives: [
      "Techniques de pâtisserie française et locale",
      "Création de desserts sophistiqués",
      "Gestion d'une cuisine professionnelle",
      "Hygiène et sécurité alimentaire",
    ],
    program: ["Bases de la pâtisserie", "Viennoiseries et pains", "Gâteaux et entremets", "Décoration et présentation"],
  },
  "montage-video": {
    name: "Montage vidéo",
    description: "Créez du contenu vidéo professionnel pour tous supports",
    duration: "2 mois",
    level: "Débutant à intermédiaire",
    participants: "15 max",
    image: "/african-video-editor-computer-screens-creative-wor.jpg",
    objectives: [
      "Maîtriser les logiciels de montage vidéo",
      "Créer du contenu pour réseaux sociaux",
      "Techniques de storytelling visuel",
      "Post-production et effets spéciaux",
    ],
    program: [
      "Introduction au montage vidéo",
      "Adobe Premiere Pro / DaVinci Resolve",
      "Techniques avancées et effets",
      "Projet final : création d'un court-métrage",
    ],
  },
  "developpement-web": {
    name: "Développement web",
    description: "Devenez développeur web full-stack",
    duration: "6 mois",
    level: "Débutant",
    participants: "20 max",
    image: "/african-developer-programming-coding-computer-work.jpg",
    objectives: [
      "Maîtriser HTML, CSS et JavaScript",
      "Créer des sites web responsives",
      "Développement back-end avec Node.js",
      "Déploiement et maintenance de sites",
    ],
    program: [
      "Fondamentaux du web (HTML/CSS)",
      "JavaScript et programmation",
      "Frameworks modernes (React, Next.js)",
      "Base de données et déploiement",
    ],
  },
  electricite: {
    name: "Électricité bâtiment",
    description: "Formation technique en installation électrique",
    duration: "4 mois",
    level: "Débutant",
    participants: "10 max",
    image: "/placeholder.svg?height=500&width=800",
    objectives: [
      "Comprendre les normes électriques",
      "Installation électrique résidentielle",
      "Maintenance et dépannage",
      "Sécurité et prévention des risques",
    ],
    program: [
      "Bases de l'électricité",
      "Lecture de schémas électriques",
      "Installation et câblage",
      "Dépannage et maintenance",
    ],
  },
}

export default async function FormationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const formation = formationsData[id]

  if (!formation) {
    notFound()
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Image */}
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-8">
          <Image
            src={formation.image || "/placeholder.svg"}
            alt={formation.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 text-balance">{formation.name}</h1>
            <p className="text-lg text-white/90 text-pretty">{formation.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6 flex items-center gap-3">
                  <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Durée</p>
                    <p className="font-semibold">{formation.duration}</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 flex items-center gap-3">
                  <Users className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Places</p>
                    <p className="font-semibold">{formation.participants}</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 flex items-center gap-3">
                  <Award className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Niveau</p>
                    <p className="font-semibold">{formation.level}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Objectives */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Objectifs de la formation</h2>
                <ul className="space-y-3">
                  {formation.objectives.map((objective: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-pretty leading-relaxed">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Program */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4">Programme</h2>
                <ul className="space-y-3">
                  {formation.program.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold">{index + 1}</span>
                      </div>
                      <span className="pt-1 text-pretty leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Registration Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <Card className="border-2 border-primary">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">Inscription</h2>
                  <RegistrationForm formationName={formation.name} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

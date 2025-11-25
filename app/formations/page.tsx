import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const formations = [
  {
    id: "decoration-interieur",
    name: "Décoration d'intérieurs",
    description: "Apprenez l'art de sublimer les espaces de vie et professionnels",
    duration: "3 mois",
    image: "/african-interior-design-decoration-colorful-tradit.jpg",
  },
  {
    id: "couture",
    name: "Couture",
    description: "Maîtrisez les techniques de couture et création de mode",
    duration: "4 mois",
    image: "/african-woman-sewing-fashion-tailoring-colorful-fa.jpg",
  },
  {
    id: "esthetique",
    name: "Esthétique",
    description: "Formation complète en soins esthétiques et cosmétologie",
    duration: "3 mois",
    image: "/african-beauty-salon-esthetics-skincare-treatment.jpg",
  },
  {
    id: "patisserie",
    name: "Pâtisserie et cuisine",
    description: "Découvrez les secrets de la gastronomie et pâtisserie",
    duration: "3 mois",
    image: "/african-chef-baking-pastry-cooking-kitchen-profess.jpg",
  },
  {
    id: "montage-video",
    name: "Montage vidéo",
    description: "Créez du contenu vidéo professionnel pour tous supports",
    duration: "2 mois",
    image: "/african-video-editing-computer-creative-content-pr.jpg",
  },
  {
    id: "developpement-web",
    name: "Développement web",
    description: "Devenez développeur web et créez des sites modernes",
    duration: "6 mois",
    image: "/african-developer-coding-programming-computer-tech.jpg",
  },
  {
    id: "electricite",
    name: "Électricité bâtiment",
    description: "Formation technique en installation électrique",
    duration: "4 mois",
    image: "/african-electrician-working-building-installation-.jpg",
  },
]

export default function FormationsPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="text-primary">Formations</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Développez vos compétences professionnelles avec des formations adaptées au marché béninois
          </p>
        </div>

        {/* Formations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formations.map((formation) => (
            <Card key={formation.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={formation.image || "/placeholder.svg"} alt={formation.name} fill className="object-cover" />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{formation.name}</h3>
                <p className="text-muted-foreground mb-3 text-pretty leading-relaxed">{formation.description}</p>
                <p className="text-sm text-primary font-medium">Durée : {formation.duration}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/formations/${formation.id}`} className="w-full">
                  <Button className="w-full">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

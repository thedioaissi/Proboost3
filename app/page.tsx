import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, GraduationCap, ShoppingBag, Award } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const features = [
    {
      icon: GraduationCap,
      title: "Formations Professionnelles",
      description: "Développez vos compétences avec nos formations certifiantes",
    },
    {
      icon: ShoppingBag,
      title: "Catalogue Produits",
      description: "Découvrez notre sélection de produits de qualité",
    },
    {
      icon: Award,
      title: "Expertise Locale",
      description: "Un accompagnement adapté au contexte béninois",
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Ordinateur portable",
      category: "electronique",
      image: "/modern-laptop-computer-on-desk.jpg",
    },
    {
      id: 2,
      name: "Tenue traditionnelle",
      category: "mode",
      image: "/colorful-african-traditional-clothing-dashiki.jpg",
    },
    {
      id: 3,
      name: "Beurre de karité",
      category: "beaute",
      image: "/natural-shea-butter-in-bowl-skincare.jpg",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/15 via-white to-secondary/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                Boostez votre avenir avec{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Probooster
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
                Formations professionnelles et produits de qualité pour entrepreneurs et particuliers au Bénin
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/formations">
                  <Button size="lg" className="w-full sm:w-auto">
                    Découvrir nos formations
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/produits">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Voir le catalogue
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-primary font-medium mt-4 text-center sm:text-left">
                Probooster, une branche de l'ONG Impact Horizon
              </p>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/african-business-people-in-training-session-profes.jpg"
                alt="Formation professionnelle"
                fill
                className="object-cover rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
              Pourquoi choisir Probooster ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Nous combinons expertise locale et standards internationaux pour votre réussite
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.title}
                  className="border border-border/80 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-primary/80 hover:shadow-lg"
                >
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="rounded-full bg-primary/15 p-3">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground text-pretty leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Produits vedettes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Découvrez une sélection de nos meilleurs produits
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden border border-border/80 bg-white transition-all hover:-translate-y-1 hover:border-primary/80 hover:shadow-lg"
              >
                <div className="relative h-64">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
                  <Link href={`/produits/${product.category}`}>
                    <Button className="w-full">
                      Voir les détails
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/produits">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Voir tout le catalogue
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Prêt à commencer votre transformation ?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty leading-relaxed opacity-90">
            Rejoignez des centaines d'entrepreneurs et professionnels qui ont boosté leur carrière avec Probooster
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Contactez-nous
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

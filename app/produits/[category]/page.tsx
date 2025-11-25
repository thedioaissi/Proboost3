import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { getCategoryById } from "@/lib/data/products"

/** Affiche la liste des produits d'une catégorie donnée. */
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }> | { category: string }
}) {
  const { category } = await Promise.resolve(params)
  const categoryData = getCategoryById(category)

  if (!categoryData) {
    notFound()
  }

  const heroImage = categoryData.categoryImage ?? categoryData.image ?? "/placeholder.svg"

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryData.name}</h1>
          <p className="text-lg text-muted-foreground">Découvrez notre sélection dans cette catégorie</p>
        </div>

        {/* Category Image */}
        {heroImage && (
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-12">
            <Image src={heroImage} alt={categoryData.name} fill className="object-cover" />
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-3 text-pretty leading-relaxed">{product.shortDescription}</p>
                <p className="text-lg font-bold text-primary">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/produits/${category}/${product.id}`} className="w-full">
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

"use client"

import type React from "react"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, ArrowLeft, Package, Shield, Truck, CheckCircle } from "lucide-react"
import { use, useEffect, useMemo, useState, type Usable } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { getCategoryById, getProductById } from "@/lib/data/products"

const FALLBACK_IMAGE = "/placeholder.svg?height=600&width=600"

/** Affiche le détail d'un produit en fonction des paramètres dynamiques de catégorie et d'identifiant. */
export default function ProductDetailPage({
  params,
}: {
  params: Usable<{ category: string; id: string }>
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const { category, id } = use(params)

  const categoryData = getCategoryById(category)
  const product = categoryData ? getProductById(category, id) : undefined
  const galleryImages = useMemo(() => {
    if (!product) {
      return [FALLBACK_IMAGE]
    }

    const images = product.gallery?.length ? product.gallery : [product.image]
    return images.filter(Boolean).length ? (images.filter(Boolean) as string[]) : [FALLBACK_IMAGE]
  }, [product])

  const [activeImage, setActiveImage] = useState<string>(() => galleryImages[0] ?? FALLBACK_IMAGE)

  useEffect(() => {
    setActiveImage(galleryImages[0] ?? FALLBACK_IMAGE)
  }, [galleryImages])

  if (!categoryData || !product) {
    notFound()
  }

  const safeActiveImage = galleryImages.includes(activeImage) ? activeImage : galleryImages[0]

  /** Soumet la demande de contact vendeur à l'API interne. */
  const handleContactSeller = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/product-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          categoryId: category,
          productId: id,
          productName: product.name,
          productPrice: product.price,
          customerName: formData.name,
          customerEmail: formData.email,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({ error: "Une erreur est survenue" }))
        throw new Error(data.error || "Impossible d'envoyer la demande")
      }

      setIsSuccess(true)
      setFormData({ name: "", email: "", message: "" })
    } catch (err) {
      console.error("[product detail] Error submitting product inquiry:", err)
      setError(err instanceof Error ? err.message : "Une erreur est survenue")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/produits" className="text-primary hover:underline">
            Produits
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link href={`/produits/${category}`} className="text-primary hover:underline">
            {categoryData.name}
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="text-muted-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link href={`/produits/${category}`}>
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à la catégorie
          </Button>
        </Link>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Image */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src={safeActiveImage || FALLBACK_IMAGE} alt={product.name} fill className="object-cover" />
            </div>
            {galleryImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {galleryImages.map((imageSrc) => (
                  <button
                    key={imageSrc}
                    type="button"
                    onClick={() => setActiveImage(imageSrc)}
                    className={`relative aspect-square overflow-hidden rounded-md border transition-all ${activeImage === imageSrc ? "border-primary ring-2 ring-primary" : "border-transparent"}`}
                  >
                    <Image src={imageSrc || FALLBACK_IMAGE} alt={`${product.name} - aperçu`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-primary mb-4">{product.price}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">{product.fullDescription}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Caractéristiques</h3>
              <ul className="space-y-2">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <Button size="lg" className="w-full" onClick={() => setIsDialogOpen(true)}>
                <Mail className="mr-2 h-5 w-5" />
                Contactez le vendeur
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Notre équipe vous répondra dans les plus brefs délais
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Produit de qualité</h4>
                  <p className="text-sm text-muted-foreground">Produits soigneusement sélectionnés</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Livraison disponible</h4>
                  <p className="text-sm text-muted-foreground">Contactez-nous pour les détails</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Garantie</h4>
                  <p className="text-sm text-muted-foreground">Service après-vente disponible</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Contactez le vendeur</DialogTitle>
            <DialogDescription>
              Remplissez ce formulaire pour demander des informations sur {product.name}
            </DialogDescription>
          </DialogHeader>

          {isSuccess ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Message envoyé avec succès !</h3>
              <p className="text-muted-foreground mb-6 text-pretty">
                Nous vous contacterons très bientôt concernant {product.name}.
              </p>
              <Button
                onClick={() => {
                  setIsSuccess(false)
                  setIsDialogOpen(false)
                }}
              >
                Fermer
              </Button>
            </div>
          ) : (
            <form onSubmit={handleContactSeller} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Votre nom</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Votre email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Votre message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Décrivez votre demande..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}

              <div className="flex gap-3 justify-end">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Annuler
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Envoi..." : "Envoyer"}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

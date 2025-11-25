export type ProductDetail = {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  price: string
  image: string
  gallery: string[]
  features: string[]
}

export type CategoryDetail = {
  id: string
  name: string
  description: string
  image: string
  categoryImage?: string
  products: ProductDetail[]
}

const catalog: Record<string, CategoryDetail> = {
  electronique: {
    id: "electronique",
    name: "Électronique",
    description: "Ordinateurs, smartphones et accessoires",
    image: "/electronics-laptop-smartphone-accessories.jpg",
    categoryImage: "/modern-electronics-store-display-with-laptops-smar.jpg",
    products: [
      {
        id: "laptop-dell",
        name: "Ordinateur portable Dell",
        shortDescription: "Dell Inspiron 15, Intel Core i5, 8GB RAM, 256GB SSD",
        fullDescription:
          "Cet ordinateur portable Dell Inspiron 15 est idéal pour le travail et le divertissement. Équipé d'un processeur Intel Core i5 de dernière génération, de 8GB de RAM et d'un SSD de 256GB, il offre des performances rapides et fiables. L'écran Full HD de 15.6 pouces garantit une excellente qualité d'image.",
        price: "450,000 FCFA",
        image: "/dell-inspiron-laptop-modern-silver-computer.jpg",
        gallery: [
          "/dell-inspiron-laptop-modern-silver-computer.jpg",
          "/placeholder.svg?height=600&width=600",
        ],
        features: [
          "Processeur Intel Core i5",
          "8GB RAM DDR4",
          "256GB SSD",
          "Écran 15.6\" Full HD",
          "Windows 11",
          "Garantie 1 an",
        ],
      },
      {
        id: "samsung-galaxy",
        name: "Smartphone Samsung Galaxy",
        shortDescription: "Samsung Galaxy A54, 128GB, Écran AMOLED 6.4 pouces",
        fullDescription:
          "Le Samsung Galaxy A54 combine design élégant et performances puissantes. Son écran AMOLED de 6.4 pouces offre des couleurs éclatantes, tandis que sa batterie longue durée vous accompagne toute la journée. Avec 128GB de stockage et une excellente qualité photo, c'est le compagnon idéal.",
        price: "280,000 FCFA",
        image: "/samsung-galaxy-a54-smartphone-black-modern.jpg",
        gallery: [
          "/samsung-galaxy-a54-smartphone-black-modern.jpg",
          "/placeholder.svg?height=600&width=600",
        ],
        features: [
          "Écran AMOLED 6.4\"",
          "128GB de stockage",
          "Appareil photo 50MP",
          "Batterie 5000mAh",
          "5G compatible",
          "Garantie 1 an",
        ],
      },
      {
        id: "wireless-earbuds",
        name: "Écouteurs sans fil",
        shortDescription: "Écouteurs Bluetooth avec réduction de bruit active",
        fullDescription:
          "Profitez d'une expérience audio immersive avec ces écouteurs sans fil de qualité supérieure. La réduction de bruit active vous isole des distractions, tandis que l'autonomie de 24 heures avec le boîtier de charge vous permet d'écouter toute la journée.",
        price: "35,000 FCFA",
        image: "/wireless-bluetooth-earbuds-with-charging-case-blac.jpg",
        gallery: [
          "/wireless-bluetooth-earbuds-with-charging-case-blac.jpg",
          "/placeholder.svg?height=600&width=600",
        ],
        features: [
          "Réduction de bruit active",
          "Autonomie 24h avec boîtier",
          "Bluetooth 5.0",
          "Résistant à l'eau IPX4",
          "Commandes tactiles",
          "Garantie 6 mois",
        ],
      },
    ],
  },
  mode: {
    id: "mode",
    name: "Mode & Vêtements",
    description: "Vêtements traditionnels et modernes",
    image: "/african-traditional-clothing-colorful-fabric.jpg",
    categoryImage: "/african-fashion-clothing-store-colorful-traditiona.jpg",
    products: [
      {
        id: "dashiki",
        name: "Tenue traditionnelle Dashiki",
        shortDescription: "Dashiki authentique en coton, motifs colorés",
        fullDescription:
          "Ce magnifique Dashiki en coton 100% authentique célèbre la richesse de la culture africaine. Ses motifs colorés et son tissu respirant en font un vêtement parfait pour toutes les occasions, du quotidien aux événements spéciaux.",
        price: "25,000 FCFA",
        image: "/colorful-african-dashiki-traditional-clothing-vibr.jpg",
        gallery: [
          "/colorful-african-dashiki-traditional-clothing-vibr.jpg",
          "/placeholder.svg?height=600&width=600",
        ],
        features: [
          "Coton 100% authentique",
          "Motifs traditionnels",
          "Tailles disponibles: S à XXL",
          "Lavable en machine",
          "Fait main",
          "Couleurs résistantes",
        ],
      },
      {
        id: "robe-ankara",
        name: "Robe Ankara",
        shortDescription: "Robe élégante en tissu Ankara, design moderne",
        fullDescription:
          "Cette robe Ankara allie tradition et modernité avec élégance. Confectionnée dans un tissu Ankara de première qualité, elle met en valeur votre silhouette tout en célébrant la beauté des imprimés africains. Parfaite pour les occasions spéciales.",
        price: "35,000 FCFA",
        image: "/elegant-ankara-dress-african-print-fabric-modern-d.jpg",
        gallery: [
          "/elegant-ankara-dress-african-print-fabric-modern-d.jpg",
          "/placeholder.svg?height=600&width=600",
        ],
        features: [
          "Tissu Ankara premium",
          "Design moderne",
          "Coupe flatteuse",
          "Tailles disponibles: S à XL",
          "Doublure intérieure",
          "Fermeture éclair invisible",
        ],
      },
      {
        id: "boubou",
        name: "Boubou brodé",
        shortDescription: "Boubou luxueux avec broderies dorées",
        fullDescription:
          "Un boubou d'exception orné de broderies dorées raffinées. Ce vêtement traditionnel de haute qualité est parfait pour les cérémonies importantes et les grandes occasions. Chaque pièce est unique et témoigne d'un savoir-faire artisanal exceptionnel.",
        price: "55,000 FCFA",
        image: "/luxury-embroidered-boubou-african-robe-golden-embr.jpg",
        gallery: [
          "/luxury-embroidered-boubou-african-robe-golden-embr.jpg",
          "/placeholder.svg?height=600&width=600",
        ],
        features: [
          "Broderies dorées faites main",
          "Tissu de qualité supérieure",
          "Coupe traditionnelle ample",
          "Tailles disponibles: M à XXL",
          "Nettoyage à sec recommandé",
          "Pièce unique",
        ],
      },
    ],
  },
  maison: {
    id: "maison",
    name: "Maison & Décoration",
    description: "Mobilier et objets décoratifs",
    image: "/home-decor-furniture-interior-design.jpg",
    categoryImage: "/african-home-decor-furniture-showroom-wooden-furni.jpg",
    products: [
      {
        id: "table-bois",
        name: "Table basse en bois",
        shortDescription: "Table basse artisanale en bois massif",
        fullDescription:
          "Cette table basse artisanale est fabriquée à partir de bois massif de haute qualité. Son design intemporel et sa finition soignée en font une pièce maîtresse pour votre salon. Robuste et élégante, elle traversera les années.",
        price: "85,000 FCFA",
        image: "/wooden-coffee-table-solid-wood-artisanal-furniture.jpg",
        gallery: [
          "/wooden-coffee-table-solid-wood-artisanal-furniture.jpg",
          "/placeholder.svg?height=600&width=600",
        ],
        features: [
          "Bois massif",
          "Fabrication artisanale",
          "Dimensions: 120x60x45cm",
          "Finition vernie",
          "Montage facile",
          "Garantie 2 ans",
        ],
      },
      {
        id: "coussin-africain",
        name: "Coussin décoratif",
        shortDescription: "Coussin avec motifs africains traditionnels",
        fullDescription:
          "Ajoutez une touche d'authenticité à votre intérieur avec ce coussin décoratif aux motifs africains. Fabriqué avec des tissus de qualité et un rembourrage confortable, il allie esthétique et confort.",
        price: "12,000 FCFA",
        image: "/decorative-cushion-african-traditional-patterns-co.jpg",
        gallery: [
          "/decorative-cushion-african-traditional-patterns-co.jpg",
          "/placeholder.svg?height=600&width=600",
        ],
        features: [
          "Motifs africains authentiques",
          "Tissu résistant",
          "Rembourrage confortable",
          "Dimensions: 45x45cm",
          "Housse amovible lavable",
          "Fermeture éclair cachée",
        ],
      },
      {
        id: "lampe-design",
        name: "Lampe design",
        shortDescription: "Lampe moderne avec base en céramique",
        fullDescription:
          "Cette lampe design moderne apporte une touche d'élégance contemporaine à votre espace. Sa base en céramique artisanale et son abat-jour en tissu diffusent une lumière douce et agréable.",
        price: "28,000 FCFA",
        image: "/modern-design-lamp-ceramic-base-contemporary-light.jpg",
        gallery: [
          "/modern-design-lamp-ceramic-base-contemporary-light.jpg",
          "/placeholder.svg?height=600&width=600",
        ],
        features: [
          "Base en céramique",
          "Abat-jour en tissu",
          "Hauteur: 45cm",
          "Ampoule E27 incluse",
          "Interrupteur sur câble",
          "Design moderne",
        ],
      },
    ],
  },
  artisanat: {
    id: "artisanat",
    name: "Artisanat",
    description: "Produits artisanaux authentiques",
    image: "/african-handcrafted-baskets-wooden-sculptures.jpg",
    categoryImage: "/african-handicraft-artisan-workshop-baskets-sculpt.jpg",
    products: [
      {
        id: "panier-tresse",
        name: "Panier tressé",
        shortDescription: "Panier artisanal tressé à la main",
        fullDescription:
          "Ce panier tressé à la main est une œuvre d'art fonctionnelle. Fabriqué selon des techniques traditionnelles par des artisans locaux, il est parfait pour le rangement ou comme élément décoratif.",
        price: "15,000 FCFA",
        image: "/handwoven-basket-african-traditional-weaving-natur.jpg",
        gallery: [
          "/handwoven-basket-african-traditional-weaving-natur.jpg",
          "/placeholder.svg?height=600&width=600",
        ],
        features: [
          "Tressé à la main",
          "Matériaux naturels",
          "Dimensions: 35x35x30cm",
          "Avec anses",
          "Fait par des artisans locaux",
          "Pièce unique",
        ],
      },
      {
        id: "sculpture-bois",
        name: "Sculpture en bois",
        shortDescription: "Sculpture traditionnelle en bois d'ébène",
        fullDescription:
          "Cette sculpture en bois d'ébène est une véritable œuvre d'art traditionnelle. Sculptée à la main par des artisans experts, elle représente un savoir-faire ancestral et apporte une touche d'authenticité à votre décoration.",
        price: "45,000 FCFA",
        image: "/african-wood-sculpture-ebony-traditional-carving-a.jpg",
        gallery: [
          "/african-wood-sculpture-ebony-traditional-carving-a.jpg",
          "/placeholder.svg?height=600&width=600",
        ],
        features: [
          "Bois d'ébène authentique",
          "Sculptée à la main",
          "Hauteur: 40cm",
          "Finition naturelle",
          "Certificat d'authenticité",
          "Pièce unique",
        ],
      },
      {
        id: "masque-africain",
        name: "Masque décoratif",
        shortDescription: "Masque africain authentique, décoration murale",
        fullDescription:
          "Ce masque africain authentique est une pièce de décoration murale spectaculaire. Chaque détail raconte une histoire et célèbre la richesse culturelle africaine. Parfait pour apporter du caractère à votre intérieur.",
        price: "38,000 FCFA",
        image: "/placeholder.svg?height=400&width=400",
        gallery: [
          "/placeholder.svg?height=400&width=400",
          "/placeholder.svg?height=600&width=600",
        ],
        features: [
          "Masque authentique",
          "Sculpture sur bois",
          "Finition peinte à la main",
          "Dimensions: 30x15x10cm",
          "Système d'accrochage inclus",
          "Pièce unique",
        ],
      },
    ],
  },
  beaute: {
    id: "beaute",
    name: "Beauté & Cosmétiques",
    description: "Produits de beauté et soins",
    image: "/natural-beauty-products-shea-butter-cosmetics.jpg",
    categoryImage: "/placeholder.svg?height=400&width=1200",
    products: [
      {
        id: "beurre-karite",
        name: "Beurre de karité",
        shortDescription: "Beurre de karité pur 100% naturel",
        fullDescription:
          "Notre beurre de karité pur est extrait selon des méthodes traditionnelles. 100% naturel et non raffiné, il conserve toutes ses propriétés nourrissantes et hydratantes. Idéal pour la peau et les cheveux.",
        price: "8,000 FCFA",
        image: "/placeholder.svg?height=400&width=400",
        gallery: [
          "/placeholder.svg?height=400&width=400",
          "/placeholder.svg?height=600&width=600",
        ],
        features: [
          "100% pur et naturel",
          "Non raffiné",
          "Production locale",
          "Pot de 250g",
          "Hydratant et nourrissant",
          "Multi-usage",
        ],
      },
      {
        id: "huile-coco",
        name: "Huile de coco",
        shortDescription: "Huile de coco vierge pour cheveux et peau",
        fullDescription:
          "Cette huile de coco vierge pressée à froid conserve tous ses bienfaits naturels. Parfaite pour hydrater la peau, nourrir les cheveux et même pour la cuisine. Un produit polyvalent et 100% naturel.",
        price: "6,500 FCFA",
        image: "/placeholder.svg?height=400&width=400",
        gallery: [
          "/placeholder.svg?height=400&width=400",
          "/placeholder.svg?height=600&width=600",
        ],
        features: [
          "Huile vierge pressée à froid",
          "100% naturelle",
          "Flacon de 200ml",
          "Multi-usage",
          "Sans additifs",
          "Production artisanale",
        ],
      },
      {
        id: "savon-noir",
        name: "Savon noir africain",
        shortDescription: "Savon noir artisanal aux propriétés purifiantes",
        fullDescription:
          "Le savon noir africain est réputé pour ses propriétés purifiantes et exfoliantes. Fabriqué artisanalement selon une recette traditionnelle, il nettoie en douceur et convient à tous les types de peau.",
        price: "3,500 FCFA",
        image: "/placeholder.svg?height=400&width=400",
        gallery: [
          "/placeholder.svg?height=400&width=400",
          "/placeholder.svg?height=600&width=600",
        ],
        features: [
          "Savon noir authentique",
          "Fabrication artisanale",
          "Propriétés purifiantes",
          "Poids: 200g",
          "Tous types de peau",
          "Ingrédients naturels",
        ],
      },
    ],
  },
  alimentation: {
    id: "alimentation",
    name: "Alimentation",
    description: "Produits alimentaires et épices",
    image: "/african-spices-food-products-palm-oil.jpg",
    categoryImage: "/placeholder.svg?height=400&width=1200",
    products: [
      {
        id: "epices-africaines",
        name: "Épices africaines",
        shortDescription: "Mélange d'épices traditionnelles béninoises",
        fullDescription:
          "Ce mélange d'épices traditionnel béninois apporte une saveur authentique à vos plats. Soigneusement sélectionnées et mélangées selon une recette locale, ces épices réveilleront vos papilles.",
        price: "5,000 FCFA",
        image: "/placeholder.svg?height=400&width=400",
        gallery: [
          "/placeholder.svg?height=400&width=400",
          "/placeholder.svg?height=600&width=600",
        ],
        features: [
          "Mélange traditionnel",
          "Épices de qualité",
          "Sachet de 100g",
          "Recette locale",
          "Sans conservateurs",
          "Production locale",
        ],
      },
      {
        id: "gari",
        name: "Gari",
        shortDescription: "Gari de qualité supérieure, produit local",
        fullDescription:
          "Notre gari est un produit local de qualité supérieure, fabriqué selon les méthodes traditionnelles. Croquant et savoureux, il est parfait pour accompagner vos plats ou déguster tel quel.",
        price: "2,500 FCFA",
        image: "/placeholder.svg?height=400&width=400",
        gallery: [
          "/placeholder.svg?height=400&width=400",
          "/placeholder.svg?height=600&width=600",
        ],
        features: [
          "Qualité supérieure",
          "Production locale",
          "Sachet de 1kg",
          "Croquant",
          "Sans additifs",
          "Méthode traditionnelle",
        ],
      },
      {
        id: "huile-palme",
        name: "Huile de palme",
        shortDescription: "Huile de palme rouge authentique",
        fullDescription:
          "Cette huile de palme rouge authentique est extraite selon des méthodes traditionnelles. Elle conserve toute sa richesse nutritionnelle et sa couleur rouge caractéristique. Essentielle dans la cuisine africaine.",
        price: "4,000 FCFA",
        image: "/placeholder.svg?height=400&width=400",
        gallery: [
          "/placeholder.svg?height=400&width=400",
          "/placeholder.svg?height=600&width=600",
        ],
        features: [
          "Huile de palme rouge",
          "Extraction traditionnelle",
          "Bouteille de 500ml",
          "Riche en nutriments",
          "Production locale",
          "Non raffinée",
        ],
      },
    ],
  },
}

/**
 * Retourne l'ensemble des catégories disponibles dans le catalogue.
 */
export function getProductCatalog(): CategoryDetail[] {
  return Object.values(catalog)
}

/**
 * Recherche une catégorie à partir de son identifiant.
 */
export function getCategoryById(categoryId: string): CategoryDetail | undefined {
  return catalog[categoryId]
}

/**
 * Recherche un produit en fonction de son identifiant et de sa catégorie.
 */
export function getProductById(categoryId: string, productId: string): ProductDetail | undefined {
  return getCategoryById(categoryId)?.products.find((product) => product.id === productId)
}

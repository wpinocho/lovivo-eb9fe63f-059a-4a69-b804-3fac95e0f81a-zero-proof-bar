import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Package, Star } from 'lucide-react'
import { useSettings } from '@/contexts/SettingsContext'

interface Bundle {
  id: string
  name: string
  image: string
  price: number
  originalPrice: number
  items: string[]
  badge?: string
}

const bundles: Bundle[] = [
  {
    id: '1',
    name: 'Gin Lovers Starter',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop',
    price: 79.99,
    originalPrice: 94.97,
    items: ['2 Premium Gin Alternatives', 'Tonic Collection', 'Recipe Book'],
    badge: 'Best Seller'
  },
  {
    id: '2',
    name: 'Aperitif Collection',
    image: 'https://images.unsplash.com/photo-1598614187854-26a60e982dc4?w=400&h=400&fit=crop',
    price: 89.99,
    originalPrice: 109.97,
    items: ['3 Aperitif Spirits', 'Sparkling Water Set', 'Garnish Kit'],
    badge: 'New'
  },
  {
    id: '3',
    name: 'Mixology Master Kit',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=400&fit=crop',
    price: 119.99,
    originalPrice: 149.96,
    items: ['4 Spirit Alternatives', 'Bar Tools Set', 'Premium Recipe Book'],
    badge: 'Most Popular'
  }
]

export const StarterBundles = () => {
  const { formatMoney } = useSettings()

  const calculateSavings = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100)
  }

  return (
    <section id="starter-bundles" className="py-16 bg-y2k-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-y2k-yellow/20 backdrop-blur-sm px-4 py-2 rounded-full border border-y2k-yellow/30 mb-4">
            <Package className="h-4 w-4 text-y2k-yellow" />
            <span className="text-sm font-medium text-y2k-yellow">Save Big</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Starter <span className="text-y2k-yellow">Bundles</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Everything you need to begin your zero-proof journey, curated by experts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bundles.map((bundle) => {
            const savings = calculateSavings(bundle.originalPrice, bundle.price)
            
            return (
              <Card key={bundle.id} className="bg-white/5 backdrop-blur-sm border-2 border-y2k-blue/30 hover:border-y2k-yellow transition-all hover:shadow-2xl group overflow-hidden">
                <div className="relative">
                  <img 
                    src={bundle.image} 
                    alt={bundle.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {bundle.badge && (
                    <Badge className="absolute top-4 left-4 bg-y2k-yellow text-y2k-dark font-bold">
                      <Star className="h-3 w-3 mr-1" />
                      {bundle.badge}
                    </Badge>
                  )}
                  
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Save {savings}%
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {bundle.name}
                  </h3>
                  
                  <div className="space-y-2 mb-6">
                    {bundle.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-white/80 text-sm">
                        <div className="w-1.5 h-1.5 bg-y2k-yellow rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-black text-y2k-yellow">
                      {formatMoney(bundle.price)}
                    </span>
                    <span className="text-lg text-white/50 line-through">
                      {formatMoney(bundle.originalPrice)}
                    </span>
                  </div>
                  
                  <Button 
                    className="w-full bg-y2k-yellow text-y2k-dark hover:bg-y2k-yellow/90 font-bold text-lg py-6 rounded-full"
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
import { Button } from '@/components/ui/button'
import { Sparkles, Wine } from 'lucide-react'

export const HeroMocktails = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('na-spirits')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-y2k-blue via-purple-500 to-y2k-yellow py-20 md:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-y2k-yellow/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-y2k-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Zero Proof. Full Flavor.</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Sip the
              <span className="block y2k-text-gradient bg-white text-transparent bg-clip-text">
                Future
              </span>
              of Mocktails
            </h1>
            
            <p className="text-xl text-white/90 max-w-lg">
              Premium non-alcoholic spirits crafted for the conscious drinker. 
              Experience sophisticated flavors without the hangover.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={scrollToProducts}
                className="bg-y2k-yellow text-y2k-dark hover:bg-y2k-yellow/90 font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform"
              >
                Discover Flavors
                <Wine className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  const bundlesSection = document.getElementById('starter-bundles')
                  if (bundlesSection) {
                    bundlesSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 font-bold text-lg px-8 py-6 rounded-full"
              >
                View Bundles
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-black text-y2k-yellow">0%</div>
                <div className="text-sm text-white/80">Alcohol</div>
              </div>
              <div>
                <div className="text-3xl font-black text-y2k-yellow">100%</div>
                <div className="text-sm text-white/80">Flavor</div>
              </div>
              <div>
                <div className="text-3xl font-black text-y2k-yellow">50+</div>
                <div className="text-sm text-white/80">Recipes</div>
              </div>
            </div>
          </div>

          {/* Right content - Featured mocktail image */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden y2k-glow">
              <img 
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=800&fit=crop" 
                alt="Premium mocktail"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-y2k-yellow text-y2k-dark px-6 py-3 rounded-full font-black text-lg shadow-2xl animate-float z-20">
              🎉 New Arrivals
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white text-y2k-dark px-6 py-3 rounded-full font-black text-lg shadow-2xl animate-float z-20" style={{ animationDelay: '0.5s' }}>
              ⭐ Best Sellers
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
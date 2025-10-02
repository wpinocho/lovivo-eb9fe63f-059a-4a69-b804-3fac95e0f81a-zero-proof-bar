import { FloatingCart } from '@/components/FloatingCart'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { HeroMocktails } from '@/components/HeroMocktails'
import { NASpiritsGrid } from '@/components/NASpiritsGrid'
import { FeaturedRecipes } from '@/components/FeaturedRecipes'
import { StarterBundles } from '@/components/StarterBundles'
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex'

/**
 * Y2K Zero-Proof Bar Homepage
 * 
 * Vibrant, modern design with Y2K aesthetic
 * Sections: Hero, NA Spirits, Recipes, Bundles
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section with Mocktails */}
      <HeroMocktails />

      {/* NA Spirits Grid */}
      <NASpiritsGrid />

      {/* Featured Recipes */}
      <FeaturedRecipes />

      {/* Starter Bundles */}
      <StarterBundles />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-y2k-blue to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready to Go <span className="text-y2k-yellow">Zero-Proof?</span>
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of conscious drinkers enjoying sophisticated flavors without the alcohol
          </p>
          <button 
            onClick={() => {
              const spiritsSection = document.getElementById('na-spirits')
              if (spiritsSection) {
                spiritsSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="bg-y2k-yellow text-y2k-dark hover:bg-y2k-yellow/90 font-bold text-xl px-12 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            Discover Flavors
            <span className="text-2xl">🍹</span>
          </button>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  )
}
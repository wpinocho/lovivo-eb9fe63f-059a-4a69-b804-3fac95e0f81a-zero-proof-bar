import { ProductCard } from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { supabase, type Product } from '@/lib/supabase'
import { STORE_ID } from '@/lib/config'
import { Loader2 } from 'lucide-react'

export const NASpiritsGrid = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchNASpirits()
  }, [])

  const fetchNASpirits = async () => {
    try {
      console.log('Fetching NA spirits collection...')
      
      // Get the NA Spirits collection
      const { data: collection, error: collectionError } = await supabase
        .from('collections')
        .select('id')
        .eq('handle', 'na-spirits')
        .eq('store_id', STORE_ID)
        .single()

      if (collectionError || !collection) {
        console.error('Error fetching collection:', collectionError)
        setLoading(false)
        return
      }

      // Get products in this collection
      const { data: collectionProducts, error: cpError } = await supabase
        .from('collection_products')
        .select('product_id')
        .eq('collection_id', collection.id)

      if (cpError || !collectionProducts || collectionProducts.length === 0) {
        console.error('Error fetching collection products:', cpError)
        setLoading(false)
        return
      }

      const productIds = collectionProducts.map(cp => cp.product_id)

      // Fetch the actual products
      const { data: productsData, error: productsError } = await supabase
        .from('products')
        .select('*')
        .eq('status', 'active')
        .in('id', productIds)
        .order('created_at', { ascending: false })

      if (productsError) {
        console.error('Error fetching products:', productsError)
        setLoading(false)
        return
      }

      console.log('NA Spirits products fetched:', productsData)
      setProducts(productsData || [])
    } catch (error) {
      console.error('Error in fetchNASpirits:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="na-spirits" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-y2k-dark mb-4">
            NA <span className="y2k-text-gradient">Spirits</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium non-alcoholic alternatives crafted with real botanicals and zero compromise
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-12 w-12 animate-spin text-y2k-blue" />
          </div>
        ) : products.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="transform hover:scale-105 transition-transform">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg"
                className="bg-y2k-blue hover:bg-y2k-blue/90 text-white font-bold px-8 rounded-full"
              >
                View All Spirits
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No products available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  )
}
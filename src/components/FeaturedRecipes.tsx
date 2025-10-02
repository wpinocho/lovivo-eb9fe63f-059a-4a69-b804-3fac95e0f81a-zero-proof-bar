import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock, Users } from 'lucide-react'

interface Recipe {
  id: string
  name: string
  image: string
  time: string
  servings: number
  description: string
  difficulty: 'Easy' | 'Medium' | 'Advanced'
}

const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Zero-Proof Negroni',
    image: 'https://images.unsplash.com/photo-1598614187854-26a60e982dc4?w=400&h=400&fit=crop',
    time: '5 min',
    servings: 1,
    description: 'Classic Italian aperitif reimagined without alcohol. Bitter, bold, and beautiful.',
    difficulty: 'Easy'
  },
  {
    id: '2',
    name: 'Garden Spritz',
    image: 'https://images.unsplash.com/photo-1587223962930-cb7f31384c19?w=400&h=400&fit=crop',
    time: '3 min',
    servings: 1,
    description: 'Refreshing herbal spritz with cucumber, mint, and elderflower notes.',
    difficulty: 'Easy'
  },
  {
    id: '3',
    name: 'Spiced Pear Fizz',
    image: 'https://images.unsplash.com/photo-1544145945-35c4e5d82e60?w=400&h=400&fit=crop',
    time: '7 min',
    servings: 2,
    description: 'Warming spices meet crisp pear in this sophisticated mocktail.',
    difficulty: 'Medium'
  }
]

export const FeaturedRecipes = () => {
  const getDifficultyColor = (difficulty: Recipe['difficulty']) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-500'
      case 'Medium':
        return 'bg-y2k-yellow text-y2k-dark'
      case 'Advanced':
        return 'bg-y2k-blue'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-y2k-blue/5 to-y2k-yellow/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-y2k-dark mb-4">
            Featured <span className="y2k-text-gradient">Recipes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master mixologist-approved recipes to elevate your zero-proof game
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <Card key={recipe.id} className="overflow-hidden border-2 border-y2k-blue/20 hover:border-y2k-blue transition-all hover:shadow-xl group">
              <div className="relative overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute top-4 right-4 ${getDifficultyColor(recipe.difficulty)} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                  {recipe.difficulty}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-y2k-dark mb-2">
                  {recipe.name}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {recipe.description}
                </p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{recipe.servings} serving{recipe.servings > 1 ? 's' : ''}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-y2k-blue text-y2k-blue hover:bg-y2k-blue hover:text-white font-bold"
                >
                  View Recipe
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-y2k-blue hover:bg-y2k-blue/90 text-white font-bold px-8 rounded-full"
          >
            Browse All Recipes
          </Button>
        </div>
      </div>
    </section>
  )
}
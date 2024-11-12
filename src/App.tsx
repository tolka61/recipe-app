import React, { useState, useMemo } from 'react';
import { SearchBar } from './components/SearchBar';
import { Filters } from './components/Filters';
import { RecipeCard } from './components/RecipeCard';
import { RecipeModal } from './components/RecipeModal';
import { recipes } from './data/recipes';
import { Recipe, SearchFilters } from './types';
import { CookingPot } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({
    cuisine: '',
    difficulty: '',
    maxTime: 0,
  });
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const filteredRecipes = useMemo(() => {
    return recipes.filter(recipe => {
      const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCuisine = !filters.cuisine || recipe.cuisine === filters.cuisine;
      const matchesDifficulty = !filters.difficulty || recipe.difficulty === filters.difficulty;
      const matchesTime = !filters.maxTime || (recipe.prepTime + recipe.cookTime) <= filters.maxTime;

      return matchesSearch && matchesCuisine && matchesDifficulty && matchesTime;
    });
  }, [searchTerm, filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CookingPot className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Поиск рецептов</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex flex-col gap-4">
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            <Filters 
              filters={filters}
              onFilterChange={setFilters}
            />
          </div>

          {filteredRecipes.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Рецепты не найдены</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map(recipe => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onClick={() => setSelectedRecipe(recipe)}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}

export default App;
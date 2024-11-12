import React from 'react';
import { Clock, ChefHat } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
}

export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <div 
      onClick={onClick}
      className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
      <div className="flex items-center gap-4 text-gray-600 mb-2">
        <span className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {totalTime} мин
        </span>
        <span className="flex items-center gap-1">
          <ChefHat className="w-4 h-4" />
          {recipe.difficulty}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {recipe.tags.map((tag) => (
          <span 
            key={tag}
            className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
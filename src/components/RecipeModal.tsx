import React from 'react';
import { X, Clock, ChefHat } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export function RecipeModal({ recipe, onClose }: RecipeModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">{recipe.name}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center gap-1">
              <Clock className="w-5 h-5" />
              Подготовка: {recipe.prepTime} мин
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-5 h-5" />
              Готовка: {recipe.cookTime} мин
            </span>
            <span className="flex items-center gap-1">
              <ChefHat className="w-5 h-5" />
              Сложность: {recipe.difficulty}
            </span>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Ингредиенты:</h3>
            <ul className="list-disc list-inside space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Инструкция:</h3>
            <ol className="list-decimal list-inside space-y-3">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="pl-2">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
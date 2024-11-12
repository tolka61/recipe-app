export interface Recipe {
  id: string;
  name: string;
  cuisine: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  prepTime: number;
  cookTime: number;
  ingredients: string[];
  instructions: string[];
  tags: string[];
}

export interface SearchFilters {
  cuisine: string;
  difficulty: string;
  maxTime: number;
}
import React from 'react';
import { SearchFilters } from '../types';

interface FiltersProps {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
}

export function Filters({ filters, onFilterChange }: FiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white rounded-lg shadow-sm">
      <select
        value={filters.cuisine}
        onChange={(e) => onFilterChange({ ...filters, cuisine: e.target.value })}
        className="px-3 py-2 border border-gray-300 rounded-md"
      >
        <option value="">Все кухни</option>
        <option value="Русская">Русская</option>
        <option value="Итальянская">Итальянская</option>
        <option value="Азиатская">Азиатская</option>
      </select>

      <select
        value={filters.difficulty}
        onChange={(e) => onFilterChange({ ...filters, difficulty: e.target.value })}
        className="px-3 py-2 border border-gray-300 rounded-md"
      >
        <option value="">Любая сложность</option>
        <option value="Easy">Легко</option>
        <option value="Medium">Средне</option>
        <option value="Hard">Сложно</option>
      </select>

      <select
        value={filters.maxTime}
        onChange={(e) => onFilterChange({ ...filters, maxTime: Number(e.target.value) })}
        className="px-3 py-2 border border-gray-300 rounded-md"
      >
        <option value="0">Любое время</option>
        <option value="30">До 30 минут</option>
        <option value="60">До 1 часа</option>
        <option value="120">До 2 часов</option>
      </select>
    </div>
  );
}
import React from 'react';
import { Filter } from 'lucide-react';

interface FiltersProps {
  filters: {
    breed: string;
    size: string;
    gender: string;
    priceRange: string;
  };
  onFilterChange: (key: string, value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange }) => {
  const breeds = ['Todos', 'Golden Retriever', 'Bulldog Francés', 'Labrador', 'Beagle', 'Pomerania', 'Pastor Alemán'];
  const sizes = ['Todos', 'Pequeño', 'Mediano', 'Grande'];
  const genders = ['Todos', 'Macho', 'Hembra'];
  const priceRanges = ['Todos', '0-1000', '1000-1500', '1500+'];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-center mb-4">
        <Filter size={20} className="mr-2 text-pink-600" />
        <h3 className="font-semibold text-gray-800">Filtros</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Raza</label>
          <select 
            value={filters.breed}
            onChange={(e) => onFilterChange('breed', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          >
            {breeds.map(breed => (
              <option key={breed} value={breed}>{breed}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tamaño</label>
          <select 
            value={filters.size}
            onChange={(e) => onFilterChange('size', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          >
            {sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Género</label>
          <select 
            value={filters.gender}
            onChange={(e) => onFilterChange('gender', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          >
            {genders.map(gender => (
              <option key={gender} value={gender}>{gender}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Precio</label>
          <select 
            value={filters.priceRange}
            onChange={(e) => onFilterChange('priceRange', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          >
            {priceRanges.map(range => (
              <option key={range} value={range}>
                {range === 'Todos' ? 'Todos' : 
                 range === '1500+' ? '$1,500+' : 
                 `$${range.replace('-', ' - $')}`}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
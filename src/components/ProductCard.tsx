import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types/product';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onProductClick(product)}
    >
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-pink-50 transition-colors">
          <Heart size={16} className="text-gray-600 hover:text-pink-600" />
        </button>
        {product.vaccinated && (
          <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
            Vacunado
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.breed} • {product.age}</p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-500">{product.gender} • {product.size}</span>
          {product.trained && (
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
              Entrenado
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-pink-600">${product.price.toLocaleString()}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors flex items-center space-x-2"
          >
            <ShoppingCart size={16} />
            <span>Adoptar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
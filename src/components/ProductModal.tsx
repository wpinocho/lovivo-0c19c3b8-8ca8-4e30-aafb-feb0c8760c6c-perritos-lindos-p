import React from 'react';
import { X, Heart, ShoppingCart, Check } from 'lucide-react';
import { Product } from '../types/product';
import { useCart } from '../contexts/CartContext';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <X size={20} />
          </button>
          {product.vaccinated && (
            <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
              Vacunado
            </span>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-lg text-gray-600">{product.breed} • {product.age}</p>
            </div>
            <span className="text-2xl font-bold text-pink-600">${product.price.toLocaleString()}</span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-3 rounded-lg">
              <span className="text-sm text-gray-600">Género</span>
              <p className="font-medium">{product.gender}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <span className="text-sm text-gray-600">Tamaño</span>
              <p className="font-medium">{product.size}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Características</h3>
            <div className="flex flex-wrap gap-2">
              {product.vaccinated && (
                <span className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  <Check size={14} className="mr-1" />
                  Vacunado
                </span>
              )}
              {product.trained && (
                <span className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  <Check size={14} className="mr-1" />
                  Entrenado
                </span>
              )}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Descripción</h3>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          <div className="flex space-x-3">
            <button className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center space-x-2">
              <Heart size={20} />
              <span>Favoritos</span>
            </button>
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingCart size={20} />
              <span>Adoptar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
import React from 'react';
import { ShoppingCart, Heart, User, Search } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface HeaderProps {
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const { getTotalItems } = useCart();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🐕</div>
            <h1 className="text-2xl font-bold text-pink-600">PuppyLove</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">Inicio</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">Cachorros</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">Nosotros</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">Contacto</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-pink-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-700 hover:text-pink-600 transition-colors">
              <Heart size={20} />
            </button>
            <button className="p-2 text-gray-700 hover:text-pink-600 transition-colors">
              <User size={20} />
            </button>
            <button 
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors"
            >
              <ShoppingCart size={20} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
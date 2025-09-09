import React, { useState, useMemo } from 'react';
import { CartProvider } from '../contexts/CartContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import { products } from '../data/products';
import { Product } from '../types/product';

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [filters, setFilters] = useState({
    breed: 'Todos',
    size: 'Todos',
    gender: 'Todos',
    priceRange: 'Todos'
  });

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (filters.breed !== 'Todos' && product.breed !== filters.breed) return false;
      if (filters.size !== 'Todos' && product.size !== filters.size) return false;
      if (filters.gender !== 'Todos' && product.gender !== filters.gender) return false;
      
      if (filters.priceRange !== 'Todos') {
        const price = product.price;
        if (filters.priceRange === '0-1000' && price > 1000) return false;
        if (filters.priceRange === '1000-1500' && (price < 1000 || price > 1500)) return false;
        if (filters.priceRange === '1500+' && price < 1500) return false;
      }
      
      return true;
    });
  }, [filters]);

  const handleFilterChange = (key: string, value: string) => {
    console.log('Filter changed:', key, value);
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleProductClick = (product: Product) => {
    console.log('Product clicked:', product.name);
    setSelectedProduct(product);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onCartClick={() => setIsCartOpen(true)} />
        
        <Hero />
        
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Nuestros Cachorros</h2>
            <p className="text-gray-600">Encuentra tu compañero perfecto entre nuestros adorables cachorros</p>
          </div>

          <Filters filters={filters} onFilterChange={handleFilterChange} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onProductClick={handleProductClick}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🐕</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No se encontraron cachorros</h3>
              <p className="text-gray-500">Intenta ajustar los filtros para ver más opciones</p>
            </div>
          )}
        </main>

        <Footer />

        <ProductModal 
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />

        <Cart 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
      </div>
    </CartProvider>
  );
};

export default Index;
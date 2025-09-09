import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🐕</div>
              <h3 className="text-xl font-bold">PuppyLove</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Conectando familias con sus compañeros perfectos desde 2020.
            </p>
            <div className="flex items-center text-pink-400">
              <Heart size={16} className="mr-2" />
              <span className="text-sm">Hecho con amor</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cachorros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Adopción</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cuidado</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Entrenamiento</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Veterinaria</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span className="text-sm">info@puppylove.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span className="text-sm">123 Pet Street, Ciudad</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PuppyLove. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
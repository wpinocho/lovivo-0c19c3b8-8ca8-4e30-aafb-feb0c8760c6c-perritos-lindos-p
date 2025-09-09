export interface Product {
  id: string;
  name: string;
  breed: string;
  age: string;
  price: number;
  image: string;
  description: string;
  gender: 'Macho' | 'Hembra';
  size: 'Pequeño' | 'Mediano' | 'Grande';
  vaccinated: boolean;
  trained: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
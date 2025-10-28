import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ user }) => {
  const products = [
    {
      id: 1,
      name: "Premium Aimbot",
      description: "Продвинутый aimbot с AI-наводкой",
      price: "0.05 ETH",
      features: ["AI-наводка", "Anti-detection", "Настройка FOV"]
    },
    {
      id: 2,
      name: "Wallhack Ultimate",
      description: "Видеть сквозь стены и объекты",
      price: "0.03 ETH",
      features: ["ESP", "Трассировка пуль", "Обнаружение loot"]
    },
    {
      id: 3,
      name: "Speed Hack Pro",
      description: "Увеличение скорости передвижения",
      price: "0.02 ETH",
      features: ["Регулировка скорости", "Anti-ban", "Авто-остановка"]
    }
  ];

  return (
    <section id="products" className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Наши продукты</h2>
        <p className="text-gray-400 text-lg">Лучшие читы для ваших игр</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} user={user} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;

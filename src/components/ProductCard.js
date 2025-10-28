import React, { useState } from 'react';
import PaymentModal from './PaymentModal';

const ProductCard = ({ product, user }) => {
  const [showPayment, setShowPayment] = useState(false);

  const handleBuy = () => {
    if (!user) {
      alert('Пожалуйста, войдите в систему для покупки');
      return;
    }
    setShowPayment(true);
  };

  return (
    <>
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl border border-purple-500/30 p-6 hover:border-purple-500/60 transition-all duration-300 transform hover:-translate-y-2">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
          <p className="text-gray-400 mb-4">{product.description}</p>
          
          <ul className="space-y-2 mb-6">
            {product.features.map((feature, index) => (
              <li key={index} className="text-purple-400 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-400">{product.price}</span>
          <button 
            onClick={handleBuy}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-6 py-2 rounded-lg font-semibold text-white transition-all"
          >
            Купить
          </button>
        </div>
      </div>

      {showPayment && (
        <PaymentModal 
          product={product} 
          onClose={() => setShowPayment(false)} 
        />
      )}
    </>
  );
};

export default ProductCard;

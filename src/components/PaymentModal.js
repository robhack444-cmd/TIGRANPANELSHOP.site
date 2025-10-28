import React, { useState } from 'react';

const PaymentModal = ({ product, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState('crypto');

  const cryptoAddresses = {
    BTC: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    ETH: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
    USDT: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F'
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 border border-purple-500/30 rounded-xl p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Оплата: {product.name}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-gray-300 block mb-2">Метод оплаты</label>
            <select 
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
            >
              <option value="crypto">Криптовалюта</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          {paymentMethod === 'crypto' && (
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">Отправьте точную сумму на указанный адрес:</p>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-yellow-400 font-mono text-sm break-all">
                  {cryptoAddresses.ETH}
                </p>
              </div>
              <p className="text-green-400 font-bold text-center">{product.price}</p>
            </div>
          )}

          {paymentMethod === 'paypal' && (
            <div className="text-center">
              <p className="text-gray-400 mb-4">PayPal: edoe0739@gmail.com</p>
              <p className="text-green-400 font-bold">{product.price}</p>
            </div>
          )}

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
            Подтвердить оплату
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;

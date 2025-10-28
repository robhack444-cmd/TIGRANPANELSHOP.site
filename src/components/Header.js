import React from 'react';

const Header = ({ user, onAuthClick }) => {
  return (
    <header className="bg-black/50 backdrop-blur-lg border-b border-purple-500/30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg"></div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            EliteCheats
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#products" className="text-gray-300 hover:text-purple-400 transition-colors">Продукты</a>
          <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">Возможности</a>
          <a href="#support" className="text-gray-300 hover:text-purple-400 transition-colors">Поддержка</a>
        </nav>

        <button 
          onClick={onAuthClick}
          className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 px-6 py-2 rounded-lg font-semibold text-white transition-all transform hover:scale-105"
        >
          {user ? 'Личный кабинет' : 'Войти'}
        </button>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import AuthModal from './components/AuthModal';
import { auth } from './firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <Header user={user} onAuthClick={() => setShowAuth(true)} />
      <ProductList user={user} />
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
      
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse"></div>
      </div>
    </div>
  );
}

export default App;

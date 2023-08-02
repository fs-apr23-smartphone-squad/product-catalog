import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import { Page } from './components/Page';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { TabletsPage } from './pages/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { CartPage } from './pages/CartPage';
import { PageNotFound } from './pages/PageNotFound';
import { Footer } from './components/Footer';
import { PhoneDetailsPage } from './pages/PnoneDetailsPage';

function App() {
  const [phoneIdsInCart, setPhoneIdsInCart] = useState<number[]>(() => {
    const storedIds = localStorage.getItem('phoneIds');

    return storedIds ? JSON.parse(storedIds) : [];
  });

  const handleAddToCart = (id: number) => {
    setPhoneIdsInCart(prevIds => [...prevIds, id]);
  };

  const removeFromCart = (id: number) => {
    const filter = phoneIdsInCart.filter(phoneId => phoneId !== id);

    setPhoneIdsInCart(filter);
  };

  return (
    <div className="App">
      <Page />

      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="phones" element={
          <PhonesPage
            phoneIdsInCart={phoneIdsInCart}
            handleAddToCart={handleAddToCart}
            removeFromCart={removeFromCart}
          />
        }/>
        <Route path="phones/:phoneId" element={
          <PhoneDetailsPage
            phoneIdsInCart={phoneIdsInCart}
            handleAddToCart={handleAddToCart}
            removeFromCart={removeFromCart}
          />
        }/>
        <Route path="tablets" element={<TabletsPage />} />
        <Route path="accessories" element={<AccessoriesPage />} />
        <Route path="favourites" element={<FavouritesPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

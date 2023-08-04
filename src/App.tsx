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

  const [phoneIdsInFavourites, setPhoneIdsInFavourites] = useState<number[]>(
    () => {
      const storedIds = localStorage.getItem('phoneIdsInFavourites');

      return storedIds ? JSON.parse(storedIds) : [];
    },
  );

  const handleAddToCart = (id: number) => {
    setPhoneIdsInCart(prevIds => [...prevIds, id]);
  };

  const removeFromCart = (id: number) => {
    const filter = phoneIdsInCart.filter(phoneId => phoneId !== id);

    setPhoneIdsInCart(filter);
  };

  const handleAddToFavourites = (id: number) => {
    setPhoneIdsInFavourites(prevIds => [...prevIds, id]);
  };

  const removeFromFavourites = (id: number) => {
    const filter = phoneIdsInFavourites.filter(phoneId => phoneId !== id);

    setPhoneIdsInFavourites(filter);
  };

  return (
    <div className="App">
      <Page phoneIdsInFavourites={phoneIdsInFavourites} />

      <Routes>
        <Route path="home" element={
          <HomePage
            phoneIdsInCart={phoneIdsInCart}
            handleAddToCart={handleAddToCart}
            removeFromCart={removeFromCart}
            handleAddToFavourites={handleAddToFavourites}
            removeFromFavourites={removeFromFavourites}
            phoneIdsInFavourites={phoneIdsInFavourites}
          />
        } />
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="phones" element={
          <PhonesPage
            phoneIdsInCart={phoneIdsInCart}
            handleAddToCart={handleAddToCart}
            removeFromCart={removeFromCart}
            handleAddToFavourites={handleAddToFavourites}
            removeFromFavourites={removeFromFavourites}
            phoneIdsInFavourites={phoneIdsInFavourites}
          />
        } />
        <Route path="phones/:phoneId" element={
          <PhoneDetailsPage
            phoneIdsInCart={phoneIdsInCart}
            handleAddToCart={handleAddToCart}
            removeFromCart={removeFromCart}
            phoneIdsInFavourites={phoneIdsInFavourites}
            handleAddToFavourites={handleAddToFavourites}
            removeFromFavourites={removeFromFavourites}
          />
        } />
        <Route path="tablets" element={<TabletsPage />} />
        <Route path="accessories" element={<AccessoriesPage />} />
        <Route path="favourites" element={
            <FavouritesPage
              phoneIdsInFavourites={phoneIdsInFavourites}
              removeFromFavourites={removeFromFavourites}
              phoneIdsInCart={phoneIdsInCart}
              handleAddToCart={handleAddToCart}
              removeFromCart={removeFromCart}
              handleAddToFavourites={handleAddToFavourites}
            />
        } />
        <Route path="cart" element={
          <CartPage
            phoneIdsInCart={phoneIdsInCart}
            removeFromCart={removeFromCart}
          />
        } />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

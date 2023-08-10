import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { TabletsPage } from './pages/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { CartPage } from './pages/CartPage';
import { PageNotFound } from './pages/PageNotFound';
import { Footer } from './components/Footer';
import { PhoneDetailsPage } from './pages/PnoneDetailsPage';
import { AuthModal } from './components/AuthModal';
import { RegisterPage } from './pages/RegisterPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';

function App() {
  const [phoneIdsInCart, setPhoneIdsInCart] = useState<number[]>(() => {
    const storedIds = localStorage.getItem('phoneIds');

    return storedIds ? JSON.parse(storedIds) : [];
  });
  const [isAuthVisible, setIsAuthVisible] = useState(false);

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

  const removeAllFromCart = () => {
    setPhoneIdsInCart([]);
  };

  const handleAddToFavourites = (id: number) => {
    setPhoneIdsInFavourites(prevIds => [...prevIds, id]);
  };

  const removeFromFavourites = (id: number) => {
    const filter = phoneIdsInFavourites.filter(phoneId => phoneId !== id);

    setPhoneIdsInFavourites(filter);
  };

  const handleCloseModalClick = () => {
    setIsAuthVisible(false);
  };

  return (
    <div className="App">
      {isAuthVisible && <AuthModal onCloseModalClick={handleCloseModalClick} />}
      {/* This is authentification modal set isAuthVisible=true to see it */}

      <Header
       phoneIdsInFavourites={phoneIdsInFavourites}
       phoneIdsInCart={phoneIdsInCart}
        />

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
        <Route path="/:category/:itemId" element={
          <PhoneDetailsPage
            phoneIdsInCart={phoneIdsInCart}
            handleAddToCart={handleAddToCart}
            removeFromCart={removeFromCart}
            phoneIdsInFavourites={phoneIdsInFavourites}
            handleAddToFavourites={handleAddToFavourites}
            removeFromFavourites={removeFromFavourites}
          />
        } />
        <Route path="tablets" element={
        <TabletsPage
          phoneIdsInCart={phoneIdsInCart}
          handleAddToCart={handleAddToCart}
          removeFromCart={removeFromCart}
          phoneIdsInFavourites={phoneIdsInFavourites}
          handleAddToFavourites={handleAddToFavourites}
          removeFromFavourites={removeFromFavourites}
        />} />
        <Route path="accessories" element={
        <AccessoriesPage
          phoneIdsInCart={phoneIdsInCart}
          handleAddToCart={handleAddToCart}
          removeFromCart={removeFromCart}
          phoneIdsInFavourites={phoneIdsInFavourites}
          handleAddToFavourites={handleAddToFavourites}
          removeFromFavourites={removeFromFavourites}
        />} />
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
            removeAllFromCart={removeAllFromCart}
          />
        } />
        <Route path="register" element={<RegisterPage />} />

        <Route path="contacts" element={<ContactsPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// комент, щоб спробувати задеплоїти не зверайте на нього уваги

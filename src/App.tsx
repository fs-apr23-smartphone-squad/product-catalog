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

function App() {
  return (
    <div className="App">
      <Page />

      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="phones" element={<PhonesPage />} />
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

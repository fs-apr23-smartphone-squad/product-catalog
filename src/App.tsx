import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import { Page } from './components/Page';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { TabletsPage } from './pages/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';

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
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
    </div>
  );
}

export default App;

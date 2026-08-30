import { BrowserRouter, Routes, Route } from 'react-router';
import { useVendors } from './hooks/useVendors';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  const { vendors, loading, error } = useVendors();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage vendors={vendors} loading={loading} error={error} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
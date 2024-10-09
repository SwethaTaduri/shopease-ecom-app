import './App.css';
import { Home } from './pages/home';
import { Cart } from './pages/cart';
import { Routes,Route } from 'react-router-dom';
import { Wishlist } from './pages/wishlist';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </>
  );
}

export default App;

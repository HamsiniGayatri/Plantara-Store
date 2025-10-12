import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line no-unused-vars
import {Routes,Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { WishlistPage } from './pages/WishList';
import Login from './components/Login';
function App() {
  return (
    <>
    <Routes>
       <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wish" element={<WishlistPage />} />
    </Routes>
    </>
  );
}

export default App;

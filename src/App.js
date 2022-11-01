import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <div className="app">
       
        <Routes>
          <Route exact element={<Home />} path="/" />
          <Route exact element={<Cart />} path="/cart" />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;

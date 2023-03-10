import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './scss/app.scss';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div className="content">
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />{' '}
          </Routes>
      
      </div>
    </div>
  );
}

export default App;

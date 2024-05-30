import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Cart from './Cart.jsx';
import App from './App.jsx'; // Assuming App.jsx contains the component for the main app logic
import About from "./About.jsx"

function MainApp() {
  const [one, setOne] = useState({});
  const [cart, setCart] = useState([]);

  const addToCart = (obj) => {
    axios
      .post('http://localhost:4000/api/cart/post', obj)
      .then(() => alert('Added to cart'))
      .catch((e) => console.log(e));
  };

  const fetchCart = () => {
    return axios('http://localhost:4000/api/cart/get');
  };

  const deleteCart = (id) => {
    axios
      .delete(`http://localhost:4000/api/cart/${id}`)
      .then(() => console.log('Deleted from cart'))
      .catch((e) => console.log(e));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App one={one} setOne={setOne} />} />
        <Route path="/cart" element={<Cart deleteCart={deleteCart} fetchCart={fetchCart} />} />
        <Route path="/About" element={<About  />} />

      </Routes>
    </Router>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<MainApp />, rootElement);

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';

function App() {
  const [data, setData] = useState([]);

  const getAllProducts = () => {
    axios.get('http://localhost:4000/apii/getAll')
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Products
                data={data}
              />
            }
          />
          <Route path="/oneProduct/:id" element={<SingleProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

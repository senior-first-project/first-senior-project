import {  Routes, Route } from "react-router-dom";
import './App.css';
import SideBar from './component/SideBar.jsx';
import Client from "./component/Client.jsx";
import Seller from "./component/Seller.jsx";
import AddProduct from "./component/AddProduct.jsx";
import Product from "./component/Product.jsx";
function App() {
  return (
  <>   <SideBar/>

    <Routes>
      {/* <Route path="/" element={<Layout/>}/> */}
        <Route path="blogs" element={<Seller />}/>
        <Route path="Client" element={<Client/>} />
        <Route path="addprod" element={<AddProduct />} />
        <Route path="/product" element={<Product />} />
      {/* </Route> */}
    </Routes>
    </> 
  );
}

export default App;

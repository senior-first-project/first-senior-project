// import React, { useState, useEffect } from 'react';
// import {  Link } from 'react-router-dom';
// import Search from './Search';
// import axios from 'axios';
// import Cart from './Cart';
// import Footer from "./Footer"
// import './App.css'
// import { VscHeart } from "react-icons/vsc";
// import { CgProfile } from "react-icons/cg";
// import { CiLogout } from "react-icons/ci";
// import { RiRedPacketLine } from "react-icons/ri";

// const App = () => {
//   const [menuView, setMenuView] = useState(false)
//   const [view, setView] = useState('')
//   const [data, setData] = useState([])
//   const [cart, setCart] = useState([])
//   const [one,setOne] = useState({})
  
//   const toggleMenu = () => {
//     setMenuView(!menuView)
//   }
//   const switchView = (option,one) => {
//     setView(option)
//     setOne(one)
//   }
//     const fetchData =()=>{
//       axios.get("http://localhost:4000/api/product/get")
//       .then((response)=>setData(response.data))
//       .catch((error)=>console.error('r'))
//     }
//     useEffect(()=>{
//       fetchData()
//       fetchCart()
//     },[view])

//   //   const deleteProduct= (id) => {axios.delete(`http://localhost:4000/api/product/${id}`)
//   //   .then((data) => {fetchData()}) 
//   //   .catch((err) => { console.log(err)})
//   // };
//   // const addToCart = (obj)=>{
//   //   axios.post('http://localhost:1128/api/cart/post',obj).then((e)=>{
//   //     console.log(e);
//   //     alert('added to cart')
//   //   }).catch((e)=>{
//   //     console.log(e);
//   //     })
//   // }
//   const fetchCart = ()=>{
//     axios('http://localhost:4000/api/cart/get').then((e)=>{
//       setCart(e.data)
//     }).catch((e)=>{
//       console.log(e);
//     })
//   }
//   const deleteCart = (id)=>{
//     axios.delete(`http://localhost:4000/api/cart/${id}`).then((e)=>{
//       console.log('done');
//     }).catch((e)=>{
//       console.log(e);
//     }) }


//   const filterEdit = (key)=>{
//       const filteredData = data.filter((item) => {
//           return item.edit == key
//       });
//       setData(filteredData)
//   } 


//   // const addProduct = (obj)=>{
//   //   axios.post('http://localhost:4000/api/product/post',obj).then((e)=>{
//   //     alert('added')
//   //   }).catch((e)=>{
//   //     console.log(e);
//   //   })
//   // }
//   // const updateProduct = (id,obj)=>{
//   //   axios.put(`http://localhost:4000/api/product/${id}`,obj).then((e)=>{
//   //     alert('updated')
//   //   }).catch((e)=>{
//   //     console.log(e);
//   //   })
//   // }
// // const App = ({one,setOne}) => {
// //   const [menuView, setMenuView] = useState(false)
// //   const [data, setData] = useState([]);
// //   const [cart, setCart] = useState([]);
// //   const toggleMenu = () => {
// //     setMenuView(!menuView)
// //   }
// //   // useEffect(() => {
// //   //   fetchCart();
// //   // }, []);
// //   // const addToCart = (obj) => {
// //   //   axios
// //   //     .post('http://localhost:4000/api/cart/post', obj)
// //   //     .then(() => alert('Added to cart'))
// //   //     .catch((e) => console.log(e));
// //   // };
// //   // const fetchCart = () => {
// //   //   axios('http://localhost:4000/api/cart/get')
// //   //     .then((response) => {
// //   //       setCart(response.data);
// //   //     })
// //   //     .catch((e) => console.log(e));
// //   // };
// //   const deleteCart = (id) => {
// //     axios
// //       .delete(`http://localhost:4000/api/cart/${id}`)
// //       .then(() => console.log('Deleted from cart'))
// //       .catch((e) => console.log(e));
// //   }



//   return (
    
//       <div className="App">
//         <div className="nav">
//           <Link className="items" to="/Contact" style={{ marginRight: 5, marginLeft: 10 ,fontSize:25}}>
//             Contact 
//           </Link>
//           <Link className="items" to="/About" style={{ marginRight: 20, marginLeft: 20,fontSize:25 }}>
//             About 
//           </Link>
//           <Link className="items" to="/Signup" style={{ marginRight: 10, marginLeft: 10,fontSize:25  }}>
//            Signup
//           </Link>
//           <Search data={data} setData={setData} style={{ marginRight: 20, marginLeft: 20,fontSize:25 }} />
//           <div className='icons'>

//           <Link className="items" to="/WishList" style={{ marginRight: 4, marginLeft: 10,fontSize:25 }}>
//           <VscHeart />
//           </Link>
//           <Link className="items" to="/cart" style={{ marginRight: 10, marginLeft: 10 ,fontSize:25}}>
//             🛒 
//           </Link>
//           <span className="items" onClick={toggleMenu} style={{fontSize:30}}>
//             &#9660; <CgProfile />&#9660;
//           </span>
//           </div>

//         </div>
//         {menuView && (
//         <div className="menu">
//           <span className="menu-item" onClick={()=> filterEdit('Manage My Account')}>    <CgProfile />Manage Account</span>
//           <span className="menu-item" onClick={()=> filterEdit('My Order')}><RiRedPacketLine /> My Order</span>
//           <span className="menu-item" onClick={()=> filterEdit('Logout')}> <CiLogout /> Logout</span>
//         </div>
//       )}
//         {view === 'cart' && <Cart deleteCart={deleteCart} cart={cart}/>}

//       </div>
    
//   );
// };

// export default App;







import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import axios from 'axios';
import Cart from './Cart';
import Footer from './Footer';
import './App.css';
import { VscHeart } from 'react-icons/vsc';
import { CgProfile } from 'react-icons/cg';
import { CiLogout } from 'react-icons/ci';
import { RiRedPacketLine } from 'react-icons/ri';
import { RiShoppingCart2Line } from "react-icons/ri";



const App = () => {
  const [menuView, setMenuView] = useState(false);
  const [view, setView] = useState('');
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [one, setOne] = useState({});

  const toggleMenu = () => {
    setMenuView(!menuView);
  };

  const switchView = (option, one) => {
    setView(option);
    setOne(one);
  };

  const fetchData = () => {
    axios.get('http://localhost:4000/api/product/get')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  const fetchCart = () => {
    axios.get('http://localhost:4000/api/cart/get')
      .then((response) => setCart(response.data))
      .catch((error) => console.error('Error fetching cart:', error));
  };

  useEffect(() => {
    fetchData();
    fetchCart();
  }, [view]);

  const deleteCart = (id) => {
    axios.delete(`http://localhost:4000/api/cart/${id}`)
      .then(() => {
        console.log('Item deleted from cart');
        fetchCart(); // Refresh the cart data
      })
      .catch((error) => console.error('Error deleting item from cart:', error));
  };

  const filterEdit = (key) => {
    const filteredData = data.filter((item) => item.edit === key);
    setData(filteredData);
  };




  return (
    <div className="App">
      <div className="nav">
      <span className="logo" onClick={() =>{ switchView()
        }}>
          Exclusive
        </span>


        <Link className="items" to="/Contact" style={{ marginRight: 5, marginLeft: 10, fontSize: 25 }}>
          Contact
        </Link>
        <Link className="items" to="/About" style={{ marginRight: 20, marginLeft: 20, fontSize: 25 }}>
          About
        </Link>
        <Link className="items" to="/Signup" style={{ marginRight: 10, marginLeft: 10, fontSize: 25 }}>
          Signup
        </Link>
        <Search data={data} setData={setData} style={{ marginRight: 20, marginLeft: 20, fontSize: 25 }} />
        <div className="icons">
          <Link className="items" to="/WishList" style={{ marginRight: 4, marginLeft: 10, fontSize: 25 }}>
            <VscHeart />
          </Link>
          <Link className="items" to="/cart" style={{ marginRight: 10, marginLeft: 10, fontSize: 25 }}>
          <RiShoppingCart2Line />
          </Link>
          {/* <span className="logo" onClick={() =>{ switchView('Home')
        }}>
          Exclusive
        </span> */}
          <span className="items" onClick={toggleMenu} style={{ fontSize: 30 }}>
            &#9660; <CgProfile />&#9660;
          </span>
        </div>
      </div>
      
      {menuView && (
        <div className="menu">
          <span className="menu-item" onClick={() => filterEdit('Manage My Account')}><CgProfile /> Manage Account</span>
          <span className="menu-item" onClick={() => filterEdit('My Order')}><RiRedPacketLine /> My Order</span>
          <span className="menu-item" onClick={() => filterEdit('Logout')}><CiLogout /> Logout</span>
        </div>
      )}
      {view === 'cart' && <Cart deleteCart={deleteCart} cart={cart} />}
      <Footer />
    </div>
    
  );
};

export default App;


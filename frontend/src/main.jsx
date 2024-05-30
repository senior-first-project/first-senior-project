import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from './component/category'
import Camera from './component/Camera.jsx'
import Computers from './component/Computers.jsx'
import Gaming from './component/Gaming.jsx'
import Headphones from './component/Headphones.jsx'
import Phones from './component/Phones.jsx'
import Smartwatch from './component/SmartWatch.jsx'
 import SignIn from './componenet/SignIn.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
   <Routes>
        <Route path="/" element={<App />} />  
      <Route path="/camera" element={<Camera/>} />
      <Route path="/signIn" element={<SignIn/>}/>
      <Route path="/computers" element={<Computers />} />
      <Route path="/gaming " element={<Gaming  />} />
      <Route path="/ headphones" element={< Headphones />} />
      <Route path="/phones" element={<Phones />} />
      <Route path="/smartwatch" element={<Smartwatch />} /> 
    </Routes> 
  </BrowserRouter>
  </React.StrictMode>,
)

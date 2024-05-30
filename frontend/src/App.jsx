// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './componenet/SignIn';
import SignUp from './componenet/SignUp';

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="SignIn" element={<SignIn />} />
          <Route path="SignUp" element={<SignUp />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App

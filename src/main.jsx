import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'


import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductIndividual from './pages/ProductIndividual';
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";

import productImage01 from './assets/productImage01.webp'
import productImage02 from './assets/productImage02.webp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/wears/:gender" element={<Products />} />
            <Route path="/wears/:gender/:name" element={<ProductIndividual />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/wears/category/leather" element={<Products category={ "leather" } />} />
            <Route path="/wears/category/wool" element={<Products category={ "wool" } />} />
            <Route path="/wears/category/parachute" element={<Products category={ "parachute" } />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
)
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home';
import Nopage from './pages/nopage/Nopage';
import ProductInfo from './components/productinfo/ProductInfo';
import ScrollTop from './components/scrolltop/ScrollTop';
import Cartpage from './components/cart/Cartpage';
import Allproduct from './components/allproduct/Allproduct';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import UserDasboard from './pages/user/UserDasboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import Addproductpage from './pages/admin/Addproductpage';
import Updateproductpage from './pages/admin/Updateproductpage';

import Mystate from './context/mystate';
import { Toaster } from 'react-hot-toast';


function App() {


  return (
   <Mystate>

    
   <Router>
   <ScrollTop/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/*' element={<Nopage/>}/>
      <Route path='/productinfo' element={<ProductInfo/>}/>  
      <Route path='/cart' element={<Cartpage/>}/>  
      <Route path='/allproduct' element={<Allproduct/>}/>  
      <Route path='/login' element={<Login/>}/>  
      <Route path='/signup' element={<Signup/>}/>  
      <Route path='/userdashboard' element={<UserDasboard/>}/>  
      <Route path='/admindashboard' element={<AdminDashboard/>}/>   
      <Route path='/addproduct' element={<Addproductpage/>}/>   
      <Route path='/updateproduct' element={<Updateproductpage/>}/>
      
</Routes>
<Toaster/>   
   </Router>
   </Mystate>
  
  )
}

export default App

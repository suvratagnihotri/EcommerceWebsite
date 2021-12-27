import './App.css';
import { BrowserRouter,Routes, Route,} from 'react-router-dom';
import Login from './containers/Login';
import Register from './containers/Register';
import Home from './containers/Home';
import AdminLogin from './containers/AdminLogin'
import AdminCategoryPage from './containers/AdminCategoryPage'
import {AdminProduct} from './containers/AdminProduct';
// import { Product } from './containers/ProductPage';
import { CartPage } from './containers/CartPage';
import { ProductsPage } from './containers/ProductsPage';
import { CheckoutPage } from './containers/CheckoutPage';
import { ProductPage } from './containers/ProductPage';
import { Test } from './containers/Test';
// import { Testing } from './containers/testing';
// import  Products  from './containers/Products';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/admin-login' element={<AdminLogin/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>} />
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/admin-category' element={<AdminCategoryPage/>}/>
          <Route exact path='/admin-product' element={<AdminProduct/>}/>
          <Route exact path='/checkout' element={<CheckoutPage/>}/>
          <Route exact path='/cart' element={<CartPage/>}/>
          <Route exact path='/mainproduct' element={<ProductPage/>}/>
          <Route exact path='/mainproduct' element={<ProductPage/>}/>




      </Routes>
    </BrowserRouter>
  );
}


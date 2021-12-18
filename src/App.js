import './App.css';
import { BrowserRouter,Routes, Route,} from 'react-router-dom';
import Login from './containers/Login';
import Register from './containers/Register';
import Home from './containers/Home';
import AdminLogin from './containers/AdminLogin'
import AdminCategoryPage from './containers/AdminCategoryPage'
import {AdminProduct} from './containers/AdminProduct';
import { Product } from './containers/Product';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/admin-login' element={<AdminLogin/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>} />
          <Route exact path='/' element={<Product/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/admin-category' element={<AdminCategoryPage/>}/>
          <Route exact path='/admin-product' element={<AdminProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}


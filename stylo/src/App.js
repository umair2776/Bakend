import prenav from "./Components/prenav.css"
import list from "./Components/list.css"
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import { CiYoutube } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

import { Routes,Route } from "react-router-dom";
import MainNavbar from "./Components/MainNavbar";
import Home from "./Components/Home";
import Summer24 from "./pages/Summer24";
import WomenShoes from "./pages/WomenShoes";
import WomenAppearls from "./pages/WomenAppearls";
import Bags from "./pages/Bags";
import Kids from "./pages/Kids";
import Acessories from "./pages/Acessories";
import Fragrances from "./pages/Fragrances";
import  'bootstrap/dist/css/bootstrap.css';
import ProductDescription from "./pages/ProductDescription";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
function App() {
  return (
    <>
    <MainNavbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/summer'24" element={<Summer24/>}/>
    <Route path="/Women Shoes" element={<WomenShoes/>}/>
    <Route path="/Women Appearls" element={<WomenAppearls/>}/>
    <Route path="/bags" element={<Bags/>}/>
    <Route path="/kids" element={<Kids/>}/>
    <Route path="/aessories" element={<Acessories/>}/>
    <Route path="/fragrances" element={<Fragrances/>}/>
    <Route path="/products/:id" element={<ProductDescription/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/add" element={<AddProduct/>}/>


  </Routes>
      </>
  );
}

export default App;

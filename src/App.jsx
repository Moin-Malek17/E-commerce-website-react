import { Route , Routes ,BrowserRouter } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import SingleProduct from './pages/SingleProduct'
import CategoryPage from './pages/CategoryPage'
function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>  
        <Route path="/product/:id" element={<SingleProduct/>}/>  
        <Route path="/category/:categoryName" element={<CategoryPage/>}/>
        <Route path="/:id" element={<SingleProduct/>}/>  
        <Route path="/contact" element={<Contact/>}/> 
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

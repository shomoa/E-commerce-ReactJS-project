import HomePage from "./Page/Home/HomePage";
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import NavBarLogin from './Components/Home/utility/NavBarLogin';
import Footer from './Components/Home/utility/Footer';
import LoginPage from './Page/Home/Auth/LoginPage';
import RegisterPage from "./Page/Home/Auth/RegisterPage";
import AllCategoryPages from './Page/Category/AllCategoryPages';
import AllBrandPages from "./Page/Brand/AllBrandPages";
import ShopProductsPage from "./Page/Product/ShopProductsPage";

function App() {
  return (
    <div className="font" > {/*all app within the same font */}
    <NavBarLogin />

     <BrowserRouter>
     <Routes>
     
     <Route index element={<HomePage/>} ></Route>  {/*or index for main page <Route path=" " element={<HomePage/>} ></Route> */}
     <Route path="/login" element={<LoginPage/>} ></Route> 
     <Route path="/register" element={<RegisterPage />} ></Route> 
     <Route path="/allcategory" element={<AllCategoryPages />} ></Route> 
     <Route path="/allbrand" element={<AllBrandPages />} ></Route> 
     <Route path="/product" element={<ShopProductsPage />} ></Route> 

     </Routes>
     
     </BrowserRouter>
     <Footer />




      
    </div>
  );
}

export default App;

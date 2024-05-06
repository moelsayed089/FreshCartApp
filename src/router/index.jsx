import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import { MainLayout } from "../pages/Layout";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Product } from "../pages/Product";
import { Brands } from "../pages/Brands";
import { Categories } from "../pages/Categories";
import { Profile } from "../pages/Profile";
import { NotFound } from "../pages/NotFound";
import HomePage from "../pages";
import EmailRest from "../pages/EmailRest";
import { OTPPage } from "../pages/OTPPage";
import { NewPassword } from "../pages/NewPassword";
import { ProductDetailes } from "../pages/ProductDetailes";
import { Cart } from "../pages/Cart";
import { Payment } from "../pages/Payment";
import { Allorders } from "../pages/Allorders";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<MainLayout/>} errorElement={''}>
                <Route index element={<HomePage/>}/> 
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register />}/>
                <Route path="product" element={<Product />}/>
                <Route path="productdetailes/:id" element={<ProductDetailes />}/>
                

                <Route path="brands" element={<Brands />}/>
                <Route path="categories" element={<Categories />}/>
                <Route path="profile" element={<Profile />}/>
                <Route path="cart" element={<Cart />}/>
                <Route path="payment" element={<Payment />}/>
                <Route path="allorders" element={<Allorders />}/>


                <Route path="emailrest" element={<EmailRest />}/>
                <Route path="otppage" element={<OTPPage />}/>
                <Route path="newpassword" element={<NewPassword />}/>
        </Route>

        <Route path="*" element={<NotFound />}/>
        </>
    )
);






export default router;
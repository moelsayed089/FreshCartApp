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

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<MainLayout/>} errorElement={''}>
                <Route index element={<HomePage/>}/> 
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register />}/>
                <Route path="product" element={<Product />}/>
                <Route path="brands" element={<Brands />}/>
                <Route path="categories" element={<Categories />}/>
                <Route path="profile" element={<Profile />}/>
        </Route>

        <Route path="*" element={<NotFound />}/>
        </>
    )
);






export default router;
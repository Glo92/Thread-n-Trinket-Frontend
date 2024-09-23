import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import MensWear from "./MensWear";
import WomenWear from "./WomenWear";
import Accesories from "./Accesories";
import SignInDetails from "./SignInDetails";
import LoginDetails from "./LoginDetails";
import MensAccesories from "../components/MensAccesories";
import WomensAccesories from "../components/WomensAccesories";
import WomensShoes from "../components/WomensShoes";
import MensShoes from "../components/MensShoes";
import ProductDetails from "../components/ProductDetails";
import CartPage from "../components/CartPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/signin',
        element: <SignInDetails/>
    },
    {
        path: '/login',
        element: <LoginDetails/>
    },
    {
        path: '/mensclothes',
        element: <MensWear/>
    },
    {
        path: '/womensclothes',
        element: <WomenWear/>
    },
    {
        path: '/menshoes',
        element: <MensShoes/>
    },
    {
        path: '/womenshoes',
        element: <WomensShoes/>
    },
    {
        path: '/accesories',
        element: <Accesories/>
    },
    {
        path: '/mensaccesories',
        element: <MensAccesories/>
    },
    {
        path: '/womensaccesories',
        element: <WomensAccesories/>
    },
    {
        path: '/details/:id', // Add :id to capture product ID
        element: <ProductDetails/>
    },
    {
        path: '/cart', 
        element: <CartPage/>
    }

  
])
export default router;
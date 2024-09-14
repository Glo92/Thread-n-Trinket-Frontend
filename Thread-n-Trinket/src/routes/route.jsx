import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import MensWear from "./MensWear";
import WomenWear from "./WomenWear";
import Accesories from "./Accesories";
import SignInDetails from "./SignInDetails";
import LoginDetails from "./LoginDetails";

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
        path: '/men',
        element: <MensWear/>
    },
    {
        path: '/women',
        element: <WomenWear/>
    },
    {
        path: '/accesories',
        element: <Accesories/>
    }

  
 
])
export default router;
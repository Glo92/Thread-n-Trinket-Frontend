import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import MensWear from "./MensWear";
import WomenWear from "./WomenWear";
import Accesories from "./Accesories";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
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
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home/Home";
import { CategoryPage } from "../Pages/Category/CategoryPage";
import { Search } from "../Pages/search/Search";
import { ShopPage } from "../Pages/Shop/ShopPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/",   element: <Home/>},
            {path:"/categories/:categoryName" ,element: <CategoryPage/>},
            {path:"/search" ,element: <Search/>},
            {path:"/shop",element:<ShopPage/>}

            
        ]
    },
]);

export default router;
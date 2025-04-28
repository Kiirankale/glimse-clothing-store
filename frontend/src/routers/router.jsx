import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home/Home";
import { CategoryPage } from "../Pages/Category/CategoryPage";
import { Search } from "../Pages/search/Search";
import { ShopPage } from "../Pages/Shop/ShopPage";
import { SingleProduct } from "../Pages/Shop/ProductDetails/SingleProduct";
import { Login } from "../Components/Login";
import { Register } from "../Components/Register";
import PaymentSuccess from "../Components/PaymentSuccess";
import DashboardLayout from "../Pages/dashboard/DashboardLayout";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/categories/:categoryName", element: <CategoryPage /> },
            { path: "/search", element: <Search /> },
            { path: "/shop", element: <ShopPage /> },
            { path: "/shop/:id", element: <SingleProduct /> },
            {
                path: "/success",
                element: <PaymentSuccess />
            }


        ]
    },
    {
        path: "/login",
        element: <Login />

    },
    {
        path: "/register",
        element: <Register />
    },
    // Dashboard routes starts here


    {
        path: "/dashboard", element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        //Todo: user private routes here 

        children: [
            // user routes
            { path: '', element: <div>User Dashboard</div> },
            { path: 'orders', element: <div>User orders</div> },
            { path: 'payments', element: <div>User payments</div> },
            { path: 'profile', element: <div>User profile</div> },
            { path: 'reviews', element: <div>User reviews</div> },

            // admin routes only accesible by admin

            { path: "admin", element: <PrivateRoute role="admin" ><div>Admin Main</div></PrivateRoute> },
            { path: "add-new-post", element: <PrivateRoute role="admin" ><div>New post</div></PrivateRoute> },
            { path: "manage-products", element: <PrivateRoute role="admin"><div>Manage Post</div></PrivateRoute> },
            { path: "update-product/:id", element: <PrivateRoute role="admin" ><div>Update Post</div></PrivateRoute> },
            { path: "users", element: <PrivateRoute role="admin" ><div>All users</div></PrivateRoute> },
            { path: "manage-orders", element: <PrivateRoute role="admin" ><div>Manage orders</div></PrivateRoute> },
        ]
    }
]);

export default router;
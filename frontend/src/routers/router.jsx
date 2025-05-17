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
import UserDMain from "../Pages/dashboard/user/dashboard/UserDMain";
import UserOrders from "../Pages/dashboard/user/UserOrders";
import OrdersDetails from "../Pages/dashboard/user/OrderDetails";
import UserDashboard from "../Pages/dashboard/UserDashboard";
import UserPayments from "../Pages/dashboard/user/UserPayments";
import UserReviews from "../Pages/dashboard/user/UserReviews";
import UserProfile from "../Pages/dashboard/user/UserProfile";
import AdminDMain from "../Pages/dashboard/admin/dashboard/AdminDMain";

import ManageProduct from "../Pages/dashboard/admin/manageProduct/ManageProduct";
import UpdateProduct from "../Pages/dashboard/admin/manageProduct/UpdateProduct";
import AddProduct from "../Pages/dashboard/admin/addProduct/AddProduct";
import ManageUser from "../Pages/dashboard/admin/users/ManageUser";


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
            },
            {
                path: "/order/:orderId",
                element: <OrdersDetails/>
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
            { path: '', element: <UserDMain/> },
            { path: 'orders', element: <UserOrders/> },
            { path: 'payments', element:<UserPayments/> },
            { path: 'profile', element: <UserProfile/> },
            { path: 'reviews', element: <UserReviews/> },

            // admin routes only accesible by admin

            { path: "admin", element: <PrivateRoute role="admin" ><AdminDMain/></PrivateRoute> },
            { path: "add-product", element: <PrivateRoute role="admin" ><AddProduct/></PrivateRoute> },
            { path: "manage-products", element: <PrivateRoute role="admin"><ManageProduct/></PrivateRoute> },
            { path: "update-product/:id", element: <PrivateRoute role="admin" ><UpdateProduct/></PrivateRoute> },
            { path: "users", element: <PrivateRoute role="admin" ><ManageUser/></PrivateRoute> },
            { path: "manage-orders", element: <PrivateRoute role="admin" ><div>Manage orders</div></PrivateRoute> },
        ]
    }
]);

export default router;
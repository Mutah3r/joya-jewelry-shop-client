import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddJewelry from "../pages/AddJewelry/AddJewelry";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import AllJewelry from "../pages/AllJewelry/AllJewelry";
import MyJewelry from "../pages/MyJewelry/MyJewelry";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/add-jewelry',
                element: <AddJewelry />
            },
            {
                path: '/all-jewelry',
                element: <AllJewelry />
            },
            {
                path: '/my-jewelry',
                element: <PrivateRoute><MyJewelry /></PrivateRoute>
            },
            {
                path: '/products/:id',
                element: <ProductDetails />
            },
        ]
    }
]);
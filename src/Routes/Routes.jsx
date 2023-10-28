import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Checkout from "../pages/Checkout/Checkout";
import BookService from "../pages/BookService/BookService";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<Main></Main>),
        errorElement: (<div>error</div>),
        children: [
            {
                path: '/',
                element: (<Home></Home>)
            },
            {
                path: '/signup',
                element: (<SignUp></SignUp>)
            },
            {
                path: '/login',
                element: (<Login></Login>)
            },
            {
                path: '/book-service/:id',
                element: (<BookService></BookService>),
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: (<Checkout></Checkout>),
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    },
]);

export default router;
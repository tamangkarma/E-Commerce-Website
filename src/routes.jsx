import { createBrowserRouter } from "react-router";
import MainLayout from "./Layout/mainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/signup",
                element: <Signup/>,
            }
        ]
    }
])
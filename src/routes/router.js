import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Courses from "../components/Courses";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Register from "../components/Register";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Courses />,
            },
            {
                path: '/profile',
                element: <Profile />,
            },
            {
                path: '/courses',
                element: <Courses />,
            },
            {
                path: '/courses/:id',
                element: <Courses />,
            },
            {
                path: '/course-details/:id',
                element: <Courses></Courses>
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/login',
                element: <Login />,
            },
        ]
    }
])
export default router;
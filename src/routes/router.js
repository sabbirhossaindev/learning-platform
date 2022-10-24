import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Courses from "../components/Courses";
import ErrorPage from "../components/ErrorPage";
import FAQ from "../components/FAQ";
import Profile from "../components/Profile";
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
                path: '/faq',
                element: <FAQ />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
        ]
    }
])
export default router;
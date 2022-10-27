import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Profile from "../../Pages/Others/Profile/Profile";
import CourseDetails from "../../Pages/Shared/CourseDetails/CourseDetails";
import Login from "../../Pages/Shared/Login/Login/Login";
import Register from "../../Pages/Shared/Login/Register/Register";
import NotFound from "../../Pages/Shared/NotFound/NotFound";
import RightSideNav from "../../Pages/Shared/RightSideNav/RightSideNav";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: 'rightsidenav',
                element: <RightSideNav></RightSideNav>,
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://b610-lerning-platform-server-side-sabbirvai.vercel.app/courses')
            },
            {
                path: '/course/:id',
                element: <PrivateRouter><CourseDetails></CourseDetails></PrivateRouter>,
                loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-sabbirvai.vercel.app/course/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <PrivateRouter><Profile></Profile></PrivateRouter>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
])
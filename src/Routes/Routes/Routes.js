import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
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
                loader: () => fetch('http://localhost:5000/course_details/5')
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/course/:id',
                element: <PrivateRouter><CourseDetails></CourseDetails></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
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
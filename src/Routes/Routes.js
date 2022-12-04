import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AboutUs from '../Components/AboutUs/AboutUs';
import Doctors from '../Components/Doctors/Doctors';
import Home from '../Components/Home/Home';
import Hospitals from '../Components/Hospitals/Hospitals';
import Medicines from '../Components/Medicines/Medicines';
import SignIn from '../Components/SignIn/SignIn';
import SignUp from '../Components/SignUp/SignUp';
import Error from '../Others/Error/Error';
import Main from '../Others/Main/Main';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/doctors',
                    element: <Doctors></Doctors>,
                    loader: () => fetch('')
                },
                {
                    path: '/hospitals',
                    element: <Hospitals></Hospitals>
                },
                {
                    path: '/medicines',
                    element: <Medicines></Medicines>
                },
                {
                    path: '/aboutUs',
                    element: <AboutUs></AboutUs>
                },
                {
                    path: '/signIn',
                    element: <SignIn></SignIn>
                },
                {
                    path: '/signUp',
                    element: <SignUp></SignUp>
                },
            ]
        },
        {
            path: '*',
            element: <Error></Error>
        }
    ]);
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default Routes;
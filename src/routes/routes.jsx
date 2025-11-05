import { createBrowserRouter } from "react-router";
import MainLayouts from "../layout/MainLayouts";
import Homepage from "../pages/Homepage";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Profile";
import Login from "../components/Login";
import Logout from "../components/Logout";
import TermsConditions from "../components/TermsConditions";
import Contact from "../components/Contact";
import PrivacyPolicy from "../components/PrivacyPolicy";


export const router = createBrowserRouter([
    {
        path : "/",
        element:<MainLayouts />, 
        children:[
            {
                index:true,
                element:<Homepage />
            },
            {
                path:"/about-us",
                element:<AboutUs />
            },
            {
                path:"/profile",
                element:<Profile />
            },
            {
                path:"/login",
                element:<Login />
            },
            {
                path:"/logout",
                element:<Logout />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/PrivacyPolicy",
                element:<PrivacyPolicy />
            },
            {
                path:"/Terms_Conditions",
                element:<TermsConditions />
            },
        ]
    }
])
import { createBrowserRouter } from "react-router-dom";

import SignIn, { loginAction } from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import UserProfile from "./pages/Users/UserProfile";
import UserProfileEdit from "./pages/Users/UserProfileEdit";


import { profileLoader } from "./pages/Users/loaders";
import Private from "./components/Private";


export const routes = createBrowserRouter([
    {
        path: "/sign-in",
        action: loginAction,
        element: <SignIn />
    },
    {
        path: "/",
        element: <Private />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/users",
                element: <Users />,
                children: [
                    {
                        path: ":userID",
                        loader: profileLoader,
                        element: <UserProfile />
                    },
                    {
                        path: ":userID/edit",
                        element: <UserProfileEdit />
                    },
                ]
            },
        ]
    },
    
])

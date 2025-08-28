import {createBrowserRouter} from "react-router";
import App from "@app/App.tsx";
import AuthLayout from "@shared/layouts/AuthLayout/AuthLayout.tsx";
import RegisterPage from "@pages/Auth/RegisterPage.tsx";
import LoginPage from "@pages/Auth/LoginPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "auth",
                Component: AuthLayout,
                children: [
                    { path: "login", Component: LoginPage },
                    { path: "register", Component: RegisterPage },
                ],
            },
        ],
    },
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Encrypt from "../pages/Encrypt";
import Decrypt from "../pages/Decrypt";
import GenerateKey from "../pages/GenerateKey";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/generatekey",
                element: <GenerateKey />,
            },
            {
                path: "/encrypt",
                element: <Encrypt />,
            },
            {
                path: "/decrypt",
                element: <Decrypt />,
            },
        ]
    },
]);

export default router;
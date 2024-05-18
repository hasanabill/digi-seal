import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Encrypt from "../pages/Encrypt";
import Decrypt from "../pages/Decrypt";
import GenerateKey from "../pages/GenerateKey";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
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
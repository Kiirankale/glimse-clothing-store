import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Navbar from "../Components/Navbar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <div>hello div</div>
            },
            {
                path: "/",
                element: <Navbar />
            }
        ]
    },
]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import MyTask from "../Pages/MyTask/MyTask";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/myTask',
                element: <MyTask />
            }
        ]
    }
])

export default router;
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import MyTask from "../Pages/MyTask/MyTask";
import Details from "../Pages/Details/Details";
import Update from "../Pages/Update/Update";

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
            },
            {
                path: '/details/:id',
                element: <Details />,
                loader: ({ params }) => fetch(`http://localhost:3000/list/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <Update />,
                loader: ({params}) => fetch(`http://localhost:3000/list/${params.id}`)
            }
        ]
    }
])

export default router;
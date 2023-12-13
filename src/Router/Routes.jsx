import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Bear from "../components/Bear/Bear";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/details/:id',
                loader: ({params}) => fetch(`https://api.punkapi.com/v2/beers/${params.id}`),
                element: <Bear/>
            }
        ]
    }
])

export default router;
import { Suspense,lazy } from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'


const HomePage = lazy(()=> import('./pages/HomePage'));
const AdminPage = lazy(()=> import('./pages/AdminPage'));

const router = createBrowserRouter([
    {path:'/', element: <HomePage/>},
    {path:'/admin', element: <AdminPage/>}
])

ReactDOM.createRppt(document.getElementById('root')).render(
    <Suspense fallback={<div>Loading....</div>}>
        <RouterProvider router={router}/>
    </Suspense>
)
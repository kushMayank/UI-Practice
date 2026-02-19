
// Basic setUp

import { BrowserRouter, Routes, Route, Outlet, useNavigation} from 'react-router-dom'

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path= '/' element={<Layout/>}>
                    <Route path='dashboard' element={<Dashboard/>}/>
                    <Route path='profile' element={<Profile/>}/>
                </Route>
            </Routes>
            
        </BrowserRouter>
    )
}

function Layout(){
    return(
        <div>
            <Navbar/>
            <Outlet/> {/* child router render here */}
        </div>
    )
}



const navigate = useNavigation();
navigate("/dashboard")
navigate(-1); // back




// Protected Route

// HOC or Wrapper route to check authenticated token and redirect unauthorized

<Route path='/dashboard' element={
    <ProtectedRoute>
        <Dashboard/>
    </ProtectedRoute>
}/>

function ProtectedRoute({children}){
    const isAuth = localStorage.getItem('token')

    if(!isAuth){
        return <Navigate to="/login"/>
    }
    return children
}


// Lazyloading in router

/*
import {lazy, suspense} from 'react'
import { Suspense } from 'react';

const Dashboard = lazy(()=> import('./Dashboard'))

    <Suspense fallback={<p>Loading....</p>}>
        <Dashboard/>
    </Suspense>

 */   

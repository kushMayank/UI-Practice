
// Basic setUp

import { BrowserRouter, Routes, Route} from 'react-router-dom'
function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path= '/' element={<Layout/>}>
                    <
                </Route>
            </Routes>
            
        </BrowserRouter>
    )
}


// Nested Routing


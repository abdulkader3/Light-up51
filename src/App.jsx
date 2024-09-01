
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Registion from './pages/Registion'
import ChatingPage from './component/ChatingPage'
import database from './firebase.config'
import { ToastContainer } from 'react-toastify'
import ForgetPassword from './pages/ForgetPassword'
import Profile from './component/Profile'

function App() {
  const shanto = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/registion' element={<Registion/>}/>
        <Route path='/forgetPassword' element={<ForgetPassword/>}/>
        <Route path='/chating' element={<ChatingPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )


  return (
    <>
    <ToastContainer />
    <RouterProvider router={shanto}/>
    
     
    </>
  )
}

export default App

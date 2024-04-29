import { RouterProvider } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import router from "./router"
import {AuthProvider} from './context/auth'


function App() {
  return (
    <>
      <AuthProvider >
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </>
  )
}

export default App

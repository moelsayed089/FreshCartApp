import { RouterProvider } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import router from "./router"

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App

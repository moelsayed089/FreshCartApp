import { RouterProvider } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import router from "./router"
import {AuthProvider} from './context/auth'
import { QueryClient, QueryClientProvider } from "react-query";


function App() {
  let clientQuery = new QueryClient();
  return (
    <>
     <QueryClientProvider client={clientQuery}>
        <AuthProvider >
          <RouterProvider router={router} />
          <Toaster />
        </AuthProvider>
     </QueryClientProvider>
    </>
  )
}

export default App

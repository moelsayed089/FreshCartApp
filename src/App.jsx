import { RouterProvider } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import router from "./router"
import {AuthProvider} from './context/auth'
import { QueryClient, QueryClientProvider } from "react-query";
import { CartCintextProvider } from "./context/cartContext";


function App() {
  let clientQuery = new QueryClient();
  return (
    <>
     <QueryClientProvider client={clientQuery}>
        <CartCintextProvider >
          <AuthProvider >
            <RouterProvider router={router} />
            <Toaster />
          </AuthProvider>
        </CartCintextProvider>
     </QueryClientProvider>
    </>
  )
}

export default App

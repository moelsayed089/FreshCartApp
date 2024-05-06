import { jwtDecode } from "jwt-decode";
import { useQuery } from "react-query";
import instance from "../config/axios.config";
import { Loading } from "../components/ui/Loading";


export const Allorders = () => {
  const {id} = jwtDecode(localStorage.getItem('token'));

  function GetAllOrders(){
    return instance.get(`/orders/user/${id}`)
  }
  const {data,isLoading}=useQuery('allorders', GetAllOrders)

  if (isLoading) return <Loading color={'#14B014'} width={"80"} />
  return <>
    <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-8">

          {data?.data.map((order,idx)=>{
            return <div key={idx} className=" rounded-lg bg-gray-100 py-3 px-4 shadow-sm ">
                <div className="mb-3">
                  <p className="font-medium">Payment Method: {order.paymentMethodType}</p>
                  <p className="font-medium">TotalOrderPrice: {order.totalOrderPrice}</p>
                </div>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">

                  {order.cartItems?.map((item, index)=>{
                    return <div key={index} className="cardone md:col-span-">
                      <img src={item.product.imageCover} className="w-full  " alt="" loading="lazy"/>
                      <p className="text-green-600 font-semibold">{item.product.title.split(" ").slice(0, 2).join(' ')}</p>
                      </div>

                  })}
                  
                </div>
              </div>
          
          })}
        </div>
  
      
  </div>
  </> 
}


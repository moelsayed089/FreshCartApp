import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../context/cartContext'
import { Loading } from '../components/ui/Loading'
import toast from 'react-hot-toast'

export const Cart = () => {
  const { UpdataProductToCart, DeleteProductToCart, GetProductToCart, numOfCartItems, totalCartPrice, allProducts } = useContext(cartContext)
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    GetProductToCart()
  }, [])



  const DeleteItemToCart =async(productId)=>{
    setIsLoading((previousState) => ({
      ...previousState,
      [productId]: true
    }))
    const res= await DeleteProductToCart(productId)
    console.log(res)
    if (res.status === "success"){
      toast.success("Product Deleted successfully", {
        position: "bottom-right"
      })
    }
    setIsLoading((previousState) => ({
      ...previousState,
      [productId]: false
    }))
  }



  const UpdataProductToCartIncrement = async (productId,count) => {
    const res = await UpdataProductToCart(productId,count)
    console.log(res)
    if (res.status === "success") {
      toast.success("Product Increamet successfully", {
        position: "bottom-right"
      })
    }
  }



  const UpdataProductToCartdecreasement = async (productId, count) => {
    const res = await UpdataProductToCart(productId, count)
    console.log(res)
    if (res.status === "success") {
      toast.success("Product Decreasement successfully", {
        position: "bottom-right"
      })
    }
  }

  if (allProducts === null) return <Loading color={'#14B014'} width={"80"} />

  return <>
    <div className="mx-auto max-w-screen-xl  px-4 sm:px-6 lg:px-8">
      <div className='py-2 px-3'>
        <h1 className='text-3xl font-medium mb-3'>Shop Card</h1>
        <p className='text-lg'>numOfCartItems: {numOfCartItems}</p>
        <p className='text-lg mb-1'>totalCartPrice: {totalCartPrice}</p>
      </div>

      {allProducts.map((item, idx) => {
        return <div key={idx} className=" grid grid-cols-1 md:grid-cols-12 mb-2  px-3 py-2 bg-slate-50 border-solid border-1 border-green-400 rounded-md border-b-4  ">

          <div className="col-span-1 py-2">
            <img className=" h-[100px] rounded-md object-cover " src={item.product.imageCover} alt="" />
          </div>


          <div className="col-span-9 py-2 ">
            <p className="text-green-600 font-normal text-sm">{item.product.category.name}</p>
            <h2 className="text-xl font-semibold">{item.product.title}</h2>
            <p className="text-lg font-semibold">{item.price} EGP</p>
            <button onClick={() => DeleteItemToCart(item.product.id)} 
            className=" mt-2 border-2 py-1 rounded-md px-4 border-red-500 hover:text-white hover:bg-red-600 duration-200 " >
              {isLoading[item.product.id] ? <Loading color={"#21313C"} width={20} />: "Delete"}
              </button>
          </div>

          <div className="col-span-1 flex items-center justify-between mt-3 md:mt-0 ">
            <button onClick={() => UpdataProductToCartdecreasement(item.product.id, item.count - 1)} className="border-2  py-1 rounded-md px-3 border-green-400  " >-</button>
            <p className="text-lg font-semibold mx-4">{item.count}</p>
            <button onClick={() => UpdataProductToCartIncrement(item.product.id, item.count + 1)} className="border-2 py-1 rounded-md px-3 border-green-400  ">+</button>
          </div>
        </div>
      })}






    </div>
  </>



}

import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../context/cartContext'
import { Loading } from '../components/ui/Loading'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const { ClearProductToCart, UpdataProductToCart, DeleteProductToCart, GetProductToCart, numOfCartItems, totalCartPrice, allProducts } = useContext(cartContext)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingRemoveAllProduct, setIsLoadingRemoveAllProduct] = useState(false)


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



  const RemoveAllProductToCart = async () => {
    setIsLoadingRemoveAllProduct(true)
    const res = await ClearProductToCart()
    console.log(res)
    if (res.message === "success") {
      toast.success("Clear All Products successfully", {
        position: "bottom-right"
      })
    }
    setIsLoadingRemoveAllProduct(false)
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
      {allProducts.length === 0 ? <div className='flex items-center justify-center h-screen'>
        <h1 className='text-5xl'>Not Products Added !!</h1>
      </div> : <div className='py-2 px-3'>
        <h1 className='text-3xl font-medium mb-3'>Shop Card</h1>
        <p className='text-lg'>numOfCartItems: {numOfCartItems}</p>
        <p className='text-lg mb-1'>totalCartPrice: {totalCartPrice}</p>
      </div>}


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
            className=" mt-2  py-1 rounded-md px-4 bg-red-500 text-white  " >
              {isLoading[item.product.id] ? <Loading color={"#eee"} width={20} />: "Delete"}
              </button>
          </div>

          <div className="col-span-1 flex items-center justify-between mt-3 md:mt-0 ">
            <button onClick={() => UpdataProductToCartdecreasement(item.product.id, item.count - 1)} className="border-2  py-1 rounded-md px-3 border-green-400  " >-</button>
            <p className="text-lg font-semibold mx-4">{item.count}</p>
            <button onClick={() => UpdataProductToCartIncrement(item.product.id, item.count + 1)} className="border-2 py-1 rounded-md px-3 border-green-400  ">+</button>
          </div>
        </div>
      })}



    <div className=' flex justify-between items-center mb-10'>
        {allProducts.length === 0 ? "" : <button onClick={() => RemoveAllProductToCart()}
          className=" mt-2 border-2 text-sm font-medium  me-2 py-2 rounded-md px-3 border-red-500 hover:text-white hover:bg-red-600 duration-200 ">
          {isLoadingRemoveAllProduct ? <Loading color={"#0D0D0D"} width={20}/> : "Clear All Products"}
        </button>}



        {allProducts.length === 0 ? "" : <Link to={'/payment'} 
          className=" mt-2 border-2 py-2 text-sm font-medium rounded-md px-3 border-green-500 hover:text-white hover:bg-green-500 duration-200 ">
          Confirm Order
        </Link>}
    </div>


    </div>
  </>
}
